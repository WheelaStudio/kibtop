import { useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import Header from "../Header/Header";
import { useRouter } from "next/router";
import HeaderService from "../Header/HeaderService/HeaderService";
import SettingsNavForEdit from "../SettingsPage/SettingsNavForEdit";
import EditAdvertRouter from "./EditAdvertForm/Steps/EditStep/EditAdvertRouting/AddAdvertRouter";
import { useLanguage } from "../../locales/hooks/useLanguage";

const EditAdvertPage = ({ advert }) => {
  const { t } = useLanguage();
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
  const AddAdvertForm = useForm({
    mode: "onChange",
    defaultValues: {
      photos: [],
    },
  });
  const {
    handleSubmit,
    getValues,
    watch,
    setError,
    formState: { isValid, errors },
  } = AddAdvertForm;

  return (
    <>
      <Header />
      <HeaderService />
      <main className="main">
        <SettingsNavForEdit title={t("Edit Advert")} />
        <div className="container">
          <div className="advert-form__fields">
            {!allPaths.some(categoryPath => categoryPath === category) ? (
              <></>
            ) : (
              <FormProvider {...{ ...AddAdvertForm }}>
                {<EditAdvertRouter {...{ category, advert }} />}
              </FormProvider>
            )}
          </div>
        </div>
      </main>
    </>
  );
};

export default EditAdvertPage;
