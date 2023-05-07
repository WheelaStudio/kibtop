import LocationForm from "../../CategoryPage/CategoryNav/LocationForm/LocationForm";
import SortingSelect from "../../CategoryPage/CategoryNav/SortingSelect/SortingSelect";
import Text from "../../Elementes/Text/Text";
import GoodsContainer from "./Goods/GoodsContainer";
import LocationContainer from "./Location/LocationContainer";

const Recommend = ({recommendGoods}) => {
    return (
        <>
            <section className="goods">
                <div className="container container--goods">
                    <h2 className="title title--goods"><Text content="Recommended" /></h2>

                    <div className="row-locale">
                        <SortingSelect className={'sorting-locale'} />
                        <LocationForm />
                    </div>


                </div>

                <GoodsContainer {...{recommendGoods}} />
                {/*Remmend*/}
            </section>
        </>
    );
}

export default Recommend;