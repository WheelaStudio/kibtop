import Header from "../Header/Header";
import HeaderService from "../Header/HeaderService/HeaderService";
import SettingsNav from "../SettingsPage/SettingsNav";
import EditAdvertFormContainer from "./EditAdvertForm/EditAdvertFormContainer";

const EditAdvertPage = ({ advert }) => {
  return (
    <>
      <Header />
      <HeaderService />
      <main className="main">
        <SettingsNav title="Product name" />
        <div className="container">
          <EditAdvertFormContainer advert={advert} />
        </div>
      </main>
    </>
  );
};

export default EditAdvertPage;
