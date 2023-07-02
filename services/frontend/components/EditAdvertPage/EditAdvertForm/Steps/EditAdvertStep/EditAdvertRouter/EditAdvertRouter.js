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
  return (
    <>
      <form onSubmit={handleSubmit(onSubmitClick)} className="advert-form">
        <div className="container">
          <div className="advert-form__fields">
            <FormProvider {...EditAdvertForm}>
              {category === "realty" ? (
                <EditRealty
                  uploads={uploads}
                  address={address}
                  city={city}
                  geocode={geocode}
                />
              ) : category === "realty_land" ? (
                <EditRealtyLand address={city} uploads={uploads} />
              ) : category === "avto" ? (
                <EditAvto address={city} uploads={uploads} />
              ) : category === "work" ? (
                <EditWork address={city} uploads={uploads} />
              ) : category === "services" ? (
                <EditOther address={city} uploads={uploads} />
              ) : category === "children" ? (
                <EditOther address={city} />
              ) : category === "electronics" ? (
                <EditOther address={city} />
              ) : category === "house_garden" ? (
                <EditOther address={city} />
              ) : category === "free" ? (
                <EditFree address={city} uploads={uploads} />
              ) : category === "fashion" ? (
                <EditOther address={city} />
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
