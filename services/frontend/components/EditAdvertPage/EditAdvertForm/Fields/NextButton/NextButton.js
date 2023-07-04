import React from "react";
import Text from "../../../../Elementes/Text/Text";
import { ColorRing } from "react-loader-spinner";
import { useLanguage } from "../../../../../locales/hooks/useLanguage";
import { useRouter } from "next/router";

const NextButton = ({ isLoading, isDisabled, onClick }) => {
  const { t } = useLanguage();
  const { push } = useRouter();

  const handleStopPublishing = () => {
    push(`/profile`);
  };
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
            {t("* Fill in all the fields")}
          </p>
        )}
        <button
          onClick={onClick}
          disabled={isDisabled}
          // className={`reg-btn next-btn ${isDisabled ? "disabled" : ""}`}
          className="reg-btn reg-btn--add reg-btn--grey">
          <Text content="Edit" />
        </button>

        {isLoading && (
          <div
            className="loader-overlay"
            style={{
              position: "fixed",
              top: "0",
              left: "0",
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.7)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 3,
            }}>
            <div className="loader" />
            <ColorRing
              visible={true}
              height="80"
              width="80"
              ariaLabel="blocks-loading"
              wrapperStyle={{}}
              wrapperClass="blocks-wrapper"
              colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
            />
            {isLoading && (
              <>
                <button
                  onClick={handleStopPublishing}
                  className="reg-btn"
                  style={{
                    top: "35em",
                    position: "fixed",
                    backgroundColor: "red",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}>
                  {t(`Cancel`)}
                </button>
              </>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default NextButton;
