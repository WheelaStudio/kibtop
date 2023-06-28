import { useEffect } from "react";
import { useFormContext, Controller } from "react-hook-form";
import { useCurrency } from "../../../../../../../locales/hooks/useCurrency";
import Text from "../../../../../../Elementes/Text/Text";
import AddressField from "../../../../Fields/AddressField/AddressField";
import AddressFieldContainer from "../../../../Fields/AddressField/AddressFieldContainer";
import BrandField from "../../../../Fields/BrandField/BrandField";
import CostField from "../../../../Fields/CostField";
import DescriptionInput from "../../../../Fields/DescriptionInput";
import MileageField from "../../../../Fields/MileageField";
import NextButtonContainer from "../../../../Fields/NextButton/NextButtonContainer";
import PhotosInput from "../../../../Fields/PhotosInput";
import PhotoUploadsContainer from "../../../../Fields/PhotoUploads/PhotoUploadsContainer";
import RadioGroup from "../../../../Fields/RadioGroup/RadioGroup";
import ServiceSets from "../../../../Fields/ServiceSets/ServiceSets";
import ServiceSetsGroupContainer from "../../../../Fields/ServiceSetsGroup/ServiceSetsGroupContainer";
import SquareField from "../../../../Fields/SquareField";
import SubmitButtonContainer from "../../../../Fields/SubmitButton/SubmitButtonContainer";
import TitleField from "../../../../Fields/TitleField";
import YearField from "../../../../Fields/YearField";

const AddAvto = ({
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
  userId,
  advertId,
  cost,
  square,
  isMonth,
}) => {
  const {
    setValue,
    getValues,
    formState: { errors },
  } = useFormContext();
  const { currency } = useCurrency();

  useEffect(() => {
    setValue("currency", currency, { shouldTouch: true, shouldValidate: true });
    setValue("isUsed", "true", { shouldTouch: true, shouldValidate: true });
  }, []);
  return (
    <>
      <div className="advert-form__field">
        <label className="advert-form__label">
          <Text content="title" />
        </label>

        <TitleField defaultValue={title} />
      </div>

      <div className="advert-form__field">
        <label className="advert-form__label">
          <Text content="Brand" />
        </label>

        <BrandField />
      </div>

      <div className="advert-form__field">
        <label className="advert-form__label">
          <Text content="transaction type" />
        </label>

        <RadioGroup
          name={"isUsed"}
          inputs={[
            { label: "New", value: true },
            { label: "Used", value: false },
          ]}
        />
      </div>

      <div className="advert-form__field">
        <label className="advert-form__label">
          <Text content="Mileage" />
        </label>

        <MileageField defaultValue={mileage} />
      </div>

      <div className="advert-form__field">
        <label className="advert-form__label">
          <Text content="Year" />
        </label>

        <YearField defaultValue={year} />
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
            placeholderName={"car"}
            defaultValue={description}
          />
        </div>
      </div>

      {/* <div className="advert-form__field advert-form__field--mt mob-hide">
                <label className="advert-form__label">
                    <Text content="Service sets" />
                </label>

                <ServiceSetsGroupContainer requiredFields={[ 
                                                'title', 
                                                'address',
                                                'categoryName', 
                                                'city', 
                                                'geocode', 
                                                'cost', 
                                                'description', 
                                                'currency', 
                                                'photos',
                                                'subCategory',
                                                'brand',
                                                'year',
                                                'mileage'
                                                    ]} />
            </div> */}

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
          "brand",
          "year",
          "mileage",
          "isUsed",
        ]}
      />

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
          "brand",
          "year",
          "mileage",
          "isUsed",
        ]}
      />
    </>
  );
};

export default AddAvto;
