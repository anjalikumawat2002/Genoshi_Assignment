import PropTypes from 'prop-types'

const GradientButton = ({clickHandler, children, width, height})=>{

    return(
        <>
        <button
        onClick={clickHandler}
        style={{width:width, height:height}}
        className="text-white bg-gradient-to-r from-blue-700 to-teal-500 hover:from-blue-700 hover:to-teal-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-large rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mr-4"
        >
            {children}
        </button>
        </>
    )
}

GradientButton.propTypes = {
    children: PropTypes.any,
    clickHandler: PropTypes.func,
    width: PropTypes.string,
    height: PropTypes.string
}

export default GradientButton;