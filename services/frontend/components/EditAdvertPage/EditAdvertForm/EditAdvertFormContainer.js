import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { editAdvertThunk } from "../../../store/slices/EditAdvertSlice";
import EditAdvertRouter from "./Steps/EditAdvertStep/EditAdvertRouter/EditAdvertRouter";
import { setAdvertDataThunk } from "../../../store/slices/AdvertSlice";

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

  console.log(title);

  const onEditAdvertSubmit = data => {
    dispatch(
      editAdvertThunk({ ...data }, category, advertId, locale, subCategoryName)
    );
    push(`/profile/`);
    // setTimeout(() => {
    //   window.location.reload();
    // }, 2000);
  };

  const advertData = {
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
  };
  return (
    <EditAdvertRouter {...{ onEditAdvertSubmit, category, ...advertData }} />
  );
};

export default EditAdvertFormContainer;
