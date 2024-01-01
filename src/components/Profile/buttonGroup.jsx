import { Link } from "react-router-dom";
import GradientButton from "../gradbutton";
import { useRef } from "react";


const ButtonGroup = ()=>{

    const fileInputRef = useRef();

    return(
        <>
        <h1 className="text-xl mt-5 p-2 font-bold">User Actions</h1>
        <div className="flex justify-center p-2 gap-5 mb-5 flex-wrap">
            <GradientButton>
                <Link to={'/create_graph'} className="font-bold">
                    Create a new Graph
                </Link>
            </GradientButton>

            <GradientButton>
                <p className="font-bold">Share Graph</p>
            </GradientButton>

            <GradientButton clickHandler={()=>{fileInputRef.current.click()}}>
                <p className="font-bold">Upload Papers</p>
            </GradientButton>
            
            <input ref={fileInputRef} type="file" name="file_input" id="" hidden/>
        </div>
        </>
    )
}

export default ButtonGroup;