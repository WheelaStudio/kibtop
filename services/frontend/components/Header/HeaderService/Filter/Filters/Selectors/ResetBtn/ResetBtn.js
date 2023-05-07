import { useRouter } from "next/router";
import { useFormContext } from "react-hook-form";
import Text from "../../../../../../Elementes/Text/Text";
import {reset} from "../../../filter.module.scss"


const ResetBtn = ({defaultValues}) => {
    const form = useFormContext()
    const {push, pathname, query} = useRouter()
    const onResetClick = () => {
        form.reset(defaultValues)

        const {category, page} = query
        
        if(!!category && !!page) {
            push({pathname, query: {category, page}})
            return
        }
        if(!!category) {
            push({pathname, query: {category}})
            return
        }

        push({pathname, query: {}})
    }
    return (
        <>
            <a className={reset} onClick={onResetClick}>
                <Text content="Reset filter" />
            </a>
        </>
    );
}

export default ResetBtn;