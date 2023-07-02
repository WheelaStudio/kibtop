import { FormProvider, useForm } from "react-hook-form";
import EditAvto from "./EditAvto/EditAvto";
import EditFree from "./EditFree/EditFree";
import EditOther from "./EditOther/EditOther";
import EditRealty from "./EditRealty/EditRealty";
import EditWork from "./EditWork/EditWork";
import EditRealtyLand from "./EditRealty/EditRealtyLand";

const EditAdvertRouter = ({
  onEditAdvertSubmit,
  category,
  title,
  description,
  categoryName,
  // subCategoryName,
  condition,
  brand,
  mileage,
  year,
  rooms,
  employment,
  workType,
  date,
  address,
  city,
  geocode,
  img,
  uploads,
  cost,
  square,
  isMonth,
  currency,
  userId,
}) => {
  if (!title && !description && !userId) {
    return <div></div>;
  }

  const EditAdvertForm = useForm({
    mode: "onChange",
    defaultValues: {
      photos: [],
      title,
      description,
      categoryName,
      // subCategoryName,
      condition,
      brand,
      mileage,
      year,
      rooms,
      employment,
      workType,
      date,
      address,
      city,
      geocode,
      img,
      uploads,
      cost,
      square,
      isMonth,
      currency,
      userId,
    },
  });
  const {
    handleSubmit,
    formState: { isValid, errors },
  } = EditAdvertForm;

  const onSubmitClick = handleSubmit(onEditAdvertSubmit);
  console.log(category);
  return (
    <>
      <form onSubmit={handleSubmit(onSubmitClick)} className="advert-form">
        <div className="container">
          <div className="advert-form__fields">
            <FormProvider {...EditAdvertForm}>
              {category === "realty" ? (
                <EditRealty />
              ) : category === "realty_land" ? (
                <EditRealtyLand />
              ) : category === "avto" ? (
                <EditAvto />
              ) : category === "work" ? (
                <EditWork />
              ) : category === "services" ? (
                <EditOther />
              ) : category === "children" ? (
                <EditOther />
              ) : category === "electronics" ? (
                <EditOther />
              ) : category === "house_garden" ? (
                <EditOther />
              ) : category === "free" ? (
                <EditFree />
              ) : category === "fashion" ? (
                <EditOther />
              ) : (
                ""
              )}
            </FormProvider>
          </div>
        </div>
      </form>
    </>
  );
};

export default EditAdvertRouter;
