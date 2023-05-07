import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { FilterApi } from "../../../../../../../services/FilterApi";
import LocationInput from "./LocationInput";

const LocationInputContainer = ({onSwitchOpen, isOpen}) => {
    const {query: category} = useRouter()

    const {data} = useQuery(['locationsFilters'], () => FilterApi.getFilterLocations(category))

    return <>
        {isOpen && <LocationInput {...{onSwitchOpen, options: data}} />}
    </>;
}

export default LocationInputContainer;