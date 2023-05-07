import { useSession, signIn, } from "next-auth/react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { googleLoginThunk } from "../../../../../store/slices/AuthSlice";
import RegGoogleButton from "./RegGoogleButton";



const RegGoogleButtonContainer = () => {
    

    const onSigInClick = async () => await signIn('google')


    return <RegGoogleButton {...{onSigInClick}} />;
}

export default RegGoogleButtonContainer;