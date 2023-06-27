import Header from "../Header/Header";
import { useRouter } from "next/router";
import HeaderService from "../Header/HeaderService/HeaderService";
import SettingsNavForEdit from "../SettingsPage/SettingsNavForEdit";
import EditAdvertRouter from "../EditAdPage/EditAdvertForm/EditAdvertRouter";

const EditAdvertPage = ({ advert }) => {
  const {
    query: { category },
    push,
  } = useRouter();
  const allPaths = [
    "avto",
    "children",
    "electronics",
    "fashion",
    "house_garden",
    "realty",
    "services",
    "work",
    "free",
  ];

  return (
    <>
      <Header />
      <HeaderService />
      <main className="main">
        <SettingsNavForEdit title="Edit Advert" />
        <div className="container">
          {/* <EditAdvertFormContainer advert={advert} /> */}
          {!allPaths.some(categoryPath => categoryPath === category) ? (
            <></>
          ) : (
            <EditAdvertRouter {...{ category, advert }} />
          )}
        </div>
      </main>
    </>
  );
};

export default EditAdvertPage;
