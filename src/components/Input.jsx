import { EyeIcon, EyeOffIcon } from 'lucide-react';
import PropTypes from 'prop-types'
import { useRef, useState } from 'react';

const CustomInput = ({label, width, value, onChange, type, disable, className})=>{


    const [showPassword, setShowPassword] = useState(false);

    if(type === 'password'){
        return(
            <>
            <label className={`flex flex-wrap items-center ${className}`} style={{width:width}}>
                <p className='mr-5 p-1'>{label}:</p>
                <input 
                type={showPassword?'text':'password'}
                value={value}
                onChange={onChange}
                disabled={disable}
                placeholder={"Enter "+label}
                className='p-2 flex-1 border-r-0 rounded-l-md border outline-none dark:border-black dark:text-white dark:bg-zinc-700 bg-gray-300 text-black min-w-[200px]'
                />
                <button onClick={()=>{
                    setShowPassword(prev=>!prev)
                }}
                className='dark:border-black dark:text-white dark:bg-zinc-700 bg-gray-300 text-black p-2 border border-l-0 rounded-r-md'
                >
                    {showPassword?
                        <EyeIcon />
                    :
                        <EyeOffIcon />

                    }
                </button>
            </label>
            </>
        )
    }

    return(
        <>
        <label className={`flex flex-wrap gap-2 items-center ${className}`} style={{width:width}}>
            <p>{label}:</p>
            <input 
            type='text'
            value={value}
            onChange={onChange}
            disabled={disable}
            placeholder={"Enter "+label}
            className='p-2 flex-1 rounded-md border outline-none dark:border-black dark:text-white text-black min-w-[200px] dark:bg-zinc-700 bg-gray-300'
            />
        </label>
        </>
    )

}

const ColorInput = ({onChange})=>{

    const colorInputRef = useRef();
    return(
        <>
        <button className="p-2 rounded-md border-2 font-bold flex gap-2 items-center"
        onClick={()=>{
            colorInputRef.current.click();
        }}
        >
            Select Color
            <input type="color" name="" id="" className="hover:cursor-pointer" ref={colorInputRef} onChange={onChange}/>
        </button>
        </>
    )

}

ColorInput.propTypes = {
    onChange: PropTypes.func
}

CustomInput.propTypes = {
    label: PropTypes.string,
    width: PropTypes.string,
    value: PropTypes.string,
    type: PropTypes.string,
    onChange: PropTypes.func,
    disable: PropTypes.bool,
    className: PropTypes.string
}
export {ColorInput}
export default CustomInput;