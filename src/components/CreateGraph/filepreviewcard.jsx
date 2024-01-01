import { X } from 'lucide-react';
import PropTypes from 'prop-types';

const FilePreviewCard = ({name, data, onClose})=>{


    return(
        <>
        
        <div className='p-2 rounded-md dark:bg-zinc-700 bg-gray-200 relative w-[250px]'>
            <div className='aspect-video border-b-2 object-contain overflow-hidden'>
                <object data={data} type="" className='w-full overflow-hidden'>
                </object>
            </div>
            <div className='px-1 py-4 text-lg font-bold w-full break-words'>
                {name}
            </div>

            <button onClick={onClose} className='absolute p-1 rounded-full bg-red-400 font-mono aspect-square object-contain -right-1 -top-1'>
             <X size={15} strokeWidth='4px'/>
            </button>
        </div>
        </>
    )

}

FilePreviewCard.propTypes = {
    name: PropTypes.string,
    data: PropTypes.any,
    onClose: PropTypes.func 
}

export default FilePreviewCard;