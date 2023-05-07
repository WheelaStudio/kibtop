import Link from "next/link";
import { useRouter } from "next/router";
import Text from "../../Elementes/Text/Text";
import PageLink from "./PageLink";

const PageNav = ({pages, maxPage}) => {
    const {query, pathname} = useRouter()
    const {page, category, search} = query

    const currentPage = !!page ? +page : 0
    const nextPage = (currentPage+1 < maxPage) ? currentPage+1 : currentPage

   
    return (
        <>
            <div className="page-nav">
                {
                    pages.map(page => <PageLink key={page.number} {...page} />)
                }

                {
                    currentPage+1 < maxPage && <>
                        <Link href={{pathname, query: {...query, page: nextPage}}} className="profile-link next-page">
                            <Text content={'Next'} />

                            <svg  viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 18.748C5.0003 18.4162 5.13394 18.0981 5.37156 17.8637L11.8503 11.4631C12.0464 11.2694 12.2019 11.0394 12.3081 10.7864C12.4142 10.5333 12.4688 10.262 12.4688 9.98806C12.4688 9.71412 12.4142 9.44286 12.3081 9.18977C12.2019 8.93669 12.0464 8.70674 11.8503 8.51306L5.38001 2.1208C5.14927 1.88478 5.02159 1.56867 5.02448 1.24055C5.02737 0.912429 5.16058 0.598557 5.39544 0.366533C5.63029 0.13451 5.948 0.00289891 6.28012 4.76468e-05C6.61224 -0.00280361 6.93221 0.123333 7.17111 0.351289L13.6414 6.73854C14.5114 7.59974 15 8.76676 15 9.98348C15 11.2002 14.5114 12.3672 13.6414 13.2284L7.16267 19.6332C6.98552 19.8083 6.75976 19.9276 6.51397 19.9759C6.26818 20.0243 6.0134 19.9995 5.78187 19.9047C5.55034 19.8099 5.35247 19.6495 5.21329 19.4436C5.07411 19.2377 4.99989 18.9956 5 18.748V18.748Z" fill="#7AB1FF"/>
                            </svg>

                        </Link>
                    </>
                }
            </div>
        </>
    );
}

export default PageNav;