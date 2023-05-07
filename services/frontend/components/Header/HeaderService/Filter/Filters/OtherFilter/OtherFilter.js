import style from "../../filter.module.scss"
import PriceSelect from "../Selectors/PriceSelect/PriceSelect";

const OtherFilter = () => {
    return (
        <>
            <div className={style.otherFilter}>
                <PriceSelect name={'cost'} holder={'Price'} />
            </div>
        </>
    );
}

export default OtherFilter;