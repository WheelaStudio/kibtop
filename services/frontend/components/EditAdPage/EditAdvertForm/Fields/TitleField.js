import { useFormContext } from "react-hook-form";
import { useLanguage } from "../../../../locales/hooks/useLanguage";
import { useEffect } from "react";

const TitleField = ({ defaultValue }) => {
  const { t } = useLanguage();
  const { register, formState, getFieldState, trigger } = useFormContext();
  const { error, isTouched } = getFieldState("title", formState);

  useEffect(() => {
    const onFocusOut = () => {
      trigger("title");
    };

    const inputElement = document.getElementById("title-input");
    inputElement.addEventListener("focusout", onFocusOut);

    return () => {
      inputElement.removeEventListener("focusout", onFocusOut);
    };
  }, [trigger]);

  return (
    <>
      <div className="advert-form__text-input">
        <input
          {...register("title", {
            required: {
              value: true,
              message: t("field is required"),
            },
            pattern: { value: /^.{0,24}$/, message: t("invalid format") },
          })}
          type="text"
          id="title-input"
          placeholder={t("Only title")}
          defaultValue={defaultValue}
          className={
            "empty-field empty-field--full" +
            (!!error && isTouched ? " field--error" : "")
          }
        />

        {isTouched && !!error && (
          <p className="warn warn--absolute">{error.message}</p>
        )}
      </div>
    </>
  );
};

export default TitleField;
