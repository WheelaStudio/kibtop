import { useRef } from "react";
import { useFormContext } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useLanguage } from "../../../../locales/hooks/useLanguage";
import { append, set } from "../../../../store/slices/CurrentDialogSlice";


function _ChatInputComponent({ clearInput, setText }) {
    const {t} = useLanguage()
    const {register} = useFormContext()

    return (
        <span className="chat-message__input" onSubmit={e => send(e, dispatch, append, clearInput, setText)} encType="multipart/form-data">
            <div className="chat-input__form">
                <div className="chat__field">
                    <input  {...register('text', {
                            required: false
                        })}
                            type="text"
                            placeholder={t('Write a message')} 
                            autocomplete="off" />
                </div>
            </div>
        </span>
    );
}

export default _ChatInputComponent;

