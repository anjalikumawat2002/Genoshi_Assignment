import ForceGraph3D from "3d-force-graph";
import React,{ useContext, useEffect, useRef, useState } from "react";
import PropTypes from 'prop-types';
import { useTheme } from "../context/ThemeContext";

const ContainerContext = React.createContext();

const useContainer = ()=>{
    const {scrollY} = useContext(ContainerContext);
    return scrollY;
}


const CustomBackground = ({width, height, children})=>{
    const element = useRef();
    const theme = useTheme();
    const graphRef = useRef();
    const containerRef = useRef();
    const [scrollY, setScrollY] = useState(0);


    useEffect(()=>{
        const GROUPS = 10;
        
        const initData = {
            nodes: [ {id: 0, group:0 } ],
            links: []
        };
        graphRef.current = ForceGraph3D()
            (element.current) // eslint-disable-line
            .nodeAutoColorBy('group')
            .linkAutoColorBy(d=>{
                const {nodes} = graphRef.current.graphData();
                return nodes[d.source].group;
            })
            .enableNodeDrag(false)
            .enableNavigationControls(false)
            .linkWidth(2)
            .width(element.current.clientWidth)
            .height(element.current.clientHeight)
            .showNavInfo(false)
            .graphData(initData);
            

            console.log(element)


        const genNodeInterval = setInterval(() => {
            const { nodes, links } = graphRef.current.graphData();
            const id = nodes.length;
            graphRef.current.graphData({
                nodes: [...nodes, { id, group: Math.ceil(Math.random() * GROUPS) }],
                links: [...links, { source: id, target: Math.round(Math.random() * (id-1)) }]
            });
            

            if(nodes.length > 70){
                clearInterval(genNodeInterval);
            }

        }, 1500);


        const resizeListener = window.addEventListener('resize', ()=>{
            const elementWidth = element.current.clientWidth || 0;
            const elementHeight = element.current.clientHeight || 0;
            graphRef.current.width(elementWidth)
            .height(elementHeight)
        })

        
        return()=>{
            clearInterval(genNodeInterval)
            window.removeEventListener("resize", resizeListener)   
        }

    }, []);

    useEffect(()=>{
        if(theme === "dark"){
            graphRef.current.backgroundColor("#111827")
        }
        else {
            graphRef.current.backgroundColor("#fff")
        }

    }, [theme])

    function handleScroll(){
        setScrollY(containerRef.current.scrollTop);
    }

    

    return(
    <ContainerContext.Provider value={{scrollY: scrollY}}>
    <div className="overflow-hidden" style={{height:height, width:width}}>
        <div ref={element} className="w-[inherit] h-[inherit] absolute z-0">
            this is home component
        </div>

        <div ref={containerRef} onScroll={handleScroll} className="relative top-0 left-0 z-1 text-white w-full h-screen overflow-auto backdrop-blur-sm">
            {children}            
        </div>
    </div>
    
    </ContainerContext.Provider>)

}

CustomBackground.propTypes = {
    width: PropTypes.string,
    height: PropTypes.string,
    children: PropTypes.any
}

CustomBackground.defaultProps = {
    width: '100%',
    height: '100vh'
}

export {useContainer} // eslint-disable-line
export default CustomBackground;