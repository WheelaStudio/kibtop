import { useState } from "react";
import { useLanguage } from "../../../../../../../locales/hooks/useLanguage";
import { useSwipe } from "../../../../../../AppHooks/useSwipe";
import Text from "../../../../../../Elementes/Text/Text";
import BrandOptions from "./BrandOptions";

const BrandInput = ({onSwitchOpen, options}) => {
    const [value, changeValue] = useState('')
    const onChange = e => changeValue(e.currentTarget.value)
    const {t} = useLanguage()

    const {swipe} = useSwipe({onClose: onSwitchOpen})

    return (
        <>
            <div className="modal-screen modal-screen--location modal-screen--filter" {...swipe}>
                <div className="location-select" >
                    <div className="close-line" onClick={onSwitchOpen} />

                    <h5 className="title title--loc"><Text content="Brand" /></h5>

                    <div className="search-wrapper">
                        <div className="search search--location">
                            <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_518_4955)">
                                    <path d="M19.635 17.871L15.7637 13.9984C18.6604 10.1278 17.8706 4.64195 13.9996 1.74552C10.1286 -1.15092 4.64234 -0.361157 1.74566 3.50949C-1.15102 7.38014 -0.361187 12.866 3.50979 15.7624C6.61927 18.0891 10.8901 18.0891 13.9996 15.7624L17.8725 19.635C18.3592 20.1217 19.1483 20.1217 19.635 19.635C20.1217 19.1483 20.1217 18.3593 19.635 17.8727L19.635 17.871ZM8.78697 15.015C5.34663 15.015 2.55772 12.2263 2.55772 8.78624C2.55772 5.34619 5.34663 2.55751 8.78697 2.55751C12.2273 2.55751 15.0162 5.34619 15.0162 8.78624C15.0126 12.2247 12.2258 15.0113 8.78697 15.015Z" fill="#BDBDBD"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_518_4955">
                                        <rect width="20" height="20" fill="white"/>
                                    </clipPath>
                                </defs>
                            </svg>



                            <div className="search__field">
                                <input {...{value, onChange}}
                                    placeholder={t("Search product")} 
                                    type="text" />
                            </div>     
                        </div>

                        <button className="cancel-btn" onClick={onSwitchOpen}>
                            <Text content="Cancel" />
                        </button>
                    </div>

                    <BrandOptions {...{options, onChange: changeValue, value, onSwitchOpen}} />

                    <button onClick={onSwitchOpen} className="btn btn--hug">
                        <Text content="Apply" />
                    </button>

                    <button className="close-location" onClick={onSwitchOpen}>
                        <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.1682 0.606533L11.2132 8.56148L3.25825 0.606533C2.52602 -0.125695 1.33883 -0.125696 0.606602 0.606533C-0.125627 1.33876 -0.125627 2.52596 0.606602 3.25818L8.56155 11.2131L0.606602 19.1681C-0.125627 19.9003 -0.125627 21.0875 0.606602 21.8197C1.33883 22.552 2.52602 22.552 3.25825 21.8197L11.2132 13.8648L19.1682 21.8197C19.9004 22.552 21.0876 22.552 21.8198 21.8197C22.552 21.0875 22.552 19.9003 21.8198 19.1681L13.8649 11.2131L21.8198 3.25818C22.552 2.52595 22.552 1.33876 21.8198 0.606533C21.0876 -0.125695 19.9004 -0.125696 19.1682 0.606533Z" fill="#414042"/>
                        </svg>
                    </button>
                </div>
            </div>


            <div className="screen-dimmer screen-dimmer--location" onClick={onSwitchOpen} />
        </>
    );
}

export default BrandInput;