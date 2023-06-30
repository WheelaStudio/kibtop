import EditAdvertNav from "./EditAdvertNav/AddAdvertNav";
import EditAdvertRouter from "./EditAdvertRouter/EditAdvertRouter";

const EditAdvertStep = ({ category, advertId }) => {
  return (
    <>
      <EditAdvertNav />
      <EditAdvertRouter {...{ category, advertId }} />
    </>
  );
};

export default EditAdvertStep;
