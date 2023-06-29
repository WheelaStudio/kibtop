import { useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { setAdvertDataThunk } from "../../../store/slices/AdvertSlice";
import EditAdvertRouter from "./Steps/EditAdvertStep/EditAdvertRouter/EditAdvertRouter";

const EditAdvertForm = ({ onEditAdvertSubmit, category }) => {
  const dispatch = useDispatch();

  let {
    title,
    description,
    categoryName,
    subCategoryName,
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
    userId,
    cost,
    square,
    isMonth,
    currency,
    isLoading,
    isActivated,
  } = useSelector(state => state.advert);

  useEffect(() => {
    const fetchAdvertData = async () => {
      if (
        title ||
        description ||
        categoryName ||
        subCategoryName ||
        condition ||
        brand ||
        mileage ||
        year ||
        rooms ||
        employment ||
        workType ||
        date ||
        address ||
        city ||
        geocode ||
        img ||
        uploads ||
        userId ||
        advertId ||
        cost ||
        square ||
        isMonth ||
        currency
      )
        dispatch(setAdvertDataThunk());
    };

    fetchAdvertData();
  }, [
    title,
    description,
    categoryName,
    subCategoryName,
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
  ]);

  const EditAdvertForm = useForm({
    mode: "onChange",
    defaultValues: {
      photos: [],
      title,
      description,
      categoryName,
      subCategoryName,
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
      square,
      geocode,
      img,
      uploads,
      userId,
      cost,
      square,
      isMonth,
      currency,
    },
  });
  const {
    handleSubmit,
    formState: { isValid, errors },
  } = EditAdvertForm;

  console.log("errors: ", errors);

  const onSubmitClick = handleSubmit(onEditAdvertSubmit);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmitClick)} className="advert-form">
        <div className="container">
          <div className="advert-form__fields">
            <FormProvider {...EditAdvertForm}>
              {<EditAdvertRouter {...{ category }} />}
            </FormProvider>
          </div>
        </div>
      </form>
    </>
  );
};

export default EditAdvertForm;
