import { useState } from "react";
import CustomInput from "../../components/Input";
import ImageEditor from "../../components/Setting/imageEditor";
import GradientButton from "../../components/gradbutton";
import ChangePassword from "../../components/Setting/changePassword";
import { Link } from "react-router-dom";
import UsageMatrix from "../../components/Profile/usageMatrix";



const Setting = ()=>{

    const [name, setName] = useState('test name');
    const [email, setEmail] = useState('example.123@test.com');
    const [bio, setBio] = useState('this is a sample bio');
    
    

    return(
        <>
        <section className="mx-auto pt-24 dark:text-white text-black">
            <div className="flex gap-5 flex-wrap justify-center mb-10">
                <ImageEditor />
                <div className="flex flex-col">
                    <div className="flex gap-5 flex-wrap items-center justify-center">
                        <CustomInput label={'name'} value={name} onChange={(e)=>{setName(e.target.value)}}/>
                        <CustomInput label={'email'} value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                        <CustomInput label={'bio'} value={bio} onChange={(e)=>{setBio(e.target.value)}}/>
                    </div>
                    <div className="p-2 flex-1 flex items-end md:justify-start justify-center">
                        <GradientButton>
                            Save
                        </GradientButton>
                    </div>
                </div>

           
            </div>
            <div className="p-10 rounded-md dark:bg-zinc-700 bg-gray-200">
                <h1 className="font-bold text-lg">
                    Other User Actions:
                </h1>
                <div className="mt-2 flex justify-center gap-5">
                    <ChangePassword />

                    <GradientButton>
                        <Link to={'/pricing'}>
                            Manage subscription plan
                        </Link>
                    </GradientButton>

                    <GradientButton>
                        <Link to={'/'}>
                            Link third-party accounts
                        </Link>
                    </GradientButton>
                    
                </div>

            </div>

            <UsageMatrix />


        </section>
        
        </>
    )
}

export default Setting;