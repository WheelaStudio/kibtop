import { useSelector } from "react-redux";

import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setAdvertDataThunk } from "../../../../../../store/slices/AdvertSlice";
import { useFormContext, useWatch } from "react-hook-form";
import AddAvto from "./AddAvto/AddAvto";
import AddFree from "./AddFree/AddFree";
import AddOther from "./AddOther/AddOther";
import AddRealty from "./AddRealty/AddRealty";
import AddWork from "./AddWork/AddWork";
import AddRealtyLand from "./AddRealty/AddRealtyLand";
import EditAdvertContainer from "./EditAdvertContainer";

const AddAdvertRouter = () => {
  var { category } = useSelector(state => state.addAdvert);
  const subCategory = useWatch({ name: "subCategory" });
  if (subCategory == "Land" || subCategory == "Other") {
    category = "realty_land";
  }

  // const {
  //   query: { category, advertId },
  //   locale,
  // } = useRouter();
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(setAdvertDataThunk(advertId, category, locale));
  // }, [category, advertId, locale]);

  return (
    <>
      <EditAdvertContainer>
        {category === "realty" ? (
          <AddRealty />
        ) : category === "realty_land" ? (
          <AddRealtyLand />
        ) : category === "avto" ? (
          <AddAvto />
        ) : category === "work" ? (
          <AddWork />
        ) : category === "services" ? (
          <AddOther />
        ) : category === "children" ? (
          <AddOther />
        ) : category === "electronics" ? (
          <AddOther />
        ) : category === "house_garden" ? (
          <AddOther />
        ) : category === "free" ? (
          <AddFree />
        ) : category === "fashion" ? (
          <AddOther />
        ) : (
          ""
        )}
      </EditAdvertContainer>
    </>
  );
};

export default AddAdvertRouter;
