import EditAdvertNav from "./EditAdvertNav/EditAdvertNav";
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
