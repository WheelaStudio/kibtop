// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useRouter } from "next/router";
// import {
//   editAdvertDataThunk,
//   setAdvertDataThunk,
//   setAdvertEditingActivated,
//   setAdvertEditingSuccess,
// } from "../../../store/slices/AdvertSlice";
// import EditAdvertForm from "./EditAdvertForm";

// const EditAdvertFormContainer = ({ advert }) => {
//   const {
//     title,
//     price,
//     address,
//     photo,
//     fileList,
//     description,
//     isSuccess,
//     isLoading,
//     isActivated,
//   } = useSelector(state => state.advert);
//   const { push } = useRouter();
//   const dispatch = useDispatch();

//   useEffect(() => {
//     // if (isActivated) {
//     //   dispatch(setAdvertEditingActivated(false));
//     //   dispatch(setAdvertEditingSuccess(false));
//     //   push("/advert");
//     // }
//     if (1 == 1) {
//       dispatch(setAdvertDataThunk());
//     }
//   }, []);

//   const onEditAdvertSubmit = data => {
//     dispatch(
//       editAdvertDataThunk({
//         advertId: advert.advertId,
//         data,
//       })
//     );
//   };

//   const advertData = advert || {
//     title,
//     price,
//     address,
//     photo,
//     fileList,
//     description,
//   };

//   return (
//     <EditAdvertForm
//       onEditAdvertSubmit={onEditAdvertSubmit}
//       isLoading={isLoading}
//       isSuccess={isSuccess}
//       {...advertData}
//     />
//   );
// };

// export default EditAdvertFormContainer;

import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  setAdvertData,
  setAdvertDataThunk,
} from "../../../store/slices/AdvertSlice";

const EditAdvertContainer = ({ children }) => {
  const {
    query: { category, advertId },
    locale,
  } = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setAdvertDataThunk(advertId, category, locale));
  }, [category, advertId, locale]);

  return <>{children}</>;
};

export default EditAdvertContainer;
