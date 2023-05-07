import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGetRecommendGoodsQuery } from "../../../../services/HomePageApi";
import { setUserFavoritesThunk } from "../../../../store/slices/FavoritesSlice";
import Goods from "./Goods";
import AdvertsVip from "../../../Adverts/AdvertVip";

const GoodsContainer = ({recommendGoods}) => {
    const {locale} = useRouter()
    const {data, isLoading} = useGetRecommendGoodsQuery(locale)

    
    return <AdvertsVip {...{adverts: (data || recommendGoods)}} />;
}

export default GoodsContainer;