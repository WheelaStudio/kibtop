// import { useState } from "react";
// import PhoneInput from "react-phone-input-2";
// import ReactInputMask from "react-input-mask";
// import "react-phone-input-2/lib/style.css";

// import ClearButton from "../../../../RegistrationPage/RegSteps/DesktopRegRouter/DeskRegForm/Fields/ClearButton";
// import CodeInput from "./CodeInput";
// import style from "./add_tel.module.scss";
// import { useRef } from "react";
// import Codes from "./Codes";
// import { useBoolState } from "../../../../AppHooks/useBoolState";
// import { useFormContext } from "react-hook-form";

// const AddPhoneField = ({ setValue }) => {
//   // Refs
//   const NumberInput = useRef(null);
//   const CodeInput = useRef(null);

//   // phone Number
//   const [number, setNumber] = useState("");
//   const setValueNumber = value => {
//     setValue("phoneNumber", value);
//     setNumber(value);
//   };
//   const onNumberChange = e => {
//     const input = e.target.value;
//     if (input === "(___) ___ __-__") CodeInput.current.focus();
//     setValueNumber(input);
//   };
//   // phone Code
//   const [code, setCode] = useState("");
//   const setValueCode = value => {
//     setValue("phoneCode", value);
//     setCode(value);
//   };
//   const onCodeChange = e => {
//     const input = e.currentTarget.value;
//     if (input.length > 3) {
//       setOpen(false);
//       NumberInput.current.focus();
//       return;
//     }
//     if (!isNaN(+input)) {
//       setValueCode(input);
//     }
//     setOpen(!!input);
//   };

//   const [isOpen, setOpen] = useBoolState();

//   return (
//     <>
//       <div style={{ overflow: "initial" }}>
//         <div>
//           <PhoneInput
//             style={{
//               marginBottom: "20px",
//               alignItems: "center",
//             }}
//             onChange={onNumberChange}
//             value={number}
//             ref={NumberInput}
//             search={code}
//             setValue={setValueCode}
//             country={"tr"}
//             onBlur={() => setOpen(false)}
//             onFocus={() => setOpen(true)}
//           />
//         </div>
//       </div>
//     </>
//   );
// };

// export default AddPhoneField;

import { useState, useRef } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

import { useBoolState } from "../../../../AppHooks/useBoolState";

const AddPhoneField = ({ setValue }) => {
  // Refs
  const numberInputRef = useRef(null);
  const codeInputRef = useRef(null);

  // phone Number
  const [number, setNumber] = useState("");
  const setValueNumber = value => {
    setValue("phoneNumber", value);
    setNumber(value);
  };
  const onNumberChange = e => {
    console.log(e);
    const input = e;
    if (input === "(___) ___ __-__") codeInputRef.current.focus();
    setValueNumber(input);
  };

  const [isOpen, setOpen] = useBoolState();

  return (
    <>
      <div style={{ overflow: "initial" }}>
        <div>
          <PhoneInput
            style={{
              marginBottom: "20px",
              alignItems: "center",
            }}
            onChange={onNumberChange}
            value={number}
            ref={numberInputRef}
            setValue={setValueNumber}
            country={"tr"}
            onBlur={() => setOpen(false)}
            onFocus={() => setOpen(true)}
          />
        </div>
      </div>
    </>
  );
};

export default AddPhoneField;
