import Link from "next/link";
import { useRouter } from "next/router";

const PageLink = ({page, number}) => {
    const {query, pathname} = useRouter()

    const currentPage = !query.page ? 0 : query.page

    const isSelectedStyle = +currentPage === +page ? ' page-link--selcted' : ''


    return (
        <>
            <Link className={"page-link"+isSelectedStyle} href={{pathname, query: {...query, page}}} >{number}</Link>
        </>
    );
}

export default PageLink;