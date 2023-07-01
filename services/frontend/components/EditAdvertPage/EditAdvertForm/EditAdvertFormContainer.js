import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  setAdvertDataThunk,
  editAdvertThunk,
} from "../../../store/slices/EditAdvertSlice";
import EditAdvertRouter from "./Steps/EditAdvertStep/EditAdvertRouter/EditAdvertRouter";

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
  } = useSelector(state => state.editAdvert);

  const onEditAdvertSubmit = data => {
    dispatch(editAdvertThunk({ ...data }, category, advertId, locale));
    push(`/profile`);
  };
  const advertData = {
    title,
    description,
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
