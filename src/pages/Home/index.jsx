import Banner from '../../components/Home/Banner'
import PropTypes from 'prop-types'
import Middle from '../../components/Home/Middle'

const Home = ()=>{

    return(
        <>
        <Banner />
        <Middle />
        </>
    )

}

Home.propTypes = {
    height: PropTypes.string,
    width: PropTypes.string
}

export default Home;