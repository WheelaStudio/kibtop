import Header from "../Header/Header";
import HeaderService from "../Header/HeaderService/HeaderService";
import SettingsNav from "../SettingsPage/SettingsNav";
import EditAdvertFormContainer from "./EditAdvertForm/EditAdvertFormContainer";

const EditAdvertPage = ({ user }) => {
  return (
    <>
      <Header />
      <HeaderService />
      <main className="main">
        <SettingsNav title="Product name" />
        <div className="container">
          <EditAdvertFormContainer user={user} />
        </div>
      </main>
    </>
  );
};

export default EditAdvertPage;
