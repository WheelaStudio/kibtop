import { useRouter } from "next/router";
import Other from "./Other/Other";
import Realty from "./Realty/Realty";

const CategoryRouter = ({categoryAdverts}) => {
    const {query: {category}} = useRouter()
    return (
        <>
            {
                category === 'realty' ? <Realty {...{categoryAdverts}} /> :
                category === 'avto' ? <Other {...{categoryAdverts}} /> :
                category === 'work' ? <Other {...{categoryAdverts}} /> :
                category === 'services' ? <Other {...{categoryAdverts}} /> :
                category === 'children' ? <Other {...{categoryAdverts}} /> :
                category === 'electronics' ? <Other {...{categoryAdverts}} /> :
                category === 'house_garden' ? <Other {...{categoryAdverts}} /> :
                category === 'fashion' ? <Other {...{categoryAdverts}} /> :
                category === 'free' ? <Other {...{categoryAdverts}} /> : ''
            }
        </>
    );
}

export default CategoryRouter;