import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import Popup from './popup';
import { ChevronDownSquare } from 'lucide-react';

const SelectBox = ({onChange, title, options, className})=>{

    const [showModel, setShowModel] = useState(false);
    const [value, setValue] = useState('');

    useEffect(()=>{
        onChange?.(value);
        console.log('calling')
    }, [value]) //eslint-disable-line


    return(
        <>
        <div className={className}>

            <button className='dark:bg-zinc-600 bg-gray-300 p-2 rounded-md'
                onClick={()=>{setShowModel(true)}}
            >
                <div className='flex items-center gap-2'>
                    <span>
                        {value?value:title}
                    </span>
                    <span className={`transition-transform duration-150`} style={{transform:`${showModel?'rotateX(180deg)':'rotateX(0)'}`}}>
                        <ChevronDownSquare />
                    </span>
                </div>
            </button>
            <Popup isOpen={showModel} onClose={()=>{setShowModel(false)}}>
                <div className='p-2'>
                    <button className='w-full p-2 border-t border-b text-center' onClick={()=>{
                        setValue('')
                        setShowModel(false);
                        }}>-- select --</button>
                    {options.map(label=>{
                        return <button key={label}
                        className='w-full p-2 border-t border-b font-normal text-left'
                        onClick={()=>{
                            setValue(label);
                            setShowModel(false);
                        }}
                        >{label}
                        </button>
                    })}
                </div>
            </Popup>
        </div>
        
        </>
    )
}

SelectBox.propTypes = {
    onChange: PropTypes.func,
    title: PropTypes.string,
    className: PropTypes.string,
    options: PropTypes.array

}

export default SelectBox;