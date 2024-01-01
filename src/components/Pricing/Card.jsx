import PropTypes from 'prop-types'

const Card = ({selected, children})=>{

    return(
        <>
        <div className={`${selected?'dark:border-blue-800 border-blue-300':'border-transparent'} border-4 p-4 rounded-md
        max-w-[450px]
        min-w-[250px]
        dark:bg-zinc-700 bg-gray-200
        transition-transform duration-150
        hover:scale-110
        w-full h-full
        `}>
            {children}
        </div>
        </>
    )
}

Card.propTypes = {
    selected: PropTypes.bool,
    children: PropTypes.any
}



export default Card;