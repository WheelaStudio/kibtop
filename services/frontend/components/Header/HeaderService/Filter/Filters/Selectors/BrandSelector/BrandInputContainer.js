import { useQuery } from "@tanstack/react-query";
import { FilterApi } from "../../../../../../../services/FilterApi";
import { brandList } from "../../../../../../AddAdvertPage/AddAdvertForm/Fields/BrandField/BrandSelect/BrandList";
import BrandInput from "./BrandInput";

const BrandInputContainer = ({onSwitchOpen, isOpen}) => {
    const options = brandList
    return <>
        {isOpen && <BrandInput {...{onSwitchOpen, options}} />}
    </>;
}

export default BrandInputContainer;