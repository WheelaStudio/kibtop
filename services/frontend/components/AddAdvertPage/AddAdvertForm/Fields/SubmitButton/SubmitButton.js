import React from "react";
import Text from "../../../../Elementes/Text/Text";
import { ColorRing } from "react-loader-spinner";

const SubmitButton = ({
  onSubmitClick,
  isDisabled,
  isLoading,
  isPhoneNull,
  openAddPhoneModal,
}) => {
  return (
    <>
      {isPhoneNull ? (
        <button
          disabled={isDisabled || isLoading}
          onClick={openAddPhoneModal}
          className="reg-btn reg-btn--add reg-btn--grey">
          <Text content="Publish without promotion" />
        </button>
      ) : (
        <button
          onClick={onSubmitClick}
          disabled={isDisabled || isLoading}
          className="reg-btn reg-btn--add reg-btn--grey">
          {isLoading ? (
            <Text content="Publishing" />
          ) : (
            <Text content="Publish without promotion" />
          )}
        </button>
      )}

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
        </div>
      )}
    </>
  );
};

export default SubmitButton;
