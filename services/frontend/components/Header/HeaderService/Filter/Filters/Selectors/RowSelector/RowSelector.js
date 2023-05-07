import { useRouter } from "next/router";
import { useEffect } from "react";
import { useFormContext, useWatch } from "react-hook-form";
import Text from "../../../../../../Elementes/Text/Text";
import {rowSelctor, rowOption, rowOptionSelected} from "../../RealtyFilter/realty_filter.module.scss"

const RowSelector = ({name, items, defaultValueIndex, style={}}) => {
    const {register, setValue} = useFormContext()
    const nameValue = useWatch({name})
    // const {query} = useRouter()

    useEffect(() => {
        if(!!items[defaultValueIndex]) {
            // if(!query[name]) setValue(name, items[defaultValueIndex].value)
            if(!nameValue) setValue(name, items[defaultValueIndex].value)

        }
    }, [])

    return (
        <>
            <div className={rowSelctor} style={{...style, gridTemplate: `1fr / repeat(${items.length}, 1fr)`}}>
                {
                    items?.map(({value, text}, index) => {
                        
                        
                        return (
                            <label className={`${rowOption} ${nameValue === value ? rowOptionSelected : ''}`} key={index}>
                                <input {...register(name, {required: false})} hidden={true} value={value} type="radio" />
                                <Text content={text} />
                            </label>
                        )
                    })
                }

            </div>
        </>
    );
}

export default RowSelector;