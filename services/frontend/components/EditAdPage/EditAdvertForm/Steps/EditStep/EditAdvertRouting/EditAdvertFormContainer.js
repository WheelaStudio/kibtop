import AddAvto from "./AddAvto/AddAvto";
import AddFree from "./AddFree/AddFree";
import AddOther from "./AddOther/AddOther";
import EditRealty from "./EditRealty/EditRealty";
import AddWork from "./AddWork/AddWork";
import AddRealtyLand from "./EditRealty/AddRealtyLand";

const EditAdvertFormContainer = ({ category, advertId, advertData }) => {
  const data = advertData;
  console.log(data);
  return (
    <>
      {category === "realty" ? (
        <EditRealty {...{ category, advertId, ...data }} />
      ) : (
        // : category === "realty_land" ? (
        //   <AddRealtyLand {...advertData} />
        // ) : category === "avto" ? (
        //   <AddAvto {...advertData} />
        // ) : category === "work" ? (
        //   <AddWork {...advertData} />
        // ) : category === "services" ? (
        //   <AddOther {...advertData} />
        // ) : category === "children" ? (
        //   <AddOther {...advertData} />
        // ) : category === "electronics" ? (
        //   <AddOther {...advertData} />
        // ) : category === "house_garden" ? (
        //   <AddOther {...advertData} />
        // ) : category === "free" ? (
        //   <AddFree {...advertData} />
        // ) : category === "fashion" ? (
        //   <AddOther {...advertData} />
        // )

        ""
      )}
    </>
  );
};

export default EditAdvertFormContainer;
