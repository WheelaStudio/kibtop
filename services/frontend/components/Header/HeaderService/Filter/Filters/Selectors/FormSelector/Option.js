import { useWatch } from "react-hook-form";
import Text from "../../../../../../Elementes/Text/Text";
import {option} from "../../../filter.module.scss"


const Option = ({text, value, isSelected, register, onClick, className = option}) => {

    return (
        <>
            <label style={{
                color: isSelected ? '#65A4FE' : 'inherit'
            }} {...{onClick, className}}>
                <input {...register} hidden={true} value={value} type="radio" className="radio-input" />
                <div className="select-circle" />

                <Text content={text} />

                {
                    <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" opacity={isSelected ? 1 : 0}>
                        <path d="M6.45766 17.3334C5.88994 17.3336 5.34547 17.1044 4.94438 16.6962L0.369217 12.0502C-0.123072 11.55 -0.123072 10.7391 0.369217 10.2388C0.861665 9.7387 1.65992 9.7387 2.15237 10.2388L6.45766 14.6124L17.8476 3.04176C18.3401 2.54166 19.1383 2.54166 19.6308 3.04176C20.1231 3.54202 20.1231 4.35293 19.6308 4.85319L7.97094 16.6962C7.56984 17.1044 7.02538 17.3336 6.45766 17.3334Z" />
                    </svg>
                }
            </label>
        </>
    );
}

export default Option;