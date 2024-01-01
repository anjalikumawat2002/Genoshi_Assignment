import { CopyPlus, Star, Search } from "lucide-react"
import PropTypes from 'prop-types'

const RecentVisits = ()=>{

    return(
        <>
        <h1 className="text-xl mt-5 p-2 font-bold">Recent Activity</h1>
        <div className="flex flex-wrap gap-5 mb-5 justify-center">
            <Card type={'create'}>
                <h2 className="font-bold text-lg">Created a new Graph</h2>
                <p className="opacity-50">title: sample title 1</p>
            </Card>

            <Card type={'favourite'}>
                <h2 className="font-bold text-lg">Added to Favourite</h2>
                <p className="opacity-50">title: sample title 2</p>
            </Card>

            <Card type={'favourite'}>
                <h2 className="font-bold text-lg">Added to Favourite</h2>
                <p className="opacity-50">title: sample title 5</p>
            </Card>

            <Card type={'query'}>
                <h2 className="font-bold text-lg">Added a new Query</h2>
                <p className="opacity-50">query: sample query 4</p>
            </Card>

            <Card type={'create'}>
                <h2 className="font-bold text-lg">Created a new Graph</h2>
                <p className="opacity-50">title: sample title 43</p>
            </Card>



        </div>
        </>
    )
}

const Card = ({type, children})=>{

    return(
        <>
        <div className="p-10 shadow-md shadow-gray-300 dark:shadow-gray-600 rounded-md dark:bg-zinc-700 bg-gray-200 aspect-video relative hover:cursor-pointer hover:scale-105 transition-transform">
            <div>
                {children}
            </div>
            <div className="absolute bottom-2 right-2 opacity-20">
                {type==='create'?<CopyPlus />:type==='favourite'?<Star />:<Search />}
            </div>
        </div>
        </>
    )

}

Card.propTypes = {
    type: PropTypes.string,
    children: PropTypes.any
}

export default RecentVisits