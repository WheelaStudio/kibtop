import React from "react";
import Text from "../../../../Elementes/Text/Text";
import { useLanguage } from "../../../../../locales/hooks/useLanguage";

const NextButton = ({ isDisabled, onClick }) => {
  const { t } = useLanguage();

  return (
    <>
      <div className="next-button-container">
        {isDisabled && (
          <p
            style={{
              paddingTop: "1em",
              color: "red",
              fontSize: "14px",
              marginTop: "5px",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "9px",
              color: "#FF5A5A",
            }}>
            {t("* Fill all the fields")}
          </p>
        )}
        <button
          onClick={onClick}
          disabled={isDisabled}
          className={`reg-btn next-btn ${isDisabled ? "disabled" : ""}`}>
          <Text content="Next" />
        </button>
      </div>
    </>
  );
};

export default NextButton;
