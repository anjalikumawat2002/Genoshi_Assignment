import { Link } from "react-router-dom";
import GradientButton from "../../gradbutton";


const Banner = ()=>{

    return(
        <>
        <section className="w-full h-screen py-5 flex justify-center items-center">
            <div className="dark:text-white text-black text-6xl md:text-8xl font-bold text-center">
                <div className="p-2">
                    Read cutting-edge research,
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
                        no matter who you are.
                    </span>
                </div>

                <GradientButton >
                    <Link to={'/create_graph'} className="text-lg">create your own graph</Link>
                </GradientButton>
                
            </div>
        </section>
        </>
    )
}

export default Banner;