import { useEffect, useState } from "react";
import CustomInput, { ColorInput } from "../../components/Input";
import SelectBox from "../../components/selectbox";
import DropComponent from "../../components/dropable";
import FilePreviewCard from "../../components/CreateGraph/filepreviewcard";
import GradientButton from "../../components/gradbutton";
import { Link } from "react-router-dom";




const CreateGraph = ()=>{

    const [layout, setLayout] = useState(''); //eslint-disable-line
    const [color, setColor] = useState('black'); //eslint-disable-line
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [files, setFiles] = useState([]);

    useEffect(()=>{
        console.log(files)
    }, [files])

    function closeHandler(name){
        setFiles(prev=>prev.filter(file=>file.name!==name))

    }


    return(
        <>
        <section className="mx-auto pt-24 dark:text-white text-black">

            <div className="flex items-center flex-wrap gap-5">
                <CustomInput label={'Title'} className={'flex-1 text-xl font-bold'} value={title} onChange={(e)=>{setTitle(e.target.value)}}/>
                <SelectBox 
                title={'select layout'} 
                options={['vertical', 'horizontal']} 
                className={'text-base font-bold'}
                onChange={(value)=>{setLayout(value)}}
                />
                <ColorInput onChange={(e)=>{setColor(e.target.value)}}/>
                
                
            </div>
           

            <div className="flex itmes-center flex-wrap gap-5 my-10">
                <textarea 
                name="desc" 
                cols="30" 
                rows="10" 
                className="flex-1 rounded-md resize-none dark:bg-zinc-600 bg-gray-300 p-4"
                placeholder="Enter Description"
                value={desc}
                onChange={(e)=>{setDesc(e.target.value)}}
                ></textarea>

                <DropComponent setFile={setFiles}/>

                
            </div>

            <div className="flex itmes-center flex-wrap gap-5 my-10">
                <GradientButton >
                   <Link to={'/graph_detail'}>
                    Create Graph
                   </Link>
                </GradientButton>

                <button onClick={()=>{
                    setTitle('')
                    setDesc('')
                    setFiles([])
                }} className="p-2 border-2 rounded-md">
                    Cancle
                </button>
            </div>

            <div className="flex itmes-center justify-center flex-wrap gap-5 my-10">
                {
                    files.map((file)=>{
                        return(
                            <FilePreviewCard key={file.name} name={file.name} data={file.data} onClose={()=>{closeHandler(file.name)}}/>
                        )
                    })
                }

            </div>



        </section>
        </>
    )

}

export default CreateGraph;