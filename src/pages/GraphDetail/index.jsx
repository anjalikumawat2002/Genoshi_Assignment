import CustomInput from "../../components/Input";
import Graph from '../../assets/images/thumbnail.png'
import GradientButton from "../../components/gradbutton";
import FilePreviewCard from "../../components/CreateGraph/filepreviewcard";
import Popup from "../../components/popup";
import { useState } from "react";


const GraphDetail = ()=>{

    const [isOpen, setIsOpen] = useState(false);

    const title = "Lorem ipsum dolor sit amet."
    const desc = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda id quibusdam aliquid inventore. Eveniet ipsum magnam ullam accusamus veritatis assumenda.'

    return(
        <>
        <section className="mx-auto pt-24 dark:text-white text-black">

            <div className="flex items-center flex-wrap gap-5">
                <CustomInput label={'Title'} className={'text-xl font-bold'} value={title} disable/>
            </div>


            <div className="flex itmes-center flex-wrap gap-5 my-5">
                <textarea 
                name="desc" 
                cols="30" 
                rows="7" 
                className="flex-1 rounded-md resize-none dark:bg-zinc-600 bg-gray-300 p-4 h-fit"
                placeholder="Enter Description"
                value={desc}
                disabled
                ></textarea>
                
            </div>

            <div className="flex flex-col items-center justify-center gap-2 my-5 w-full">
                <img src={Graph} className="max-w-[275px] h-auto aspect-video object-contain p-2 dark:bg-zinc-700 bg-gray-200 rounded-md" alt="" />
                <GradientButton width={'fit-content'} clickHandler={()=>{setIsOpen(true)}}>
                    preview graph
                </GradientButton>

                <Popup 
                type={'model'}
                isOpen={isOpen}
                onClose={()=>{setIsOpen(false)}}
                >
                    <div className="p-4">
                        <img src={Graph} alt="" className="w-[90vw] h-auto object-contain aspect-square sm:aspect-video"/>
                    </div>
                </Popup>

            </div>

            <div className="flex itmes-center justify-center flex-wrap gap-5 my-10">
                <FilePreviewCard name={'sample paper 1'} data={Graph} />
                <FilePreviewCard name={'sample paper 3'} data={Graph} />
                <FilePreviewCard name={'sample paper 15'} data={Graph} />
                <FilePreviewCard name={'sample paper 6'} data={Graph} />
                <FilePreviewCard name={'sample paper 8'} data={Graph} />

            </div>




        </section>
        
        </>
    )
}

export default GraphDetail;