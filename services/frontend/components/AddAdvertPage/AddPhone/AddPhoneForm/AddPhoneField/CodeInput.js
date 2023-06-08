// import { CountrySelect } from "react-phone-number-input";
// import { useBoolState } from "../../../../AppHooks/useBoolState";
// import style from "./add_tel.module.scss";
// import Codes from "./Codes";

// const CodeInput = ({ code, setCode, nextInput }) => {
//   const [isOpen, setOpen] = useBoolState();

//   return (
//     <>
//       <div className={style.wrapper}>
//         <Codes
//           search={code}
//           setValue={setCode}
//           {...{
//             isOpen,
//             setOpen,
//             nextInput: () => nextInput.current.focus(),
//           }}
//         />

//         <div className={style.code}>
//           <CountrySelect
//             value={code}
//             onChange={setCode}
//             onBlur={() => setOpen(false)}
//             onFocus={() => setOpen(true)}
//           />
//         </div>
//       </div>
//     </>
//   );
// };

// export default CodeInput;
