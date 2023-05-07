import { useFormContext } from "react-hook-form";
import { useLanguage } from "../../../../../../../locales/hooks/useLanguage";
import Text from "../../../../../../Elementes/Text/Text";
import { useFilterSwipe } from "../hooks/useFilterSwipe";
import {modal, dimmer, modalTitle, field, input, line, apply} from "./price_modal.module.scss"

const errorStyle = {
    borderColor: '#FF5A5A'
}


const PriceModal = ({onSwitchOpen, holder, inputs}) => {
    const {t} = useLanguage()

    const {formState, getFieldState} = useFormContext()

    const fromInput = getFieldState(inputs[0].name, formState)
    const toInput = getFieldState(inputs[1].name, formState)

    const {swipe} = useFilterSwipe({onClose: onSwitchOpen, elemHeight: '70%'})
    
    return (
        <>
            <div className={dimmer} onClick={onSwitchOpen}/>
            <div className={modal} {...swipe} >
                <div className="close-line close-line--top" onClick={onSwitchOpen} />
                <p className={`title ${modalTitle}`}><Text content={holder} /></p>
                <button className="close-location" onClick={onSwitchOpen}>
                    <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.1682 0.606533L11.2132 8.56148L3.25825 0.606533C2.52602 -0.125695 1.33883 -0.125696 0.606602 0.606533C-0.125627 1.33876 -0.125627 2.52596 0.606602 3.25818L8.56155 11.2131L0.606602 19.1681C-0.125627 19.9003 -0.125627 21.0875 0.606602 21.8197C1.33883 22.552 2.52602 22.552 3.25825 21.8197L11.2132 13.8648L19.1682 21.8197C19.9004 22.552 21.0876 22.552 21.8198 21.8197C22.552 21.0875 22.552 19.9003 21.8198 19.1681L13.8649 11.2131L21.8198 3.25818C22.552 2.52595 22.552 1.33876 21.8198 0.606533C21.0876 -0.125695 19.9004 -0.125696 19.1682 0.606533Z" fill="#414042"/>
                    </svg>
                </button>

                <div className={field}>
                    <input {...inputs[0]}   className={input} style={!!fromInput.error ? errorStyle : {}}
                                            type="text" 
                                            placeholder={t("from")} 
                                            inputMode="numeric" />

                    <div className={line} />

                    <input {...inputs[1]}   className={input} style={!!toInput.error ? errorStyle : {}}
                                            type="text" 
                                            placeholder={t("to_")} 
                                            inputMode="numeric" />
                </div>

                <button className={apply} onClick={onSwitchOpen} disabled={fromInput.error || toInput.error}>
                    <Text content="Apply" />
                </button>
            </div>
        </>
    );
}

export default PriceModal;