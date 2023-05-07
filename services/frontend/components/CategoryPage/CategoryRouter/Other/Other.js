import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CategoryApi } from "../../../../services/CategoryApi";
import { getCategoryAdvertsThunk, setCategoryPages } from "../../../../store/slices/CategorySlice";
import Adverts from "../../../Adverts/Adverts";

const Other = ({categoryAdverts}) => {
    const {locale, query, asPath} = useRouter()
    const dispatch = useDispatch()
    const {category, page, subCategory} = query

    const {data} = useQuery(['realtyAdverts', category, locale, page, query], () => CategoryApi.getCategoryAdverts(category, locale, page, query), {
        onSuccess: (data) => dispatch(setCategoryPages(data?.pages))
    })
    const adverts = data?.adverts || categoryAdverts

    return <Adverts adverts={adverts} />;
}

export default Other;