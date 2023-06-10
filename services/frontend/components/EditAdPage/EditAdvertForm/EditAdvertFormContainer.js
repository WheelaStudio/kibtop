import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  editAdvertDataThunk,
  setAdvertDataThunk,
  setAdvertEditingActivated,
  setAdvertEditingSuccess,
} from "../../../store/slices/AdvertSlice";
import EditProfileForm from "./EditProfileForm";

const EditAdvertFormContainer = ({ advert }) => {
  const { email, name, city, avatar, isSuccess, isLoading, isActivated } =
    useSelector(state => state.advert);
  const { push } = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    if (isActivated) {
      dispatch(setAdvertEditingActivated(false));
      dispatch(setAdvertEditingSuccess(false));
      push("/advert");
    }
    if (!email || !name || !city || !avatar) dispatch(setAdvertDataThunk());
  }, [email, name, city, avatar, isActivated]);

  const onEditAdvertSubmit = data => {
    const { email, name, city, file, phoneNumber, phoneCode } = data;
    const phone = `+${phoneNumber}`;
    dispatch(
      editAdvertDataThunk({ email, name, city, avatar: file[0], phone })
    );
  };

  const advertData = advert || { email, name, city, avatar };

  return (
    <EditProfileForm
      {...{ onEditAdvertSubmit, isLoading, isSuccess, ...advertData }}
    />
  );
};

export default EditAdvertFormContainer;
