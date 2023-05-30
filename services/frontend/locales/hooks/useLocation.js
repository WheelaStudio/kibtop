import React, { useContext, useEffect, useState } from "react";
import { LocationContext } from "../LocationContext";

const useLocation = () => {
  const { location, changeLocation } = useContext(LocationContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!location) {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          async position => {
            const { latitude, longitude } = position.coords;

            try {
              const response = await fetch(
                `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`
              );
              const data = await response.json();

              const cityName = data?.address?.city;

              changeLocation({ city: cityName, cityId: null });
              setLoading(false);
            } catch (error) {
              console.error("Error getting location:", error);
              setLoading(false);
            }
          },
          error => {
            console.error("Error getting location:", error.message);
            setLoading(false);
          }
        );
      } else {
        console.error("Geolocation is not supported by this browser.");
        setLoading(false);
      }
    } else {
      setLoading(false);
    }
  }, [location, changeLocation]);

  return { location, changeLocation, loading };
};

export default useLocation;
