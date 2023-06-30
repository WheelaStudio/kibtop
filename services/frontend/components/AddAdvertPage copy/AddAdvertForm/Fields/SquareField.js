import { useFormContext } from "react-hook-form";
import { useLanguage } from "../../../../locales/hooks/useLanguage";
import Text from "../../../Elementes/Text/Text";
import { useEffect } from "react";

const SquareField = () => {
  const { t } = useLanguage();
  const { register, formState, getFieldState, trigger } = useFormContext();
  const { error, isTouched } = getFieldState("square", formState);

  useEffect(() => {
    const input = document.querySelector('input[name="square"]');
    const onFocusOut = () => {
      trigger("square");
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
          {...register("square", {
            required: t("field is required"),
            pattern: {
              value: /^[0-9]+$/,
              message: t("invalid format"),
            },
          })}
          type="text"
          placeholder={t("Square")}
          className={
            "empty-field empty-field--small" +
            (!!error && isTouched ? " field--error" : "")
          }
        />

        <p className="currency-input currency-input--black">
          <Text content="m²" />
        </p>
        {isTouched && !!error && (
          <p className="warn warn--absolute">{error.message}</p>
        )}
      </div>
    </>
  );
};

export default SquareField;
