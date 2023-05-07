import { useQuery } from "@tanstack/react-query"
import { useRouter } from "next/router"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useCurrency } from "../../../../locales/hooks/useCurrency"
import { CategoryApi } from "../../../../services/CategoryApi"
import { getCategoryAdvertsThunk, setCategoryPages } from "../../../../store/slices/CategorySlice"
import RealtyAdverts from "../../../AdvertDetailPage/RealEstateDetail/SimilaRealtyAds/RealtyAdverts/RealtyAdverts"
import Adverts from "../../../Adverts/Adverts"

const Realty = ({categoryAdverts}) => {
    const {locale, query, asPath} = useRouter()
    const dispatch = useDispatch()
    const {category, page, subCategory} = query

    const {data} = useQuery(['realtyAdverts', category, locale, page, query], async () => await CategoryApi.getCategoryAdverts(category, locale, page, query), {
        onSuccess: (data) => {
            dispatch(setCategoryPages(data?.pages))
        },
    })



    const adverts = data?.adverts || categoryAdverts
    return (
        <>
            <div className="realty-similar">
                <Adverts adverts={adverts} />
            </div>
            <RealtyAdverts adverts={adverts} />
        </>
    );
}

export default Realty;