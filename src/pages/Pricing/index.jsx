import { useState } from "react";
import Card from "../../components/Pricing/Card";
import Popup from "../../components/popup";
import GradientButton from "../../components/gradbutton";
import Logo from '../../assets/images/logo.svg'


const PLAN = {
    '0': 'BASIC PLAN',
    '1': 'PRO PLAN',
    '2': 'ENTERPRISE PLAN'
}


const Pricing = ()=>{

    const [selectedCard, setSelectedCard] = useState("0");
    const [isOpen, setOpen] = useState(false);

    function handleSelect(e){
        setSelectedCard(e.currentTarget.name);
        setOpen(true);
    }


    return (
        <>
        
        <section className="mx-auto pt-32 dark:text-white text-black flex flex-wrap gap-5 justify-center">

            <button className="text-left block" name="0" onClick={handleSelect}>
                <Card selected={selectedCard==="0"}>
                    <h2 className="text-xl font-bold">
                        Basic Plan
                    </h2>
                    <h1 className="relative text-5xl font-extrabold text-center py-4 after:content-['/month/user'] after:text-xs after:opacity-50 after:font-normal after:absolute after:bottom-0">
                        $4
                    </h1>

                    <div className="p-2">
                        <h2 className="text-xl font-bold py-2">
                            Features:
                        </h2>
                        <ul className="pl-8 list-disc text-left">
                            <li>Up to 10 graphs</li>
                            <li>Up to 500 chatbot queries</li>

                        </ul>
                    </div>
                </Card>
            </button>
            <button className="text-left block" name="1" onClick={handleSelect}>
                <Card selected={selectedCard==="1"}>
                    <h2 className="text-xl font-bold">
                        Pro Plan
                    </h2>
                    <h1 className="relative text-5xl font-extrabold text-center py-4 after:content-['/month/user'] after:text-xs after:opacity-50 after:font-normal after:absolute after:bottom-0">
                        $8
                    </h1>

                    <div className="p-2">
                        <h2 className="text-xl font-bold py-2">
                            Features:
                        </h2>
                        <ul className="pl-8 list-disc text-left">
                            <li>Up to 50 graphs</li>
                            <li>Up to 1000 chatbot queries</li>
                            <li>Email + live chat support</li>

                        </ul>
                    </div>

                </Card>
            </button>
            <button className="text-left block" name="2" onClick={handleSelect}>
                <Card selected={selectedCard==="2"}>
                    <h2 className="text-xl font-bold">
                        Enterprise Plan
                    </h2>
                    <h1 className="relative text-2xl font-bold text-center py-4 after:text-xs after:opacity-50 after:font-normal after:absolute after:bottom-0">
                        Variable
                    </h1>

                    <div className="p-2">
                        <h2 className="text-xl font-bold py-2">
                            Features:
                        </h2>
                        <ul className="pl-8 list-disc text-left">
                            <li>Contact for price</li>
                            <li>Unlimited graphs</li>
                            <li>Ability to upload custom PDFs</li>
                            <li>24/7 phone + email support</li>
                        </ul>
                    </div>
                </Card>
            </button>

            <Popup type={"model"} isOpen={isOpen} onClose={()=>{setOpen(false)}}>
                <div className="p-4">
                    <div className="text-xl text-center font-bold py-4">
                        Do you want to continue with <br />
                        <h1 className="text-2xl font-extrabold p-4 block">
                            {PLAN[selectedCard]}
                        </h1>
                    </div>
                    <div className="flex gap-5 justify-between">
                        <GradientButton clickHandler={()=>{setOpen(false)}}>
                            Confirm
                        </GradientButton>
                        <button onClick={()=>{setOpen(false)}} className="p-2 border-2 rounded-md border-zinc-700 dark:border-white">
                            Cancel
                        </button>
                    </div>

                </div>

            </Popup>

            <div className="absolute bottom-24 hidden md:block lg:right-[initial] right-5">
                <img src={Logo} alt="" className="w-full lg:w-[350px] dark:invert-0 invert"/>
            </div>



        </section>
        </>
    )
}

export default Pricing;