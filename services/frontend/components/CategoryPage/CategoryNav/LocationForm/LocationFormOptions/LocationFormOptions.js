import Link from "next/link";
import { useRouter } from "next/router";
import LocalStorage from "../../../../../services/tools/ClientTools/getLocalStorage";

const LocationFormOptions = ({options, onChange, href, onSwitchOpen}) => {
    const setLocationValue = value => {
        onChange(value)
        LocalStorage.setItem('city', value)

        
    }

    const {pathname, query} = useRouter()

    

    return (
        <>
            <div className="locatin-select__list">
                {
                    options?.map((city, index) => (
                        <button key={index} className="locatin-select__option" onClick={() => setLocationValue(city)}>
                            {city}
                        </button>
                    ))
                }
            </div>

            <div className="locatin-select__list locatin-select__list--mobile">
                {
                    options?.map((city, index) => (
                        <Link key={index} href={{pathname, query: {...query, city}}} className="locatin-select__option" onClick={() => {
                                setLocationValue(city)
                                onSwitchOpen()
                            }
                        }>
                            {city}
                        </Link>
                    ))
                }
            </div>
        </>
    );
}

export default LocationFormOptions;