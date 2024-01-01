import { useEffect, useState } from "react";
import Logo from '../assets/images/logo.svg'
import { CircleUserRound, User, Settings, LogOut, Menu, BadgeIndianRupee } from "lucide-react";
import Popup from "./popup";
import { Link } from "react-router-dom";
import { useContainer } from "./background";


const NAV_ICON_SIZE = 30;

const Navbar = ()=>{
    const [isSmall, setSmall] = useState(false);
    const [isOpen, setOpen] = useState(false);
    const [showItems, setShowItems] = useState(false);
    const scrollY = useContainer();
    const [bgColor, setBgColor] = useState('transparent');
    
    

    useEffect(()=>{
        function handleResize(){
            if(window.innerWidth < 640 || window.outerWidth < 640) setSmall(true);
            else setSmall(false);
        }
        handleResize();

        const resizeWindow = window.addEventListener('resize', handleResize);
        

        return ()=>{
            window.removeEventListener('resize', resizeWindow);
            
            setOpen(false)
            setShowItems(false);
        }

    }, [])

    useEffect(()=>{
        if(scrollY > 20){
            setBgColor('dark:bg-zinc-800 bg-zinc-200')
        }
        else setBgColor('transparent');

    }, [scrollY])

   

    if(isSmall){
        return(
            <>
            <nav className={`p-5 ${scrollY>20?'sticky':'absolute'} w-full top-0 left-0 z-10 transition-colors duration-500 ${bgColor} opacity-90 backdrop-blur-sm shadow-lg`}>
                <div className="flex justify-between items-center">
                    <Link to={'/'}>
                        <img src={Logo} className="dark:invert-0 invert w-[150px]" alt="logo" />
                    </Link>
                    <div>
                        <button className="dark:text-white text-black"
                        onClick={()=>{setShowItems(prev=>!prev)}}
                        >
                            <Menu size={NAV_ICON_SIZE}/>
                        </button>
                    </div>
                </div>
                <div className={'my-2 overflow-hidden transition-max-h ease-in-out duration-500'} style={{maxHeight:`${showItems?'100vh':'0'}`}}>
                    <ul className="py-2">
                            <li className="flex items-center gap-2 px-2 py-3 border-b dark:border-gray-600 border-gray-400">
                                <User/>
                                <Link to={'/user_account'}>User Account</Link>
                            </li>

                            <li className="flex items-center gap-2 px-2 py-3 border-t border-b dark:border-gray-600 border-gray-400">
                                <Settings/>
                                <Link to={'/setting'}>Setting</Link>
                            </li>


                            <li className="flex items-center gap-2 px-2 py-3 border-t dark:border-gray-600 border-gray-400">
                                <BadgeIndianRupee />
                                <button>Pricing</button>
                            </li>

                            <li className="flex items-center gap-2 px-2 py-3 border-t dark:border-gray-600 border-gray-400">
                                <LogOut />
                                <button>Logout</button>
                            </li>

                        </ul>
                </div>
            </nav>
            
            </>
        )
    }

    return (
    <>
        <nav className={`backdrop-blur-sm ${scrollY>20?'sticky':'absolute'} opacity-90 shadow-lg py-5 px-7 flex justify-between w-full items-center top-0 left-0 z-10 transition-colors duration-500 ${bgColor}`}>
            <Link to={'/'}>
                <img src={Logo} className="dark:invert-0 invert w-[150px]" alt="logo" />
            </Link>
            <div className="dark:text-white text-black">
                <button 
                className="text-lg border-2 dark:border-white border-gray-900 rounded-full p-1 flex items-center gap-2 overflow-hidden"
                onClick={()=>{setOpen(true)}}
                >
                    <CircleUserRound size={NAV_ICON_SIZE} />
                    <div className="px-2">
                        User_Name
                    </div>
                </button>
                <Popup isOpen={isOpen} 
                onClose={()=>{setOpen(false)}}
                hAlign={'left'}
                >
                    <ul className="p-2" >
                        <li className="flex items-center gap-2 px-2 py-3 border-b dark:border-gray-600 border-gray-400"
                            onClick={()=>{setOpen(false)}}
                        >
                            <User/>
                            <Link to={'/user_account'}>User Account</Link>
                        </li>

                        <li className="flex items-center gap-2 px-2 py-3 border-t border-b dark:border-gray-600 border-gray-400"
                            onClick={()=>{setOpen(false)}}
                        >
                            <Settings/>
                            <Link to={'/setting'}>Setting</Link>
                        </li>

                        <li className="flex items-center gap-2 px-2 py-3 border-t dark:border-gray-600 border-gray-400"
                            onClick={()=>{setOpen(false)}}
                        >
                                <BadgeIndianRupee />
                                <Link to={'/pricing'}>Pricing</Link>
                        </li>

                        <li className="flex items-center gap-2 px-2 py-3 border-t dark:border-gray-600 border-gray-400"
                            onClick={()=>{setOpen(false)}}
                        >
                            <LogOut />
                            <button>Logout</button>
                        </li>

                    </ul>

                </Popup>
            </div>
        </nav>
        
    </>)

}

export default Navbar;