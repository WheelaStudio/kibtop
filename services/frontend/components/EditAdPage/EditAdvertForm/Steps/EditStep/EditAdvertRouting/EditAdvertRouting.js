import AddAvto from "./AddAvto/AddAvto";
import AddFree from "./AddFree/AddFree";
import AddOther from "./AddOther/AddOther";
import AddRealty from "./AddRealty/AddRealty";
import AddWork from "./AddWork/AddWork";
import AddRealtyLand from "./AddRealty/AddRealtyLand";
import EditAdvertContainer from "../../../EditAdvertFormContainer";

const EditAdvertRouting = ({ category, advertId, advertData }) => {
  const data = advertData;

  return (
    <>
      <EditAdvertContainer>
        {category === "realty" ? (
          <AddRealty {...{ category, advertId, ...data }} />
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
      </EditAdvertContainer>
    </>
  );
};

export default EditAdvertRouting;
