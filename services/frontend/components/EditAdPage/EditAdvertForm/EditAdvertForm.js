import { FormProvider, useForm } from "react-hook-form";
import Text from "../../Elementes/Text/Text";
import CityField from "./Fields/CityField";
import EmailField from "./Fields/EmailField";
import FilesField from "./Fields/FilesField";
import NameField from "./Fields/NameField";
import AreaField from "./Fields/AreaField";
import PriceField from "./Fields/PriceField";
import ResendEmailButtonContainer from "./ResendEmailButton/ResendEmailButtonContainer";

const EditAdvertForm = ({
  onEditProfileSubmit,
  title,
  price,
  address,
  photo,
  fileList,
  description,
  isLoading,
  isSuccess,
}) => {
  const EditAdvertForm = useForm({
    mode: "onChange",
    defaultValues: {
      title,
      price,
      address,
      photo,
      description,
    },
  });
  const {
    handleSubmit,
    watch,
    formState: { isValid, errors },
  } = EditAdvertForm;

  const { phoneCode, phoneNumber } = watch();
  return (
    <>
      <form
        className="edit-profile"
        onSubmit={handleSubmit(onEditProfileSubmit)}>
        <FormProvider {...EditAdvertForm}>
          <div className="edit-profile__field">
            <label className="edit-profile__label">
              <Text content="Title" />
            </label>

            <NameField />
          </div>

          <div className="edit-profile__field">
            <label className="edit-profile__label">
              <Text content="Price" />
            </label>

            <PriceField />
          </div>
          <div className="edit-profile__field">
            <label className="edit-profile__label">
              <Text content="Address" />
            </label>

            <CityField />
          </div>
          <div className="edit-profile__field edit-profile__field--file">
            <label className="edit-profile__label">
              <Text content="Photo" />
            </label>

            <FilesField files={fileList} />
          </div>
          <div className="edit-profile__field">
            <label className="edit-profile__label">
              <Text content="Description" />
            </label>

            <AreaField />
          </div>
        </FormProvider>

        {
          <button
            disabled={!isValid || isLoading}
            className="reg-btn reg-btn--edit">
            <Text content="Apply" />
          </button>
        }
      </form>
    </>
  );
};

export default EditAdvertForm;
