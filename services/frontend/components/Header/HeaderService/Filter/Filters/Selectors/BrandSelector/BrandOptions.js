import { useFormContext } from "react-hook-form";

const BrandOptions = ({options, onChange, value, onSwitchOpen}) => {
    const {setValue} = useFormContext()
    const setBrandValue = value => {
        onChange(value)
        setValue('brand', value)
        if(window.innerWidth <= 600) onSwitchOpen()
    }

    return (
        <>
            <div className="locatin-select__list">
                {
                    options?.filter(brand => brand.toLowerCase().includes(value.toLowerCase())).map((brand, index) => (
                        <button key={index} className="locatin-select__option" onClick={() => setBrandValue(brand)}>
                            {brand}
                        </button>
                    ))
                }
            </div>

            <div className="locatin-select__list locatin-select__list--mobile">
                {
                    options?.filter(brand => brand.toLowerCase().includes(value.toLowerCase())).map((brand, index) => (
                        <button key={index} className="locatin-select__option" onClick={() => setBrandValue(brand)}>
                            {brand}
                        </button>
                    ))
                }
            </div>
        </>
    );
}

export default BrandOptions;