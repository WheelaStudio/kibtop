import { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import { useCurrency } from "../../../../locales/hooks/useCurrency";
import { useLanguage } from "../../../../locales/hooks/useLanguage";

const CostField = ({ placeholder = "Full amount", value }) => {
  const { t } = useLanguage();
  const { register, setValue, watch, formState, getFieldState, trigger } =
    useFormContext();
  const { error, isTouched } = getFieldState("cost", formState);

  const { currency } = useCurrency();

  useEffect(() => {
    setValue("currency", currency, {
      shouldTouch: true,
      shouldValidate: true,
    });
  }, [currency]);

  const currencyList = ["$", "€", "₤"];
  const [offset, setOffset] = useState(currencyList.indexOf(currency));
  const offsetNext = offset === currencyList.length - 1 ? 0 : offset + 1;

  const onCurrencyClick = () => {
    setValue("currency", currencyList[offsetNext]);
    setOffset(offsetNext);
  };

  const data = watch();

  useEffect(() => {
    const onFocusOut = () => {
      trigger("cost");
    };

    const inputElement = document.getElementById("cost-input");
    inputElement.addEventListener("focusout", onFocusOut);

    return () => {
      inputElement.removeEventListener("focusout", onFocusOut);
    };
  }, [trigger]);

  return (
    <>
      <div className="advert-form__text-input">
        <input
          {...register("cost", {
            required: {
              value: true,
              message: t("field is required"),
            },
            pattern: {
              value: /^[0-9]\d{0,8}$/,
              message: t("invalid format"),
            },
          })}
          type="text"
          id="cost-input"
          placeholder={t(placeholder)}
          className={
            "empty-field empty-field--small" +
            (!!error && isTouched ? " field--error" : "")
          }
        />

        <a
          style={{ display: "flex", flexWrap: "nowrap" }}
          onClick={onCurrencyClick}
          className="currency-input">
          {data.currency} {value ? <p>/month</p> : null}
        </a>

        {isTouched && !!error && (
          <p className="warn warn--absolute">{error.message}</p>
        )}
      </div>
    </>
  );
};

export default CostField;
