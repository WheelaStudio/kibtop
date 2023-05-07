import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { googleLoginThunk, setAuthThunk } from "../../../store/slices/AuthSlice";
import BurgerLocaleMenuContainer from "../HeaderService/BurgerLocaleMenu/BurgerLocaleMenuContainer";
import BurgerUserMenuContainer from "../HeaderService/BurgerUserMenu/BurgerUserMenuContainer";
import FavoritesWarningContainer from "./FavoritesWarning/FavoritesWarningContainer";
import Locales from "./Locales/Locales";
import SupportNav from "./SupportNav/SupportNav";

const HeaderSettings = () => {

    return (
        <>
            <div className="header__settings">
                <div className="container">
                    <SupportNav />
                    <Locales/>
                </div>
            </div>
            <BurgerLocaleMenuContainer />
            <BurgerUserMenuContainer />
            <FavoritesWarningContainer />
        </>
    );
}

export default HeaderSettings;