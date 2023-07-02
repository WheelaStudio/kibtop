import { useJsApiLoader } from "@react-google-maps/api";
import { useRouter } from "next/router";
import { useState } from "react";
import { useMapContext } from "../../../../../locales/hooks/useMapContext";
import AddressField from "./AddressField";

const AddressFieldContainer = ({ address, city, geocode }) => {
  const { isLoaded } = useMapContext();

  return (
    <AddressField
      address={address}
      city={city}
      geocode={geocode}
      isLoaded={isLoaded}
    />
  );
};

export default AddressFieldContainer;
