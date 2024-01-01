import { useRef } from "react";
import PropTypes from 'prop-types'



const DropComponent = ({setFile})=>{

    const inputFileRef = useRef();

    function handleFile(e){
        e.preventDefault();
        let files = [];
        if(e.dataTransfer){
            files = e.dataTransfer.files;
        }
        else {
            files = e.target.files
        }

        console.log(files)

        for(let i=0; i<files.length; i++){
            const reader = new FileReader();
    
            reader.onload = (data)=>{
                setFile?.(prev=>[...prev, {name: files[i].name, data:data.target.result}]);
            }
            reader.readAsDataURL(files[i]);
        }
        

    }

    

    return(
        <>
        <div className="relative p-14 rounded-md border-2 grid place-items-center" onDrop={handleFile} onDragOver={(e)=>{e.preventDefault()}}>
            <p className="opacity-20 absolute top-5">Drag here to drop</p>
            <button className="underline opacity-50 border p-2 rounded-md border-dotted" onClick={()=>{inputFileRef.current.click()}}>upload papers</button>
        </div>
        <input type="file" multiple hidden ref={inputFileRef} onChange={handleFile}/>
        </>
    )
}

DropComponent.propTypes = {
    setFile: PropTypes.func
}



export default DropComponent