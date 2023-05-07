import { getCountries, getCountryCallingCode } from "react-phone-number-input";
import { useBoolState } from "../../../../AppHooks/useBoolState";
import style from "./add_tel.module.scss"
import Codes from "./Codes";

const CodeInput = ({code, setCode, nextInput}) => {
    const [isOpen, setOpen] = useBoolState()
    const onChange = e => {
        
        const input = e.currentTarget.value
        if(input.length > 3) {
            setOpen(false)
            nextInput.current.focus()
            return
        }
        if(!isNaN(+input)) setCode(input)
        
        setOpen(!!input)
    }

    return (
        <>
            
            
        </>
    );
}

export default CodeInput;