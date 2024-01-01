import { useRef, useState } from "react"
import ProfilePic from '../../assets/react.svg'
import Popup from "../../components/popup";
import { Pencil } from "lucide-react";
import GradientButton from "../../components/gradbutton";

const ImageEditor = ()=>{

    const [profilePicModel, setProfilePicModel] = useState(false);
    const inputFileRef = useRef();
    const [imageSrc, setImageSrc] = useState(ProfilePic)
    const [prevImageSrc, setPrevImageSrc] = useState(ProfilePic);

    function imageHandler(e){
        const file = e.target.files[0];

        const reader = new FileReader();
        reader.onload = ()=>{
            console.log(reader.result)
            setPrevImageSrc(reader.result)
        }

        reader.readAsDataURL(file);

    }


    return(
        <>
        <div>
            <button  onClick={()=>{setProfilePicModel(true)}} 
            className='
            relative
            rounded-full
            overflow-hidden 
            object-contain 
            p-2 aspect-square
            border
            dark:bg-gray-700
            dark:border-black
            bg-gray-300
            border-gray-400
            '
            >
                <img src={imageSrc} alt="" className='w-24 sm:w-36 h-auto'/>
                <Pencil className="absolute bottom-4 right-4 dark:bg-zinc-700 bg-gray-200 p-2 rounded-md" size={35}/>
            </button>
            <Popup 
            type={'model'} 
            isOpen={profilePicModel} 
            onClose={()=>{
                setProfilePicModel(false)
                setPrevImageSrc(imageSrc);
            }}
            onOpen={()=>{inputFileRef.current.click()}}
            >
                <div className='p-2'>
                    <img src={prevImageSrc} className='w-[250px] sm:w-[500px] aspect-video object-contain' alt="" />
                    <div className="p-2">
                        <GradientButton clickHandler={()=>{
                            setImageSrc(prevImageSrc)
                            setProfilePicModel(false)
                        }}>
                            Save
                        </GradientButton>

                        <button onClick={()=>{setProfilePicModel(false)}}>
                            cancel
                        </button>
                    </div>
                </div>
            </Popup>
            <input type="file" accept="image/*" hidden ref={inputFileRef} onChange={imageHandler}/>
        </div>
        </>
    )
}

export default ImageEditor;