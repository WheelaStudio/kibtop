import VoidDialog from "./Dialogs/VoidDialog";
import CurrentDialog from "./Dialogs/CurrentDialog";
import { useLanguage } from "../../../locales/hooks/useLanguage";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";


const ActiveDialog = () => {
    const {t} = useLanguage();
    const router = useRouter();
    const [mediaModalActivity, setMediaModalActivity] = useState(false);

    if (router.pathname === '/chat') {
        return (
            <div className="place-chat">
                <VoidDialog />
            </div>
        );
    }
    return (
        <div className="place-chat chat__active" style={{display: "grid"}}>
            <CurrentDialog mediaModalActivity={mediaModalActivity} setMediaModalActivity={setMediaModalActivity} /> 
        </div>
    );

}

export default ActiveDialog;