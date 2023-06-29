import { useSelector } from "react-redux";
import { useLanguage } from "../../../../../../locales/hooks/useLanguage";
import AddressSelect from "./AddressSelect";

const AddressSelectContainer = ({ data, setAddressChoice }) => {
  const { t } = useLanguage();

  const cities = data;

  return (
    <div
      style={{
        backgroundColor: "white",
        zIndex: "10",
      }}>
      <p className="warn">{t("choose from the list below")}</p>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <AddressSelect {...{ cities, setAddressChoice }} />
      </div>
    </div>
  );
};

export default AddressSelectContainer;
