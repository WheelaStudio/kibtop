import Link from "next/link";
import { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useLanguage } from "../../../locales/hooks/useLanguage";
import { seriealizeErrors } from "../../../services/tools/ApiFormsSerializers";
import Text from "../../Elementes/Text/Text";
import AltReg from "../../RegistrationPage/RegSteps/AltReg/AltReg";
import EmailField from "../../RegistrationPage/RegSteps/DesktopRegRouter/DeskRegForm/Fields/EmailField";

const RecoveryForm = ({ isLoading, onRecoverySubmit, isUserFail }) => {
  const { t } = useLanguage();
  const RecoveryForm = useForm({ mode: "onChange" });
  const {
    handleSubmit,
    setError,
    formState: { errors, isValid, touchedFields },
  } = RecoveryForm;

  const [emailNotFound, setEmailNotFound] = useState(false);

  const { name, message } = seriealizeErrors(errors);

  useEffect(() => {
    if (isUserFail) {
      setEmailNotFound(true);
    } else {
      setEmailNotFound(false);
    }
  }, [isUserFail]);

  const handleFormSubmit = data => {
    if (emailNotFound) {
      setError("email", {
        type: "submit",
        message: t("Email not found"),
      });
      return;
    }

    onRecoverySubmit(data);
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmit(handleFormSubmit)}>
        <h1 className="reg-title reg-title--rec">
          <Text content="Password recovery" />
        </h1>
        <div className="form__fields form__fields--rec">
          <FormProvider {...RecoveryForm}>
            <EmailField />
            {emailNotFound && (
              <p className="warn warn--top">{t("почта не найдена")}</p>
            )}
          </FormProvider>
        </div>

        <div className="submit">
          <button
            disabled={!isValid && isLoading}
            className="reg-btn reg-btn--confirm">
            <Text content="Submit code" />
          </button>

          {!isValid && name in touchedFields && (
            <p className="warn warn--bottom">{message}</p>
          )}
        </div>

        <div className="form__bottom">
          <AltReg text="Login with Google or Facebook" />

          <p className="to-login">
            <Text content="Don't have an account?" />{" "}
            <Link className="bigger" href="/auth/registration">
              <Text content="Sign up" />
            </Link>
          </p>
        </div>
      </form>
    </>
  );
};

export default RecoveryForm;
