import { useState } from "react";
import { useForm } from "react-hook-form";
import { getCountries, getCountryCallingCode } from "react-phone-number-input";
import { useLanguage } from "../../../../locales/hooks/useLanguage";
import { seriealizeErrors } from "../../../../services/tools/ApiFormsSerializers";
import Text from "../../../Elementes/Text/Text";
import ClearButton from "../../../RegistrationPage/RegSteps/DesktopRegRouter/DeskRegForm/Fields/ClearButton";
import CountryCodes from "./CountryCodes/CountryCodes";
import InputMask from "react-input-mask";
import { parsePhoneNumber } from "react-phone-number-input";
import AddPhoneField from "./AddPhoneField/AddPhoneField";


const AddPhoneForm = ({onPhoneSubmit, isLoading}) => {
    const {t} = useLanguage()
    const {setValue, handleSubmit, formState: {errors, isValid, touchedFields}, watch} = useForm({mode: 'onChange'})

    const {name, message} = seriealizeErrors(errors)

    const isError = !!message && name in touchedFields

    

    const {phoneNumber, phoneCode} = watch()

    return (
        <>
            <div className="phone-form">
                
                <AddPhoneField {...{setValue}} />

                
                

                <div className="submit-row">
                    <button disabled={!phoneCode || !phoneNumber || phoneNumber.includes('_') || isLoading} className="reg-btn" onClick={handleSubmit(onPhoneSubmit)}>
                        <Text content="Add Phone" />
                    </button>

                    {isError && <p className="warn"><Text content={message} /></p>}
                </div>
            </div>
        </>
    );
}

export default AddPhoneForm;