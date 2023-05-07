import { useWatch } from "react-hook-form";
import Text from "../../../../../../Elementes/Text/Text";
import {checkOption, checkInput} from "../../../filter.module.scss"


const CheckOption = ({text, value, register, onClick, isChecked}) => {


    const isCheckedStyle = isChecked ? 'service-set__check service-set__check--checked' : 'service-set__check'


    return (
        <>
            <label {...{onClick, className: checkOption}}>
                <input {...register} hidden={true} value={value} type="checkbox" className={checkInput} />

                <span>
                    <div className={isCheckedStyle}>
                    <svg  viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.09351 14.6156C5.62769 14.6158 5.18095 14.4306 4.85185 14.101L1.09787 10.3484C0.693939 9.94435 0.693939 9.28937 1.09787 8.88531C1.50193 8.48138 2.15691 8.48138 2.56097 8.88531L6.09351 12.4179L15.4391 3.07223C15.8432 2.6683 16.4982 2.6683 16.9022 3.07223C17.3062 3.47629 17.3062 4.13127 16.9022 4.53533L7.33518 14.101C7.00607 14.4306 6.55933 14.6158 6.09351 14.6156Z" fill="white"/>
                    </svg>

                    </div>
                    <Text content={text} />
                </span>

                {
                    <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" opacity={0}>
                        <path d="M6.45766 17.3334C5.88994 17.3336 5.34547 17.1044 4.94438 16.6962L0.369217 12.0502C-0.123072 11.55 -0.123072 10.7391 0.369217 10.2388C0.861665 9.7387 1.65992 9.7387 2.15237 10.2388L6.45766 14.6124L17.8476 3.04176C18.3401 2.54166 19.1383 2.54166 19.6308 3.04176C20.1231 3.54202 20.1231 4.35293 19.6308 4.85319L7.97094 16.6962C7.56984 17.1044 7.02538 17.3336 6.45766 17.3334Z" />
                    </svg>
                }
            </label>
        </>
    );
}

export default CheckOption;