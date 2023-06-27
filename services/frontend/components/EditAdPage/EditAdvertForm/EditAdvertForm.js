import { FormProvider, useForm } from "react-hook-form";
import Text from "../../Elementes/Text/Text";
import CityField from "./Fields/CityField";
import EmailField from "./Fields/EmailField";
import FilesField from "./Fields/FilesField";
import NameField from "./Fields/NameField";
import AreaField from "./Fields/AreaField";
import PriceField from "./Fields/PriceField";

const EditAdvertForm = ({
  onEditAdvertSubmit,
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

  return (
    <>
      <form
        className="edit-profile"
        onSubmit={handleSubmit(onEditAdvertSubmit)}>
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

// EditAdvertForm.jsx

// import { FormProvider, useForm } from "react-hook-form";
// import Text from "../../Elementes/Text/Text";
// import CityField from "./Fields/CityField";
// import EmailField from "./Fields/EmailField";
// import FilesField from "./Fields/FilesField";
// import NameField from "./Fields/NameField";
// import AreaField from "./Fields/AreaField";
// import PriceField from "./Fields/PriceField";
// import ResendEmailButtonContainer from "./ResendEmailButton/ResendEmailButtonContainer";
// import { useSelector } from "react-redux";

// const EditAdvertForm = ({ category, onEditAdvertSubmit }) => {
//   // const { title, price, address, photo, fileList, description } = useSelector(
//   //   state => state.advert
//   // );

//   // const EditAdvertForm = useForm({
//   //   mode: "onChange",
//   //   defaultValues: {
//   //     title,
//   //     price,
//   //     address,
//   //     photo,
//   //     description,
//   //   },
//   // });

//   // const {
//   //   handleSubmit,
//   //   watch,
//   //   formState: { isValid },
//   // } = EditAdvertForm;

//   const renderFields = () => {
//     switch (category) {
//       case "realty":
//         return (
//           <>
//             <div className="edit-profile__field">
//               <label className="edit-profile__label">
//                 <Text content="Title" />
//               </label>
//               <NameField />
//             </div>
//             <div className="edit-profile__field">
//               <label className="edit-profile__label">
//                 <Text content="Price" />
//               </label>
//               <PriceField />
//             </div>
//             <div className="edit-profile__field">
//               <label className="edit-profile__label">
//                 <Text content="Address" />
//               </label>
//               <CityField />
//             </div>
//             <div className="edit-profile__field edit-profile__field--file">
//               <label className="edit-profile__label">
//                 <Text content="Photo" />
//               </label>
//               <FilesField files={fileList} />
//             </div>
//             <div className="edit-profile__field">
//               <label className="edit-profile__label">
//                 <Text content="Description" />
//               </label>
//               <AreaField />
//             </div>
//           </>
//         );
//       case "avto":
//         return (
//           <>
//             <div className="edit-profile__field">
//               <label className="edit-profile__label">
//                 <Text content="Title" />
//               </label>
//               <NameField />
//             </div>
//             <div className="edit-profile__field">
//               <label className="edit-profile__label">
//                 <Text content="Price" />
//               </label>
//               <PriceField />
//             </div>
//             <div className="edit-profile__field">
//               <label className="edit-profile__label">
//                 <Text content="Address" />
//               </label>
//               <CityField />
//             </div>
//             <div className="edit-profile__field edit-profile__field--file">
//               <label className="edit-profile__label">
//                 <Text content="Photo" />
//               </label>
//               <FilesField files={fileList} />
//             </div>
//             <div className="edit-profile__field">
//               <label className="edit-profile__label">
//                 <Text content="Description" />
//               </label>
//               <AreaField />
//             </div>
//             <div className="edit-profile__field">
//               <label className="edit-profile__label">
//                 <Text content="Brand" />
//               </label>
//               <BrandField />
//             </div>
//             <div className="edit-profile__field">
//               <label className="edit-profile__label">
//                 <Text content="Mileage" />
//               </label>
//               <MileageField />
//             </div>
//             <div className="edit-profile__field">
//               <label className="edit-profile__label">
//                 <Text content="Year" />
//               </label>
//               <YearField />
//             </div>
//           </>
//         );
//       default:
//         return null;
//     }
//   };

//   return (
//     <FormProvider {...EditAdvertForm}>
//       <form
//         className="edit-profile"
//         onSubmit={handleSubmit(onEditAdvertSubmit)}>
//         {renderFields()}
//         <button
//           type="submit"
//           className="edit-profile__submit-btn"
//           disabled={!isValid}>
//           <Text content="Save Changes" />
//         </button>
//         <ResendEmailButtonContainer />
//       </form>
//     </FormProvider>
//   );
// };

// export default EditAdvertForm;
