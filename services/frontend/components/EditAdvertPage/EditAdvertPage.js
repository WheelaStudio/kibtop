import Header from "../Header/Header";
import HeaderService from "../Header/HeaderService/HeaderService";
import EditAdvertFormContainer from "./EditAdvertForm/EditAdvertFormContainer";
import SettingsNavForEdit from "../SettingsPage/SettingsNavForEdit";
import { useLanguage } from "../../locales/hooks/useLanguage";

const EditAdvertPage = () => {
  const { t } = useLanguage();

  return (
    <>
      <Header />
      <HeaderService />
      <main className="main">
        <SettingsNavForEdit title={t("Edit Advert")} />
        <EditAdvertFormContainer />
      </main>
    </>
  );
};

export default EditAdvertPage;
