import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { Cookies } from "../../services/tools/CookieController";
import { setAuth } from "../../store/slices/AuthSlice";
import { setDeletingOpen } from "../../store/slices/ProfileSlice";
import Text from "../Elementes/Text/Text";
import DeleteAccountButtonContainer from "./DeleteAccountButton/DeleteAccountButtonContainer";
import SettingsNav from "./SettingsNav";

const Settings = () => {
    const dispatch = useDispatch()
    const {push} = useRouter()
    const closeDeletingAccount = () => dispatch(setDeletingOpen(false))

    const onExitClick = async () => {
        Cookies.delAllCookie()
        await signOut('google')
        
    }
    
    return (
        <>
            <main className="main">
                <SettingsNav title={'Settings'} onClick={closeDeletingAccount} />

                <div className="container">
                    <nav className="settings">
                        <Link href="/profile/settings/locale" className="settings__link">
                            <Text content="language and currency" />
                        </Link>

                        <Link href="" className="settings__link">
                            <Text content="Website advertising" />
                        </Link>

                        <Link href="" className="settings__link">
                            <Text content="Сontact support" />
                        </Link>

                        <a onClick={onExitClick} style={{color: "#FF5A5A"}} className="settings__link settings__link--red">
                            <Text content="Exit" />
                        </a>

                        <DeleteAccountButtonContainer />
                    </nav>
                </div>
            </main>
        </>
    );
}

export default Settings;