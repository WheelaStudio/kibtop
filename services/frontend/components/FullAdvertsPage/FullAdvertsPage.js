import Link from "next/link";
import LocationForm from "../CategoryPage/CategoryNav/LocationForm/LocationForm";
import PageNavContainer from "../CategoryPage/PageNav/PageNavContainer";
import Header from "../Header/Header";
import HeaderService from "../Header/HeaderService/HeaderService";
import LocationContainer from "../HomePage/Recommend/Location/LocationContainer";
import {advertsMain, searchNav, searchNavAlign, row} from "./adverts.module.scss"
import FullAdvertsList from "./FullAdvertsList/FullAdvertsList";
import SearchText from "./SearchText/SearchText";

const FullAdvertsPage = () => {
    return (
        <>
            <Header />
            <HeaderService />
            <main className={`main ${advertsMain}`}>
                <div className={searchNav}>
                    <div className={`container ${searchNavAlign}`}>
                        <div className={row}>
                            <Link href="/" className="profile-back">
                                <svg viewBox="0 0 25 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.916664 5.32245L4.94792 1.24953C5.04475 1.1519 5.15996 1.0744 5.2869 1.02152C5.41384 0.968633 5.54999 0.941406 5.6875 0.941406C5.82501 0.941406 5.96116 0.968633 6.0881 1.02152C6.21504 1.0744 6.33025 1.1519 6.42708 1.24953V1.24953C6.62109 1.4447 6.72999 1.70871 6.72999 1.9839C6.72999 2.2591 6.62109 2.52311 6.42708 2.71828L2.71875 6.45786L23.9583 6.45786C24.2346 6.45786 24.4996 6.56761 24.6949 6.76296C24.8903 6.95831 25 7.22326 25 7.49953V7.49953C25 7.7758 24.8903 8.04075 24.6949 8.2361C24.4996 8.43145 24.2346 8.5412 23.9583 8.5412L2.65625 8.5412L6.42708 12.3016C6.52472 12.3985 6.60221 12.5137 6.65509 12.6406C6.70798 12.7675 6.7352 12.9037 6.7352 13.0412C6.7352 13.1787 6.70798 13.3149 6.65509 13.4418C6.60221 13.5687 6.52472 13.6839 6.42708 13.7808C6.33025 13.8784 6.21504 13.9559 6.0881 14.0088C5.96116 14.0617 5.82501 14.0889 5.6875 14.0889C5.54999 14.0889 5.41384 14.0617 5.2869 14.0088C5.15996 13.9559 5.04475 13.8784 4.94792 13.7808L0.916664 9.73911C0.331454 9.15317 0.00274785 8.35891 0.00274785 7.53078C0.00274785 6.70265 0.331454 5.90839 0.916664 5.32245V5.32245Z" fill="#414042"/>
                                </svg>
                            </Link>

                            <SearchText />
                        </div>
                        

                        <LocationForm />
                    </div>
                </div>

                <FullAdvertsList />

                <PageNavContainer />
            </main>
        </>
    );
}

export default FullAdvertsPage;