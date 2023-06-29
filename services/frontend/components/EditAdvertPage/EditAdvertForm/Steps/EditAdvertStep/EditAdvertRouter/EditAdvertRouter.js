import { useEffect } from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { setAdvertDataThunk } from "../../../../../../store/slices/AdvertSlice";
import EditAvto from "./EditAvto/EditAvto";
import EditFree from "./EditFree/EditFree";
import EditOther from "./EditOther/EditOther";
import EditRealty from "./EditRealty/EditRealty";
import EditWork from "./EditWork/EditWork";
import EditRealtyLand from "./EditRealty/EditRealtyLand";
import EditAdvertContainer from "./EditAdvertContainer";

const EditAdvertRouter = ({ category }) => {
  const dispatch = useDispatch();

  const {
    query: { category: routerCategory, advertId: routerAdvertId },
    locale,
  } = useRouter();

  useEffect(() => {
    dispatch(setAdvertDataThunk(routerAdvertId, routerCategory, locale));
  }, [routerCategory, routerAdvertId, locale]);

  return (
    <>
      <EditAdvertContainer>
        {category === "realty" ? (
          <EditRealty />
        ) : category === "realty_land" ? (
          <EditRealtyLand />
        ) : category === "avto" ? (
          <EditAvto />
        ) : category === "work" ? (
          <EditWork />
        ) : category === "services" ? (
          <EditOther />
        ) : category === "children" ? (
          <EditOther />
        ) : category === "electronics" ? (
          <EditOther />
        ) : category === "house_garden" ? (
          <EditOther />
        ) : category === "free" ? (
          <EditFree />
        ) : category === "fashion" ? (
          <EditOther />
        ) : (
          ""
        )}
      </EditAdvertContainer>
    </>
  );
};

export default EditAdvertRouter;
