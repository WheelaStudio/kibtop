import { useMemo } from "react";
import { getCountryCallingCode } from "react-phone-number-input";
import { getCountries } from "react-phone-number-input";
import style from "./add_tel.module.scss"


const codes = getCountries().map(country => getCountryCallingCode(country))

const Codes = ({search, setValue, isOpen, setOpen, nextInput}) => {
    const searchCodes = codes.includes(search) ? [search] : codes.filter(code => code.includes(search))


    return (
        <>
            {
                isOpen && <>
                    <div className={style.select}>
                        <div className={style.options}>
                            {
                                searchCodes.map((code, index) => (
                                    <button key={index} className={style.option} onClick={e => {
                                        e.preventDefault()
                                        setValue(code)
                                        setOpen(false)
                                        nextInput()
                                    }}>
                                        +{code}
                                    </button>
                                ))
                            }
                        </div>
                    </div>
                </>
            }
            
        </>
    );
}

export default Codes;