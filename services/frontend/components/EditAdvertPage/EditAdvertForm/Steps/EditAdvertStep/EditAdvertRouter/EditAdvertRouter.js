import { FormProvider, useForm } from "react-hook-form";
import EditAvto from "./EditAvto/EditAvto";
import EditFree from "./EditFree/EditFree";
import EditOther from "./EditOther/EditOther";
import EditRealty from "./EditRealty/EditRealty";
import EditWork from "./EditWork/EditWork";
import EditRealtyLand from "./EditRealty/EditRealtyLand";

const EditAdvertRouter = ({ category, address, city, geocode, uploads }) => {
  return (
    <>
      {category === "realty" ? (
        <EditRealty
          uploads={uploads}
          address={address}
          city={city}
          geocode={geocode}
        />
      ) : category === "realty_land" ? (
        <EditRealtyLand address={city} uploads={uploads} />
      ) : category === "avto" ? (
        <EditAvto address={city} uploads={uploads} />
      ) : category === "work" ? (
        <EditWork address={city} uploads={uploads} />
      ) : category === "services" ? (
        <EditOther address={city} uploads={uploads} />
      ) : category === "children" ? (
        <EditOther address={city} />
      ) : category === "electronics" ? (
        <EditOther address={city} />
      ) : category === "house_garden" ? (
        <EditOther address={address} />
      ) : category === "free" ? (
        <EditFree address={city} uploads={uploads} />
      ) : category === "fashion" ? (
        <EditOther address={address} />
      ) : (
        ""
      )}
    </>
  );
};

export default EditAdvertRouter;
