import { getCountries, getCountryCallingCode } from "react-phone-number-input";


const CountryCodes = ({code, setCode}) => {
    const options = getCountries().filter(country => !!code ? getCountryCallingCode(country) === code : true)

    const onCodeClick = e => {
        e.preventDefault()
        setCode(e.currentTarget.value)
    }
    return (
        <>
            <div className="locatin-select__list phone-codes-list">
                {
                    options?.map((country, index) => (
                        <button key={index} className="code-option" value={getCountryCallingCode(country)} onClick={onCodeClick}>
                            <img style={{height: '20px'}} src={`https://purecatamphetamine.github.io/country-flag-icons/3x2/${country}.svg`} alt="" />
                            +{getCountryCallingCode(country)}
                        </button>
                    ))
                }
            </div>

            <div className="locatin-select__list locatin-select__list--mobile phone-codes-list">
                {
                    options?.map((country, index) => (
                        <button key={index} className="code-option" value={getCountryCallingCode(country)} onClick={onCodeClick}>
                            <img style={{height: 20}} src={`https://purecatamphetamine.github.io/country-flag-icons/3x2/${country}.svg`} alt="" />
                            +{getCountryCallingCode(country)}
                        </button>
                    ))
                }
            </div>
        </>
    );
}

export default CountryCodes;