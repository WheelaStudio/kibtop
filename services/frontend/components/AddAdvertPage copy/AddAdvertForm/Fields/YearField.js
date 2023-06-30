import { useFormContext } from "react-hook-form";
import { useLanguage } from "../../../../locales/hooks/useLanguage";
import Text from "../../../Elementes/Text/Text";
import { useEffect } from "react";

const YearField = () => {
  const { t } = useLanguage();
  const { register, formState, getFieldState, trigger } = useFormContext();
  const { error, isTouched } = getFieldState("year", formState);

  useEffect(() => {
    const input = document.querySelector('input[name="year"]');
    const onFocusOut = () => {
      trigger("year");
    };
    input.addEventListener("focusout", onFocusOut);

    return () => {
      input.removeEventListener("focusout", onFocusOut);
    };
  }, [trigger]);

  return (
    <>
      <div className="advert-form__text-input">
        <input
          {...register("year", {
            required: "field is required",
            pattern: {
              value: /^(19|20)\d{2}$/,
              message: "invalid format",
            },
          })}
          type="text"
          placeholder={t("Year of release")}
          className={
            "empty-field empty-field--full-year-changed" +
            (!!error && isTouched ? " field--error" : "")
          }
        />

        {isTouched && !!error && !!error.message && (
          <p className="warn warn--absolute">
            <Text content={error.message} />
          </p>
        )}
      </div>
    </>
  );
};

export default YearField;
