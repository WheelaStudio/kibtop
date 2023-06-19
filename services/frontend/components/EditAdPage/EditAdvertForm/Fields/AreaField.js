import { useFormContext } from "react-hook-form"
import { useLanguage } from "../../../../locales/hooks/useLanguage"



const AreaField = () => {
    const {t} = useLanguage()
    const {register, formState, getFieldState, setValue} = useFormContext()
    
    const {isTouched, error} = getFieldState('city', formState)

    const isError = false;


    return (
        <>


            <textarea className={"edit-profile__input__" + (isError ? ' edit-profile__input--error' : '')}
                {...register('description', {
                            pattern: {
                                value: /^[А-яA-ZİĞÜŞÖÇа-яa-zğüşöç\s\-,]+$/,
                                message: t('invalid format')
                            }
                    })} type="text" placeholder={t("Description")} />
            { isError && <p className="warn warn--profile">{error.message}</p>}
        </>
    );
}

export default AreaField;