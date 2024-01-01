import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import thumbnail from '../../assets/images/thumbnail.png'
import { useState } from 'react'

const SavedGraphs = ()=>{

    return(
        <>
            <h1 className="text-xl mt-5 p-2 font-bold">Saved Graphs</h1>
            <div className='flex justify-center gap-5 flex-wrap mb-5'>
                <GraphCard image={thumbnail} title={'sample title'} date={'02/01/2024'}/>
                <GraphCard image={thumbnail} title={'sample title 2'} date={'02/01/2024'}/>
                <GraphCard image={thumbnail} title={'sample title 3'} date={'02/01/2024'}/>
                <GraphCard image={thumbnail} title={'sample title 4'} date={'02/01/2024'}/>
                <GraphCard image={thumbnail} title={'sample title 5'} date={'02/01/2024'}/>
                <GraphCard image={thumbnail} title={'sample title 6'} date={'02/01/2024'}/>
            </div>
        </>
    )

}

const GraphCard = ({image, title, date})=>{
    const [top, setTop] = useState('100%');



    return(
        <>
            <div className='p-10 overflow-hidden relative rounded-md dark:bg-zinc-700 bg-gray-200 hover:cursor-default' 
            onMouseEnter={()=>{setTop('50%')}}
            onMouseLeave={()=>{setTop('100%')}}
            >
                <div className='py-2'>
                    <img src={image} alt="thumbnail" className='w-full h-auto aspect-video object-contain max-w-[250px]'/>
                </div>
                <h2 className='font-bold text-lg'>
                    {title}
                </h2>

                <div className='absolute bottom-2 right-2 opacity-20 text-sm'>
                    {date}
                </div>
                <div style={{top:top}} className={`absolute left-0 right-0 bottom-0 transition-all duration-150`}>
                    <Link to={'/graph/id'} className='grid place-items-center w-full h-full text-center font-bold text-lg dark:bg-zinc-900 rounded-t-md bg-gray-300'>visit</Link>
                </div>
            </div>
        </>
    )

}

GraphCard.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
    date: PropTypes.string
}



export default SavedGraphs;