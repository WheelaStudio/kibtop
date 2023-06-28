import { useJsApiLoader } from "@react-google-maps/api";
import { useRouter } from "next/router";
import { useState } from "react";
import { useMapContext } from "../../../../../locales/hooks/useMapContext";
import AddressField from "./AddressField";

const AddressFieldContainer = ({ defaultValues }) => {
  const { isLoaded } = useMapContext();

  return <AddressField isLoaded={isLoaded} {...defaultValues} />;
};

export default AddressFieldContainer;
