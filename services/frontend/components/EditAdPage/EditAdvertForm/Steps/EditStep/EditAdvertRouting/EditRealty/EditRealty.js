import { useEffect } from "react";
import { useRouter } from "next/router";
import { useFormContext, FormProvider, useForm } from "react-hook-form";
import { useCurrency } from "../../../../../../../locales/hooks/useCurrency";
import Text from "../../../../../../Elementes/Text/Text";
import AddressField from "../../../../Fields/AddressField/AddressField";
import AddressFieldContainer from "../../../../Fields/AddressField/AddressFieldContainer";
import CostField from "../../../../Fields/CostField";
import DescriptionInput from "../../../../Fields/DescriptionInput";
import PhotosInput from "../../../../Fields/PhotosInput";
import PhotoUploadsContainer from "../../../../Fields/PhotoUploads/PhotoUploadsContainer";
import RadioGroup from "../../../../Fields/RadioGroup/RadioGroup";
import SquareField from "../../../../Fields/SquareField";
import TitleField from "../../../../Fields/TitleField";
import { useDispatch, useSelector } from "react-redux";
import {
  setAdvertDataThunk,
  editAdvertDataThunk,
  setAdvertEditingActivated,
  setAdvertEditingSuccess,
} from "../../../../../../../store/slices/AdvertSlice";
import FileField from "../../../../Fields/FileField";

const EditRealty = ({
  advertId,
  category,
  title,
  description,
  cost,
  square,
  condition,
  address,
  city,
  geocode,
  img,
  isMonth,
  rooms,
  uploads,
  userId,
}) => {
  const { currency } = useCurrency();
  const { isSuccess, isLoading, isActivated } = useSelector(
    state => state.advert
  );
  const { push } = useRouter();
  const dispatch = useDispatch();

  const EditAdvertForm = useForm({
    mode: "onChange",
    defaultValues: {
      advertId,
      category,
      title,
      description,
      cost,
      square,
      condition,
      address,
      city,
      geocode,
      img,
      isMonth,
      rooms,
      uploads,
      userId,
    },
  });
  const {
    handleSubmit,
    watch,
    getValues,
    setValue,
    formState: { errors },
  } = EditAdvertForm;

  console.log("errors:", errors);

  const onSubmit = data => {
    const { title, description, cost, square, address, city, geocode, file } =
      data;
    dispatch(
      editAdvertDataThunk({
        advertId,
        category,
        title,
        description,
        cost,
        square,
        address,
        city,
        geocode,
        uploads: file[0],
        userId,
      })
    );
  };

  useEffect(() => {
    if (isActivated) {
      dispatch(setAdvertEditingActivated(false));
      dispatch(setAdvertEditingSuccess(false));
      push("/profile");
    }

    if (!advertId || !title || !description || !cost || !square || !address)
      dispatch(setAdvertDataThunk());
  }, [
    advertId,
    category,
    title,
    description,
    cost,
    square,
    address,
    city,
    geocode,
    isActivated,
  ]);

  const handleRadioChange = value => {
    setValue("isMonth", value.toString(), {
      shouldTouch: true,
      shouldValidate: true,
    });
  };

  // useEffect(() => {
  //   setValue("isMonth", "true", { shouldTouch: true, shouldValidate: true });
  //   setValue("condition", "Old", { shouldTouch: true, shouldValidate: true });
  //   setValue("rooms", "Studio", { shouldTouch: true, shouldValidate: true });
  //   setValue("currency", currency, { shouldTouch: true, shouldValidate: true });
  // }, []);

  // const isMonth = getValues("isMonth") === "true";

  // let value = isMonth;

  return (
    <>
      <form className="edit-profile" onSubmit={handleSubmit(onSubmit)}>
        <FormProvider {...EditAdvertForm}>
          <div className="advert-form__field">
            <label className="advert-form__label">
              <Text content="title" />
            </label>

            <TitleField defaultValue={title} />
          </div>

          <div className="advert-form__field">
            <label className="advert-form__label">
              <Text content="transaction type" />
            </label>

            <RadioGroup
              name={"isMonth"}
              inputs={[
                { label: "Rent out", value: true },
                { label: "Sell", value: false },
              ]}
              onChange={handleRadioChange}
            />
          </div>

          <div className="advert-form__field">
            <label className="advert-form__label">
              <Text content="condition" />
            </label>

            <RadioGroup
              name={"condition"}
              inputs={[
                { label: "Old", value: "Old" },
                { label: "New", value: "New" },
              ]}
            />
          </div>

          <div className="advert-form__field">
            <label className="advert-form__label">
              <Text content="rooms" />
            </label>

            <RadioGroup
              name={"rooms"}
              inputs={[
                { label: "Studio", value: "Studio" },
                { label: "1+1", value: "1+1" },
                { label: "2+1", value: "2+1" },
                { label: "2+2", value: "2+2" },
                { label: "3+1", value: "3+1" },
                { label: "4+1 and more", value: "4+1 and more" },
              ]}
            />
          </div>

          <div className="advert-form__field">
            <label className="advert-form__label">
              <Text content="Square" />
            </label>

            <SquareField defaultValue={square} />
          </div>

          <div className="advert-form__field">
            <label className="advert-form__label">
              <Text content="price" />
            </label>
            <CostField defaultValue={cost} />
          </div>

          <div className="advert-form__field">
            <label className="advert-form__label">
              <Text content="address" />
            </label>

            <AddressFieldContainer defaultValues={{ address, city, geocode }} />
          </div>

          <div className="advert-form__field advert-form__field---address">
            <label className="advert-form__label">
              <Text content="photo" />
            </label>

            <div className="advert-form__files">
              {/* <PhotoUploadsContainer />
              <PhotosInput /> */}
              <FileField />
            </div>
          </div>

          <div className="advert-form__field advert-form__field--mt">
            <label className="advert-form__label">
              <Text content="description" />
            </label>

            <div className="advert-form__files" style={{ marginLeft: 0 }}>
              <DescriptionInput
                placeholderName={"apartment"}
                defaultValue={description}
              />
            </div>
          </div>

          {/* <button type="submit" className="reg-btn reg-btn--edit">
            <Text content="Apply" />
          </button> */}
        </FormProvider>

        {isSuccess ? (
          <div className="edit-form-ask">
            <p className="ask-text"></p>
          </div>
        ) : (
          <button disabled={isLoading} className="reg-btn reg-btn--edit">
            <Text content="Apply" />
          </button>
        )}
      </form>
    </>
  );
};

export default EditRealty;
