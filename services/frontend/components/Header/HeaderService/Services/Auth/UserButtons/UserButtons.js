import React, { useContext } from "react";
import Link from "next/link";
import { ChatContext } from "../../../../../../services/ChatWebSocket/ChatWSProvider";

const UserButtons = ({ isAuthed, checkedVal }) => {
  const { newMessageCount } = useContext(ChatContext);
  const selectedStyle = path =>
    !checkedVal
      ? ""
      : checkedVal === path
      ? " user-btns__item--selected"
      : " user-btns__item--close";

  return (
    <>
      {isAuthed && (
        <div className="user-btns">
          <Link
            href={"/favorites"}
            className={"user-btns__item" + selectedStyle("favorites")}>
            <svg fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_200_618)">
                <path d="M21.8752 1.14624C20.4676 1.16813 19.0908 1.56106 17.8836 2.28533C16.6765 3.0096 15.6819 4.03958 15.0002 5.27124C14.3185 4.03958 13.3239 3.0096 12.1167 2.28533C10.9096 1.56106 9.53275 1.16813 8.12519 1.14624C5.88137 1.24373 3.76732 2.22531 2.24492 3.87653C0.722516 5.52775 -0.0844962 7.7144 0.000192004 9.95874C0.000192004 18.4275 13.6952 28.2087 14.2777 28.6237L15.0002 29.135L15.7227 28.6237C16.3052 28.2112 30.0002 18.4275 30.0002 9.95874C30.0849 7.7144 29.2779 5.52775 27.7555 3.87653C26.2331 2.22531 24.119 1.24373 21.8752 1.14624Z" />
              </g>
              <defs>
                <clipPath id="clip0_200_618">
                  <rect width="30" height="30" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </Link>
          <Link
            style={{
              display: "flex",
              alignItems: "center",
              position: "relative",
            }}
            href={"/chat"}
            className={"user-btns__item" + selectedStyle("chat")}>
            {newMessageCount > 0 && (
              <span
                style={{
                  position: "absolute",
                  top: "-10px" /* Adjust the value to position the icon */,
                  right: "-10px",
                  width: "20px",
                  height: "20px",
                  background: "red",
                  color: "#ffffff",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "50%",
                }}>
                {newMessageCount}
              </span>
            )}
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <g
                style={{
                  position: "sticky",
                  zIndex: 0,
                }}
                clipPath="url(#clip0_200_620)">
                <path d="M29.9425 6.92749L19.42 17.45C18.2467 18.6203 16.6572 19.2775 15 19.2775C13.3428 19.2775 11.7533 18.6203 10.58 17.45L0.0575 6.92749C0.04 7.12499 0 7.30374 0 7.49999V22.5C0.00198482 24.157 0.661102 25.7455 1.83277 26.9172C3.00445 28.0889 4.59301 28.748 6.25 28.75H23.75C25.407 28.748 26.9956 28.0889 28.1672 26.9172C29.3389 25.7455 29.998 24.157 30 22.5V7.49999C30 7.30374 29.96 7.12499 29.9425 6.92749Z" />
                <path d="M17.6527 15.6825L29.0702 4.26375C28.5171 3.34665 27.737 2.58755 26.8051 2.05966C25.8733 1.53178 24.8212 1.25293 23.7502 1.25H6.25018C5.1792 1.25293 4.12705 1.53178 3.19521 2.05966C2.26337 2.58755 1.48327 3.34665 0.930176 4.26375L12.3477 15.6825C13.0521 16.3841 14.0059 16.7781 15.0002 16.7781C15.9944 16.7781 16.9482 16.3841 17.6527 15.6825Z" />
              </g>
              <defs>
                <clipPath id="clip0_200_620">
                  <rect width="30" height="30" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </Link>
          <Link
            href={"/profile"}
            className={
              "user-btns__item user-btns__item--profile" +
              selectedStyle("profile")
            }>
            <svg
              viewBox="0 0 40 37"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0 20C0 8.95431 8.95431 0 20 0C31.0457 0 40 8.95431 40 20C40 26.6584 36.7462 32.5569 31.742 36.1921C30.5971 30.7553 25.776 26.6731 20 26.6667C14.224 26.6731 9.40296 30.7553 8.25798 36.192C3.25375 32.5568 0 26.6584 0 20ZM20 24C24.4183 24 28 20.4183 28 16C28 11.5817 24.4183 8 20 8C15.5817 8 12 11.5817 12 16C12 20.4183 15.5817 24 20 24Z"
              />
            </svg>
          </Link>
        </div>
      )}

      {!isAuthed && (
        <div className="user-btns">
          <Link href={"/favorites"} className="user-btns__item">
            <svg fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_200_618)">
                <path
                  d="M21.8752 1.14624C20.4676 1.16813 19.0908 1.56106 17.8836 2.28533C16.6765 3.0096 15.6819 4.03958 15.0002 5.27124C14.3185 4.03958 13.3239 3.0096 12.1167 2.28533C10.9096 1.56106 9.53275 1.16813 8.12519 1.14624C5.88137 1.24373 3.76732 2.22531 2.24492 3.87653C0.722516 5.52775 -0.0844962 7.7144 0.000192004 9.95874C0.000192004 18.4275 13.6952 28.2087 14.2777 28.6237L15.0002 29.135L15.7227 28.6237C16.3052 28.2112 30.0002 18.4275 30.0002 9.95874C30.0849 7.7144 29.2779 5.52775 27.7555 3.87653C26.2331 2.22531 24.119 1.24373 21.8752 1.14624Z"
                  fill="#414042"
                  fillOpacity="0.4"
                />
              </g>
              <defs>
                <clipPath id="clip0_200_618">
                  <rect width="30" height="30" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </Link>
          <Link href={"/auth/registration"} className="user-btns__item">
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_200_620)">
                <path
                  d="M29.9425 6.92749L19.42 17.45C18.2467 18.6203 16.6572 19.2775 15 19.2775C13.3428 19.2775 11.7533 18.6203 10.58 17.45L0.0575 6.92749C0.04 7.12499 0 7.30374 0 7.49999V22.5C0.00198482 24.157 0.661102 25.7455 1.83277 26.9172C3.00445 28.0889 4.59301 28.748 6.25 28.75H23.75C25.407 28.748 26.9956 28.0889 28.1672 26.9172C29.3389 25.7455 29.998 24.157 30 22.5V7.49999C30 7.30374 29.96 7.12499 29.9425 6.92749Z"
                  fill="#414042"
                  fillOpacity="0.4"
                />
                <path
                  d="M17.6527 15.6825L29.0702 4.26375C28.5171 3.34665 27.737 2.58755 26.8051 2.05966C25.8733 1.53178 24.8212 1.25293 23.7502 1.25H6.25018C5.1792 1.25293 4.12705 1.53178 3.19521 2.05966C2.26337 2.58755 1.48327 3.34665 0.930176 4.26375L12.3477 15.6825C13.0521 16.3841 14.0059 16.7781 15.0002 16.7781C15.9944 16.7781 16.9482 16.3841 17.6527 15.6825Z"
                  fill="#414042"
                  fillOpacity="0.4"
                />
              </g>
              <defs>
                <clipPath id="clip0_200_620">
                  <rect width="30" height="30" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </Link>
          <Link
            href={"/auth/registration"}
            className="user-btns__item user-btns__item--profile">
            <svg
              viewBox="0 0 40 37"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0 20C0 8.95431 8.95431 0 20 0C31.0457 0 40 8.95431 40 20C40 26.6584 36.7462 32.5569 31.742 36.1921C30.5971 30.7553 25.776 26.6731 20 26.6667C14.224 26.6731 9.40296 30.7553 8.25798 36.192C3.25375 32.5568 0 26.6584 0 20ZM20 24C24.4183 24 28 20.4183 28 16C28 11.5817 24.4183 8 20 8C15.5817 8 12 11.5817 12 16C12 20.4183 15.5817 24 20 24Z"
                fill="#414042"
                fillOpacity="0.4"
              />
            </svg>
          </Link>
        </div>
      )}
    </>
  );
};

export default UserButtons;
