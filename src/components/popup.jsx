import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
function Popup({onOpen, onClose, children, isOpen, hAlign, type}){

    const [open, setOpen] = useState(isOpen);

    useEffect(()=>{
        setOpen(isOpen)
        if(isOpen){
            onOpen?.()
        }

    }, [isOpen])//eslint-disable-line

    useEffect(()=>{
        if(!open) onClose?.();
    }, [open])//eslint-disable-line

    if(type==='model'){
        return(
            <div>
            {open &&
            <div className='flex absolute top-0 left-0 w-full h-screen justify-center items-center'>
                <div className='top-0 left-0 absolute backdrop-blur-md z-10 w-full h-screen' 
                onClick={()=>{setOpen(false)}}
                >
                    
                </div>
                
                <div className='z-20 min-w-[200px] rounded-md dark:bg-zinc-600 bg-gray-200 dark:text-white text-black'>
                    {children}
                </div>
            </div>}
            
            </div>
        )
    }

    return(
    <>
    
    <div className='relative w-full'>
        {open && 
        <>
        <div className={`bg-gray-100 
        rounded-md dark:bg-zinc-950 
        dark:text-white 
        text-black absolute 
        z-20 px-2 py-1 
        top-2
        ${hAlign==='left'?'right-0':hAlign==='right'&& 'left-0'} min-w-[200px]`}
        >
            {children}
        </div>
        
        </>}
    
    </div>

    {open &&
    <div className=' w-full fixed h-screen z-10 top-0 left-0' onClick={()=>{setOpen(false)}}>
            
    </div>
    }

    </>)
}


Popup.propTypes = {
    type: PropTypes.string,
    onOpen: PropTypes.func,
    onClose: PropTypes.func,
    isOpen: PropTypes.bool,
    hAlign: PropTypes.string,
    children: PropTypes.any
}

export default Popup;