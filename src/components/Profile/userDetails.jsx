import { useState } from 'react';
import ProfilePic from '../../assets/react.svg'
import Popup from '../popup';
import GradientButton from '../gradbutton';
import { Link } from 'react-router-dom';
import { Settings } from 'lucide-react';

const UserDetails = ()=>{

    const [profilePicModel, setProfilePicModel] = useState(false);
    

    return(
        <>
        <div className="flex py-2 px-2 sm:px-5 gap-5 sm:gap-20 flex-wrap justify-center sm:justify-between">
            <div>
                <button  onClick={()=>{setProfilePicModel(true)}} 
                className='
                rounded-full
                overflow-hidden 
                object-contain 
                p-2 aspect-square
                border
                dark:bg-gray-700
                dark:border-black
                bg-gray-300
                border-gray-400
                '
                >
                    <img src={ProfilePic} alt="" className='w-24 sm:w-36 h-auto'/>
                </button>
                <Popup type={'model'} isOpen={profilePicModel} onClose={()=>{setProfilePicModel(false)}} >
                    <div className='p-2'>
                        <img src={ProfilePic} className='w-[250px] sm:w-[500px] h-auto' alt="" />
                    </div>
                </Popup>
            </div>

            <div className='flex-1 p-2 sm:text-left text-center'>
                <div className='my-2 text-3xl'>test_name</div>
                <div className='my-2'>Email: example.123@test.com</div>
                <div className='my-2'>bio: this is a sample bio</div>
            </div>
            <div className='flex-1 p-2 justify-center flex items-start'>
                <GradientButton>
                    <Link to={'/setting'} className='flex items-center gap-2'><Settings /> Edit Profile</Link>
                </GradientButton>
            </div>

        </div>
        </>
    )

}

export default UserDetails;