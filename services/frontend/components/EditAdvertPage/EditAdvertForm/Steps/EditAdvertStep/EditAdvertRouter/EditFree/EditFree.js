import { useEffect } from "react";
import { useFormContext } from "react-hook-form";
import Text from "../../../../../../Elementes/Text/Text";
import AddressFieldContainer from "../../../../Fields/AddressField/AddressFieldContainer";
import DescriptionInput from "../../../../Fields/DescriptionInput";
import NextButtonContainer from "../../../../Fields/NextButton/NextButtonContainer";
import PhotosInput from "../../../../Fields/PhotosInput";
import PhotoUploadsContainer from "../../../../Fields/PhotoUploads/PhotoUploadsContainer";
import ServiceSets from "../../../../Fields/ServiceSets/ServiceSets";
import ServiceSetsGroupContainer from "../../../../Fields/ServiceSetsGroup/ServiceSetsGroupContainer";
import SubmitButtonContainer from "../../../../Fields/SubmitButton/SubmitButtonContainer";
import TitleField from "../../../../Fields/TitleField";

const EditFree = () => {
  const { setValue } = useFormContext();
  useEffect(() => {
    setValue("cost", "0");
    setValue("currency", "$");
  }, []);

  return (
    <>
      <div className="advert-form__field">
        <label className="advert-form__label">
          <Text content="title" />
        </label>

        <TitleField />
      </div>

      <div className="advert-form__field">
        <label className="advert-form__label">
          <Text content="address" />
        </label>

        <AddressFieldContainer />
      </div>

      <div className="advert-form__field advert-form__field---address">
        <label className="advert-form__label">
          <Text content="photo" />
        </label>

        <div className="advert-form__files">
          <PhotoUploadsContainer />
          <PhotosInput />
        </div>
      </div>

      <div className="advert-form__field advert-form__field--mt">
        <label className="advert-form__label">
          <Text content="description" />
        </label>

        <div className="advert-form__files" style={{ marginLeft: 0 }}>
          <DescriptionInput placeholderName={"product"} />
        </div>
      </div>

      {/* <SubmitButtonContainer
        requiredFields={[
          "title",
          "address",
          "categoryName",
          "city",
          "geocode",
          "cost",
          "description",
          "currency",
          "photos",
          "subCategory",
        ]}
      /> */}

      <NextButtonContainer
        requiredFields={[
          "title",
          "address",
          "categoryName",
          "city",
          "geocode",
          "cost",
          "description",
          "currency",
          "photos",
          "subCategory",
        ]}
      />

      {/* <p className="step-text">
        <Text content="step" /> 2 <Text content="of" /> 3
      </p> */}
    </>
  );
};

export default EditFree;
