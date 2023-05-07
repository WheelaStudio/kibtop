import { useFormContext } from "react-hook-form"
import { useLanguage } from "../../../../locales/hooks/useLanguage"


const EmailField = () => {
    const {t} = useLanguage()
    const {register, formState, getFieldState} = useFormContext()
    const {isTouched, error} = getFieldState('email', formState)

    const isError = isTouched  && error 

    return (
        <>
        <div className="currency-field ">
                <input className={"edit-profile__input" + (isError ? ' edit-profile__input--error' : '')}
                    {...register('email', {
                                required: t('field is required'),
                        })} type="email" placeholder={t("100")} />
                        <a className="currency-input" onClick={() => {
                            if (document.querySelector('.currency-input').textContent == '€'){
                                document.querySelector('.currency-input').textContent = '₤';
                            }else  if (document.querySelector('.currency-input').textContent == '₤') {
                                document.querySelector('.currency-input').textContent = '$';
                            }else if (document.querySelector('.currency-input').textContent == '$') {
                                document.querySelector('.currency-input').textContent = '€';
                            }
                        }}>€</a>
                { isError && <p className="warn warn--profile">{error.message}</p>}
                </div>
        </>
    );
}

export default EmailField;