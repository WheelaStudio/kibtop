import { useState } from "react";
import ReactInputMask from "react-input-mask";
import ClearButton from "../../../../RegistrationPage/RegSteps/DesktopRegRouter/DeskRegForm/Fields/ClearButton";
import CodeInput from "./CodeInput";
import style from "./add_tel.module.scss"
import { useRef } from "react";
import Codes from "./Codes";
import { useBoolState } from "../../../../AppHooks/useBoolState";
import { useFormContext } from "react-hook-form";


const AddPhoneField = ({setValue}) => {
    // Refs
    const NumberInput = useRef(null)
    const CodeInput = useRef(null)

    // phone Number
    const [number, setNumber] = useState('')
    const setValueNumber = value => {
        setValue('phoneNumber', value)
        setNumber(value)
    }
    const onNumberChange = e => {
        const input = e.target.value
        if(input === '(___) ___ __-__') CodeInput.current.focus()
        setValueNumber(input)
    }
    // phone Code
    const [code, setCode] = useState('')
    const setValueCode = (value) => {
        setValue('phoneCode', value)
        setCode(value)
    }
    const onCodeChange = e => {
        const input = e.currentTarget.value
        if(input.length > 3) {
            setOpen(false)
            NumberInput.current.focus()
            return
        }
        if(!isNaN(+input)) {
            
            setValueCode(input)
        } 
        setOpen(!!input)
    }

    const [isOpen, setOpen] = useBoolState()

    return (
        <>
            <div className={`form__field ${style.field}`} style={{overflow: 'initial'}}>
                    <svg className={style.icon} height="20px" width="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.00589 4.54166C1.905 3.11236 3.11531 2 4.54522 2H7.60606C8.34006 2 9.00207 2.44226 9.28438 3.1212L10.5643 6.19946C10.8761 6.94932 10.6548 7.81544 10.0218 8.32292L9.22394 8.96254C8.86788 9.24798 8.74683 9.74018 8.95794 10.1448C10.0429 12.2241 11.6464 13.9888 13.5964 15.2667C14.008 15.5364 14.5517 15.4291 14.8588 15.0445L15.6902 14.003C16.1966 13.3687 17.0609 13.147 17.8092 13.4594L20.8811 14.742C21.5587 15.0249 22 15.6883 22 16.4238V19.5C22 20.9329 20.8489 22.0955 19.4226 21.9941C10.3021 21.3452 2.65247 13.7017 2.00589 4.54166Z" fill="#BDBDBD"/>
                    </svg>

                    <div className={style.wrapper}>
                        <Codes search={code} setValue={setValueCode} {...{isOpen, setOpen, nextInput: () => NumberInput.current.focus()}} />

                        <div className={style.code}>
                            +
                            <input type={'text'} className={style.codeInput} value={code} onChange={onCodeChange} inputMode={'numeric'} ref={CodeInput} />
                        </div>
                    </div>
                    


                    <ReactInputMask mask="(999) 999 99-99" maskPlaceholder={'_'} alwaysShowMask={true} onChange={onNumberChange} value={number} ref={NumberInput} inputMode={'numeric'}  />
            </div>
        </>
    );
}

export default AddPhoneField;