import { ExternalLink } from "lucide-react"
import { Link } from "react-router-dom"
import PropTypes from 'prop-types'


const FavouriteCollections = ()=>{

    return(
        <>
            <h1 className="text-xl mt-10 p-2 font-bold">Favourites</h1>
            <div className="mb-5">
                <FavouriteTile page_name={'sample name 1'} link={'/'}/>
                <FavouriteTile page_name={'sample name 2'} link={'/'}/>
                <FavouriteTile page_name={'sample name 3'} link={'/'}/>
                <FavouriteTile page_name={'sample name 4'} link={'/'}/>
                <FavouriteTile page_name={'sample name 5'} link={'/'}/>

            </div>
        </>
    )
}

const FavouriteTile = ({page_name, link})=>{

    return(
        <>
        <div className="dark:bg-zinc-700 bg-gray-200 rounded-md my-2 p-5 flex justify-between w-full">
            <h1 className="text-lg font-bold">
                <p>
                    {page_name}
                </p>
                <p className="text-sm opacity-20">
                    last visited: 04/01/2024
                </p>
            </h1>
            <Link to={link} className="flex rounded-lg transition-colors px-5 py-2 justify-center items-center gap-2 hover:dark:bg-zinc-600 hover:bg-gray-300">
                <ExternalLink />
                <p>Visit</p>
            </Link>

        </div>
        </>
    )
}

FavouriteTile.propTypes = {
    page_name: PropTypes.string,
    link: PropTypes.string
}


export default FavouriteCollections