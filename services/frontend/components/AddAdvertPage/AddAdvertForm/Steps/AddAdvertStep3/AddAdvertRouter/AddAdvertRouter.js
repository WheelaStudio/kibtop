import {useFormContext, useWatch} from "react-hook-form";
import { useSelector } from "react-redux";
import AddAvto from "./AddAvto/AddAvto";
import AddFree from "./AddFree/AddFree";
import AddOther from "./AddOther/AddOther";
import AddRealty from "./AddRealty/AddRealty";
import AddWork from "./AddWork/AddWork";
import AddRealtyLand from "./AddRealty/AddRealtyLand";

const AddAdvertRouter = () => {
    var {category} = useSelector(state => state.addAdvert)
    const subCategory = useWatch({name: 'subCategory'});
    if(subCategory == 'Land' || subCategory == 'Other') {
        category = 'realty_land';
    }
    return (
        <>
                {
                    category === 'realty' ? <AddRealty /> :
                    category === 'realty_land' ? <AddRealtyLand /> :
                    category === 'avto' ? <AddAvto /> :
                    category === 'work' ? <AddWork /> :
                    category === 'services' ? <AddOther /> :
                    category === 'children' ? <AddOther /> :
                    category === 'electronics' ? <AddOther /> :
                    category === 'house_garden' ? <AddOther /> :
                    category === 'free' ? <AddFree /> :
                    category === 'fashion' ? <AddOther /> : ''
                }
        </>
    );
}

export default AddAdvertRouter;