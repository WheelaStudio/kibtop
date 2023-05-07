import Link from "next/link";
import { useRouter } from "next/router";
import FilterButtonContainer from "./FilterButton/FilterButtonContainer";
import MobileFilterButtonContainer from "./MobileFilterButton/MobileFilterButtonContainer";
import SearchedAdvertsContainer from "./SearchedAdverts/SearchedAdvertsContainer";
import SearchProductsFormContainer from "./SearchProductsForm/SearchProductsFormContainer";
import useMobileException from "./UseMobileException";

const SearchProducts = () => {
    const {pathname} = useRouter()

    const isCategoryPage = pathname.includes('/adverts/[category]')
    
    return (
        <>
            { isCategoryPage && (
                <Link href="/" className="category-back">
                    <svg width="30" height="16" viewBox="0 0 30 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.1 5.3875L5.9375 0.499997C6.0537 0.382836 6.19195 0.289843 6.34428 0.226382C6.4966 0.162922 6.65998 0.130249 6.825 0.130249C6.99001 0.130249 7.15339 0.162922 7.30572 0.226382C7.45804 0.289843 7.59629 0.382836 7.7125 0.499997V0.499997C7.94531 0.7342 8.07599 1.05101 8.07599 1.38125C8.07599 1.71148 7.94531 2.02829 7.7125 2.2625L3.2625 6.75L28.75 6.75C29.0815 6.75 29.3995 6.88169 29.6339 7.11611C29.8683 7.35053 30 7.66848 30 8V8C30 8.33152 29.8683 8.64946 29.6339 8.88388C29.3995 9.1183 29.0815 9.25 28.75 9.25L3.1875 9.25L7.7125 13.7625C7.82966 13.8787 7.92265 14.017 7.98611 14.1693C8.04957 14.3216 8.08224 14.485 8.08224 14.65C8.08224 14.815 8.04957 14.9784 7.98611 15.1307C7.92265 15.283 7.82966 15.4213 7.7125 15.5375C7.59629 15.6547 7.45804 15.7477 7.30572 15.8111C7.15339 15.8746 6.99001 15.9072 6.825 15.9072C6.65998 15.9072 6.4966 15.8746 6.34428 15.8111C6.19195 15.7477 6.0537 15.6547 5.9375 15.5375L1.1 10.6875C0.397744 9.98437 0.00329685 9.03125 0.00329685 8.0375C0.00329685 7.04374 0.397744 6.09062 1.1 5.3875V5.3875Z" fill="#414042"/>
                    </svg>
                </Link>
            )}
            <div className={"search"}>
                <SearchProductsFormContainer />

                <FilterButtonContainer />

                <SearchedAdvertsContainer />
            </div>
            { !isCategoryPage && <MobileFilterButtonContainer />}
        </>
    );
}

export default SearchProducts;