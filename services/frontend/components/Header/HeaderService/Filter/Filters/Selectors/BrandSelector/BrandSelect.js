
import { useState } from "react";
import { useFormContext, useWatch } from "react-hook-form";
import { useModalOpen } from "../../../../../../AppHooks/useModalOpen";
import Text from "../../../../../../Elementes/Text/Text";
import {select, selectOptions, selectArrow, selectTitle, selectDimmer} from "../../../filter.module.scss"
import BrandInputContainer from "./BrandInputContainer";


const BrandSelect = () => {
    const [isOpen, setOpen, onSwitchOpen] = useModalOpen()

    const brandValue = useWatch({name: 'brand'})

    return (
        <>
            <div className={select} style={{marginBottom: 12}}>
                <button onClick={onSwitchOpen}>
                    {!!brandValue ? brandValue: <Text content={'Brand'} />}
                </button>

                <svg className={selectArrow} onClick={onSwitchOpen} viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg" style={isOpen ? {transform: 'rotate(180deg)'} : null}>
                    <path d="M17.3875 1.26251C17.2713 1.14535 17.1331 1.05236 16.9807 0.988895C16.8284 0.925434 16.665 0.892761 16.5 0.892761C16.335 0.892761 16.1716 0.925434 16.0193 0.988895C15.867 1.05236 15.7287 1.14535 15.6125 1.26251L9.88751 6.98751C9.77131 7.10467 9.63306 7.19766 9.48073 7.26112C9.32841 7.32458 9.16503 7.35726 9.00001 7.35726C8.835 7.35726 8.67162 7.32458 8.51929 7.26112C8.36697 7.19766 8.22872 7.10467 8.11251 6.98751L2.38751 1.26251C2.27131 1.14535 2.13306 1.05236 1.98074 0.988895C1.82841 0.925434 1.66503 0.892761 1.50001 0.892761C1.335 0.892761 1.17162 0.925434 1.01929 0.988895C0.866969 1.05236 0.728718 1.14535 0.612514 1.26251C0.3797 1.49671 0.249023 1.81353 0.249023 2.14376C0.249023 2.47399 0.3797 2.79081 0.612514 3.02501L6.35001 8.76251C7.05314 9.46476 8.00626 9.85921 9.00001 9.85921C9.99377 9.85921 10.9469 9.46476 11.65 8.76251L17.3875 3.02501C17.6203 2.79081 17.751 2.47399 17.751 2.14376C17.751 1.81353 17.6203 1.49671 17.3875 1.26251Z" fill="#414042"/>
                </svg>
            </div>
            <BrandInputContainer {...{onSwitchOpen, isOpen}} />
            
        </>
    );
}

export default BrandSelect;
