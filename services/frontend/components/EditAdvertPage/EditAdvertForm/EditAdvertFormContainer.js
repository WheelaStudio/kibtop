import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { editAdvertThunk } from "../../../store/slices/AdvertSlice";
import EditAdvertForm from "./EditAdvertForm";

const EditAdvertFormContainer = () => {
  const dispatch = useDispatch();
  const { query, push, locale } = useRouter();
  const category = query.category;
  const adId = query.advertId;

  const onEditAdvertSubmit = data => {
    dispatch(editAdvertThunk({ ...data }, category, adId, locale));
    push(`/profile/`);
  };

  return <EditAdvertForm {...{ onEditAdvertSubmit, category }} />;
};

export default EditAdvertFormContainer;
