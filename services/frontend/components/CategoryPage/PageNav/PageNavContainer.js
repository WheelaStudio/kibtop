import { useRouter } from "next/router";
import { useDeferredValue, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCategoryPages } from "../../../store/slices/CategorySlice";
import PageNav from "./PageNav";

const PageNavContainer = ({serverPages}) => {
    const {query: {page}} = useRouter()
    const category = useSelector(state => state.category)
    const dispatch = useDispatch()

    const pages = serverPages || category.pages || []

    const count = 4
    const currentPage = !page ? 0 : +page

    console.log(currentPage, 'currentPage');

    const beforePage = currentPage === 0 ? 0 : currentPage-1

    console.log(beforePage, 'beforePage');

    const lastPage = (beforePage+count < pages.length ) ? beforePage : pages.length - count

    console.log(lastPage, 'lastPage');

    const navPages = count < pages.length ? pages.slice(lastPage, beforePage+count) : pages

    console.log(pages);
    console.log(navPages);
    
    return <PageNav {...{pages: navPages, maxPage: category.pages?.length}} />;
}

export default PageNavContainer;