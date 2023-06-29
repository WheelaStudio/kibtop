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

const EditWork = () => {
  const {
    setValue,
    getValues,
    formState: { errors },
  } = useFormContext();
  const { currency } = useCurrency();

  useEffect(() => {
    setValue("currency", currency, { shouldTouch: true, shouldValidate: true });
    setValue("workType", "For work", {
      shouldTouch: true,
      shouldValidate: true,
    });
    setValue("employment", "Full time", {
      shouldTouch: true,
      shouldValidate: true,
    });
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
          <Text content="purpose" />
        </label>

        <RadioGroup
          name={"workType"}
          inputs={[
            { label: "Post your resume", value: "For work" },
            { label: "Place a vacancy ad", value: "For an employee" },
          ]}
        />
      </div>

      <div className="advert-form__field">
        <label className="advert-form__label">
          <Text content="Employment" />
        </label>

        <RadioGroup
          name={"employment"}
          inputs={[
            { label: "Full time", value: "Full time" },
            { label: "Partial", value: "Partial" },
            { label: "Remote", value: "Remote" },
          ]}
        />
      </div>

      <div className="advert-form__field">
        <label className="advert-form__label">
          <Text content="Salary" />
        </label>

        <CostField placeholder={"Salary for the month"} />
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
          <DescriptionInput
            placeholderName={
              getValues("workType") === "For work" ? "resume" : "job"
            }
          />
        </div>
      </div>

      {/* 
      <SubmitButtonContainer
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

export default EditWork;
