import React, { useState, useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { useLanguage } from "../../../../locales/hooks/useLanguage";

const DescriptionInput = ({ placeholderName, defaultValue }) => {
  const { t } = useLanguage();
  const { register, getFieldState, formState, trigger } = useFormContext();

  const { error, isTouched } = getFieldState("description", formState);
  const [textareaheight, setTextareaheight] = useState(196);

  function handleChange(event) {
    console.log(event.target.scrollHeight);

    if (event.target.scrollHeight > textareaheight)
      setTextareaheight(event.target.scrollHeight);
  }

  useEffect(() => {
    const input = document.querySelector('textarea[name="description"]');
    const onFocusOut = () => {
      trigger("description");
    };

    if (input) {
      input.addEventListener("focusout", onFocusOut);
    }

    return () => {
      if (input) {
        input.removeEventListener("focusout", onFocusOut);
      }
    };
  }, []);

  return (
    <>
      <div
        className={`advert-form__text-input ${
          isTouched && error ? "has-error" : ""
        }`}>
        <textarea
          style={{ height: textareaheight }}
          {...register("description", {
            required: t("field is required"),
            maxLength: {
              value: 255,
              message: t("max length is 255 symbols"),
            },
            onChange: handleChange,
          })}
          defaultValue={defaultValue}
          placeholder={t(`Describe the ${placeholderName} in detail`)}
          className={`desc-field ${
            isTouched && error ? "field--error_desc" : ""
          }`}></textarea>
        {isTouched && !!error && (
          <>
            <p className="warn warn--absolute">{error.message}</p>
          </>
        )}
      </div>
    </>
  );
};

export default DescriptionInput;
