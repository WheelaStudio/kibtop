import { FormProvider, useForm } from "react-hook-form";
import EditAdvertRouter from "./EditAdvertRouter";

const EditAdvertForm = ({
  defaultValues,
  onEditAdvertSubmit,
  category,
  advertData,
}) => {
  const EditAdvertForm = useForm({
    mode: "onChange",
    defaultValues,
  });

  const {
    handleSubmit,
    formState: { isValid, errors },
  } = EditAdvertForm;
  const onSubmitClick = handleSubmit(onEditAdvertSubmit);
  return (
    <FormProvider {...EditAdvertForm}>
      <form onSubmit={onSubmitClick} className="advert-form">
        <div className="container">
          <div className="advert-form__fields">
            <EditAdvertRouter
              {...{
                onEditAdvertSubmit,
                category,
                ...advertData,
              }}
            />
          </div>
        </div>
      </form>
    </FormProvider>
  );
};

export default EditAdvertForm;
