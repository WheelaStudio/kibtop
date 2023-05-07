import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { useModalOpen } from "../../../AppHooks/useModalOpen";
import Text from "../../../Elementes/Text/Text";
import Option from "../../../Header/HeaderService/Filter/Filters/Selectors/FormSelector/Option";
import { useFilterSwipe } from "../../../Header/HeaderService/Filter/Filters/Selectors/hooks/useFilterSwipe";
import { selectDimmer, sortingOptions, selectTitle, sort, select, rusSelect } from "./sorting_select.module.scss";

const options = [
    {value: 'default', text: 'Default'},
    {value: 'cheap', text: 'Cheaper'},
    {value: 'expensive', text: 'Expensive'},
]

const SortingSelect = ({className}) => {
    const [isOpen, setOpen, onSwitchOpen] = useModalOpen()


    const {locale, query, pathname} = useRouter()
    const pathnameTo = pathname === '/adverts/[category]' ? pathname : '/adverts'
    

    const sortingOption = options.find(({value}) => value === query.sorting)
    const sortingValue = sortingOption?.value || 'default'

    const {swipe} = useFilterSwipe({onClose: onSwitchOpen})

    return (
        <>
            
             <>
                        <button className={`${select} ${locale === 'ru' ? rusSelect : ''} ${className}`} onClick={onSwitchOpen}>
                            <svg viewBox="0 0 16 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.6677 0.329895C15.5615 0.225362 15.4351 0.142392 15.2958 0.0857716C15.1566 0.0291509 15.0072 0 14.8564 0C14.7055 0 14.5562 0.0291509 14.4169 0.0857716C14.2776 0.142392 14.1513 0.225362 14.045 0.329895L8.81134 5.43783C8.7051 5.54236 8.57872 5.62533 8.43947 5.68195C8.30021 5.73857 8.15085 5.76772 8 5.76772C7.84915 5.76772 7.69979 5.73857 7.56053 5.68195C7.42128 5.62533 7.29489 5.54236 7.18866 5.43783L1.95497 0.329895C1.84874 0.225362 1.72235 0.142392 1.5831 0.0857716C1.44385 0.0291509 1.29449 0 1.14363 0C0.99278 0 0.843419 0.0291509 0.704167 0.0857716C0.564915 0.142392 0.438528 0.225362 0.332297 0.329895C0.119462 0.538854 0 0.821521 0 1.11616C0 1.4108 0.119462 1.69346 0.332297 1.90242L5.57742 7.02151C6.2202 7.64807 7.09153 8 8 8C8.90847 8 9.7798 7.64807 10.4226 7.02151L15.6677 1.90242C15.8805 1.69346 16 1.4108 16 1.11616C16 0.821521 15.8805 0.538854 15.6677 0.329895Z" fill="#414042" fillOpacity="0.4"/>
                            </svg>

                            <Text content={"Sort"} />:<span style={{textTransform: 'lowercase', marginLeft: 3}}><Text content={sortingOption?.text || 'Default'} /></span>

                            {
                                isOpen && <>
                                    <div className={selectDimmer} onClick={onSwitchOpen} />
                                    <div className={sortingOptions} {...swipe}>
                                        <div className="close-line close-line--top" onClick={onSwitchOpen} />
                                        <p className={selectTitle}><Text content={'Sorting'} /></p>

                                        {
                                            options.map(({value, text}, index) => {
                                                const isSelected = sortingValue === value

                                                return (
                                                    <Link href={{pathname: pathnameTo, query: {...query, sorting: value}}} key={index} style={{
                                                            color: isSelected ? '#65A4FE' : '#414042'
                                                        }} {...{className: sort}}>
                        
                                                            <div className={"select-circle select-circle--mobile" + (isSelected ? ' select-circle--checked' : '')} />
                        
                                                            <Text content={text} />
                        
                                                            {
                                                                <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" opacity={isSelected ? 1 : 0}>
                                                                    <path d="M6.45766 17.3334C5.88994 17.3336 5.34547 17.1044 4.94438 16.6962L0.369217 12.0502C-0.123072 11.55 -0.123072 10.7391 0.369217 10.2388C0.861665 9.7387 1.65992 9.7387 2.15237 10.2388L6.45766 14.6124L17.8476 3.04176C18.3401 2.54166 19.1383 2.54166 19.6308 3.04176C20.1231 3.54202 20.1231 4.35293 19.6308 4.85319L7.97094 16.6962C7.56984 17.1044 7.02538 17.3336 6.45766 17.3334Z" />
                                                                </svg>
                                                            }
                                                    </Link>
                                                )
                                            })
                                        }
                                    
                                    </div>
                                </>
                            }
                        </button>

                        
                    </>
        </>
    );
}

export default SortingSelect;