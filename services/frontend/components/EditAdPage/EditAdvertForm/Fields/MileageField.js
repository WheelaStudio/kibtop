import { useFormContext } from "react-hook-form";
import { useLanguage } from "../../../../locales/hooks/useLanguage";
import Text from "../../../Elementes/Text/Text";
import { useEffect } from "react";

const MileageField = ({ defaultValue }) => {
  const { t } = useLanguage();
  const { register, formState, getFieldState, trigger } = useFormContext();
  const { error, isTouched } = getFieldState("mileage", formState);

  useEffect(() => {
    const input = document.querySelector('input[name="mileage"]');
    const onFocusOut = () => {
      trigger("mileage");
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
          {...register("mileage", {
            required: "field is required",
            pattern: {
              value: /^[0-9]{1}\d*$/,
              message: "invalid format",
            },
          })}
          defaultValue={defaultValue}
          type="text"
          placeholder={t("Mileage in kilometers")}
          className={
            "empty-field empty-field--full-changed" +
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

export default MileageField;
