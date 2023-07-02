import { useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { useCurrency } from "../../../../../../../locales/hooks/useCurrency";
import Text from "../../../../../../Elementes/Text/Text";
import AddressField from "../../../../Fields/AddressField/AddressField";
import AddressFieldContainer from "../../../../Fields/AddressField/AddressFieldContainer";
import CostField from "../../../../Fields/CostField";
import DescriptionInput from "../../../../Fields/DescriptionInput";
import NextButtonContainer from "../../../../Fields/NextButton/NextButtonContainer";
import PhotosInput from "../../../../Fields/PhotosInput";
import PhotoUploadsContainer from "../../../../Fields/PhotoUploads/PhotoUploadsContainer";
import RadioGroup from "../../../../Fields/RadioGroup/RadioGroup";
import ServiceSets from "../../../../Fields/ServiceSets/ServiceSets";
import ServiceSetsGroupContainer from "../../../../Fields/ServiceSetsGroup/ServiceSetsGroupContainer";
import SquareField from "../../../../Fields/SquareField";
import SubmitButtonContainer from "../../../../Fields/SubmitButton/SubmitButtonContainer";
import TitleField from "../../../../Fields/TitleField";

const EditRealtyLand = ({ address }) => {
  const {
    setValue,
    getValues,
    formState: { errors },
  } = useFormContext();
  const { currency } = useCurrency();

  useEffect(() => {
    setValue("isMonth", "true", { shouldTouch: true, shouldValidate: true });
    setValue("condition", "Old", { shouldTouch: true, shouldValidate: true });
    setValue("currency", currency, { shouldTouch: true, shouldValidate: true });
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
          <Text content="transaction type" />
        </label>

        <RadioGroup
          name={"isMonth"}
          inputs={[
            { label: "Rent out", value: true },
            { label: "Sell", value: false },
          ]}
        />
      </div>

      <div className="advert-form__field">
        <label className="advert-form__label">
          <Text content="Square" />
        </label>

        <SquareField />
      </div>

      <div className="advert-form__field">
        <label className="advert-form__label">
          <Text content="price" />
        </label>

        <CostField />
      </div>

      <div className="advert-form__field">
        <label className="advert-form__label">
          <Text content="address" />
        </label>

        <AddressFieldContainer address={address} />
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
          <DescriptionInput placeholderName={"apartment"} />
        </div>
      </div>

      {/* <SubmitButtonContainer
        requiredFields={[
          "title",
          "address",
          "categoryName",
          "condition",
          "city",
          "geocode",
          "cost",
          "description",
          "currency",
          "isMonth",
          "photos",
          "subCategory",
        ]}
      /> */}

      <NextButtonContainer
        requiredFields={[
          "title",
          "address",
          "categoryName",
          "condition",
          "city",
          "geocode",
          "cost",
          "description",
          "currency",
          "isMonth",
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

export default EditRealtyLand;
