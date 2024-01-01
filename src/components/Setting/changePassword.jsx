import { useState } from "react"
import CustomInput from "../Input"
import GradientButton from "../gradbutton"
import Popup from "../popup"


const ChangePassword = ()=>{

    const [changePassModel, setChangePassModel] = useState(false)

    return(
        <>
        <div>
            <GradientButton clickHandler={()=>{setChangePassModel(true)}}>
                change password
            </GradientButton>
            <Popup type={'model'}
            isOpen={changePassModel}
            onClose={()=>{setChangePassModel(false)}}
            
            >
                <div className="p-16">
                    <div className="my-5">
                        <CustomInput type={'password'} label={'old password'} width={'250px'}/>
                    </div>

                    <div className="my-5">
                        <CustomInput type={'password'} label={'new password'} width={'250px'}/>
                    </div>

                    <div className="my-5">
                        <CustomInput type={'password'} label={'re-new password'} width={'250px'}/>
                    </div>

                    <div className="my-5 flex">
                        <GradientButton clickHandler={()=>{setChangePassModel(false)}}>
                            confirm
                        </GradientButton>

                        <button onClick={()=>{setChangePassModel(false)}}>
                            cancel
                        </button>

                    </div>
                </div>


            </Popup>
        </div>
        </>
    )
}

export default ChangePassword