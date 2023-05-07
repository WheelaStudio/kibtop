import { useState } from "react";
import { useFormContext } from "react-hook-form";
import { useLanguage } from "../../../../locales/hooks/useLanguage";

const DescriptionInput = ({placeholderName}) => {
    const {t} = useLanguage()
    const {register, getFieldState, formState} = useFormContext()

    const {error, isTouched} = getFieldState('description', formState)
    const [textareaheight, setTextareaheight] = useState(196); 
  
    function handleChange(event) {         
        console.log(event.target.scrollHeight);
         
        if(event.target.scrollHeight > textareaheight) setTextareaheight(event.target.scrollHeight);
    } 
    return (
        <>
            <div className="advert-form__text-input">
                <textarea style={{height: textareaheight}} {...register('description', {
                        required: t('field is required'),
                        maxLength: {
                            value: 255,
                            message: t('max length is 255 symbols')
                        },
                        onChange: handleChange
                    })} 
                    placeholder={t(`Describe the ${placeholderName} in detail`)}
                    className={"desc-field" + ((!!error && isTouched) ? ' field--error': '') } 
                    
                >
                </textarea>
                { (!!error) && <p className="warn warn--absolute">{error.message}</p> }
            </div>
        
        </>
    );
}

export default DescriptionInput;