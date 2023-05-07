import { useCallback, useEffect, useRef, useState } from "react";
import { useFormContext, useWatch } from "react-hook-form";
import { useSelector } from "react-redux";
import { useModalOpen } from "../../../../../../AppHooks/useModalOpen";
import Text from "../../../../../../Elementes/Text/Text";
import {select, selectCategory, selectArrow, categoryTitle, selectDimmer, optionCategory} from "../../../filter.module.scss"
import Option from "../FormSelector/Option";
import CategoryOption from "./CategoryOption";

const selctedStyle = {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    borderBottom: 'none'
}

const items = [
    {value: '', text: 'All categories'},
    {value: 'realty', text: 'Real estate'},
    {value: 'avto', text: 'Auto'},
    {value: 'work', text: 'Job'},
    {value: 'services', text: 'Services'},
    {value: 'children', text: 'For kids'},
    {value: 'electronics', text: 'Electronics'},
    {value: 'fashion', text: 'Fashion and style'},
    {value: 'house_garden', text: 'House and garden'},
    {value: 'free', text: 'Free'},
]


const CategorySelector = ({holder, name, zIndex}) => {
    const [isOpen, setOpen, onSwitchOpen] = useModalOpen()


    const nameValue = useWatch({name})
    const {register, reset, getValues} = useFormContext()


    const marginBottom = nameValue === 'free' ? 12 : 0

    const resetCategoryValues = e => {
        const {city, sorting} = getValues()

        reset({
            city, sorting, [name]: e.currentTarget.value
        })
    }
    
    return (
        <>
            <div className={select} style={isOpen ? {...selctedStyle, marginBottom} : {marginBottom}}>
                <button onClick={onSwitchOpen}>
                    <Text content={nameValue ? items.find(({value}) => value === nameValue).text : holder} />
                </button>

                <svg className={selectArrow} onClick={onSwitchOpen} viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg" style={isOpen ? {transform: 'rotate(180deg)'} : null}>
                    <path d="M17.3875 1.26251C17.2713 1.14535 17.1331 1.05236 16.9807 0.988895C16.8284 0.925434 16.665 0.892761 16.5 0.892761C16.335 0.892761 16.1716 0.925434 16.0193 0.988895C15.867 1.05236 15.7287 1.14535 15.6125 1.26251L9.88751 6.98751C9.77131 7.10467 9.63306 7.19766 9.48073 7.26112C9.32841 7.32458 9.16503 7.35726 9.00001 7.35726C8.835 7.35726 8.67162 7.32458 8.51929 7.26112C8.36697 7.19766 8.22872 7.10467 8.11251 6.98751L2.38751 1.26251C2.27131 1.14535 2.13306 1.05236 1.98074 0.988895C1.82841 0.925434 1.66503 0.892761 1.50001 0.892761C1.335 0.892761 1.17162 0.925434 1.01929 0.988895C0.866969 1.05236 0.728718 1.14535 0.612514 1.26251C0.3797 1.49671 0.249023 1.81353 0.249023 2.14376C0.249023 2.47399 0.3797 2.79081 0.612514 3.02501L6.35001 8.76251C7.05314 9.46476 8.00626 9.85921 9.00001 9.85921C9.99377 9.85921 10.9469 9.46476 11.65 8.76251L17.3875 3.02501C17.6203 2.79081 17.751 2.47399 17.751 2.14376C17.751 1.81353 17.6203 1.49671 17.3875 1.26251Z" fill="#414042"/>
                </svg>
                
                {
                    isOpen && <>
                        <div className={selectDimmer} onClick={onSwitchOpen} />
                        <div className={selectCategory} style={{zIndex}}>
                            <p className={`${categoryTitle} title title--flex title--mobile-add`}>
                                <a onClick={onSwitchOpen} className="settings-nav__back--mob">
                                    <svg viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.916664 10.3224L4.94792 6.24953C5.04475 6.1519 5.15996 6.0744 5.2869 6.02152C5.41384 5.96863 5.54999 5.94141 5.6875 5.94141C5.82501 5.94141 5.96116 5.96863 6.0881 6.02152C6.21503 6.0744 6.33025 6.1519 6.42708 6.24953C6.62109 6.4447 6.72999 6.70871 6.72999 6.9839C6.72999 7.2591 6.62109 7.52311 6.42708 7.71828L2.71875 11.4579L23.9583 11.4579C24.2346 11.4579 24.4996 11.5676 24.6949 11.763C24.8903 11.9583 25 12.2233 25 12.4995V12.4995C25 12.7758 24.8903 13.0407 24.6949 13.2361C24.4996 13.4314 24.2346 13.5412 23.9583 13.5412L2.65625 13.5412L6.42708 17.3016C6.52472 17.3985 6.60221 17.5137 6.65509 17.6406C6.70798 17.7675 6.7352 17.9037 6.7352 18.0412C6.7352 18.1787 6.70798 18.3149 6.65509 18.4418C6.60221 18.5687 6.52472 18.6839 6.42708 18.7808C6.33025 18.8784 6.21503 18.9559 6.0881 19.0088C5.96116 19.0617 5.82501 19.0889 5.6875 19.0889C5.54999 19.0889 5.41384 19.0617 5.2869 19.0088C5.15996 18.9559 5.04475 18.8784 4.94792 18.7808L0.916664 14.7391C0.331453 14.1532 0.00274849 13.3589 0.00274849 12.5308C0.00274849 11.7027 0.331453 10.9084 0.916664 10.3224Z" fill="#414042"/>
                                    </svg>
                                </a>

                                <Text content={holder} />
                            </p>
                            {   
                                items?.map(({text, value}, index) => <CategoryOption key={index} 
                                                                                className={optionCategory}
                                                                                onClick={() => setTimeout(onSwitchOpen, 0)}
                                                                                {...{text, value, 
                                                                                isSelected: value === nameValue,
                                                                                register: {...register(name, {
                                                                                                        required: false,
                                                                                                        onChange: resetCategoryValues
                                                                                                    })}}} 
                                                                                />)
                            }
                        </div>
                    </>
                }
                 
            </div>
        </>
    );
}

export default CategorySelector;