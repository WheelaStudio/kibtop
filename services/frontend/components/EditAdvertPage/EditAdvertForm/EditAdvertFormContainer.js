import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import EditAdvertForm from "../EditAdvertForm/Steps/EditAdvertStep/EditAdvertRouter/EditAdvertForm";
import { setAdvertDataThunk } from "../../../store/slices/AdvertSlice";
import { editAdvertThunk } from "../../../store/slices/EditAdvertSlice";

const EditAdvertFormContainer = () => {
  const dispatch = useDispatch();
  const {
    query: { category, advertId },
    locale,
    push,
  } = useRouter();
  useEffect(() => {
    dispatch(setAdvertDataThunk(advertId, category, locale));
  }, []);

  const {
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
    userId,
  } = useSelector(state => state.advert);

  if (!title && !description && !userId) {
    return <div></div>;
  }

  const onEditAdvertSubmit = data => {
    dispatch(
      editAdvertThunk({ ...data }, category, advertId, locale, subCategoryName)
    );
    push(`/profile/`);
  };

  const defaultValues = {
    photos: [],
    title,
    description,
    categoryName,
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
  };

  const advertData = {
    title,
    description,
    categoryName,
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
  };

  return (
    <EditAdvertForm
      defaultValues={defaultValues}
      onEditAdvertSubmit={onEditAdvertSubmit}
      category={category}
      advertData={advertData}
    />
  );
};

export default EditAdvertFormContainer;
