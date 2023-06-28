import React, { useEffect, useState } from "react";
import { instance } from "../../services/Instance";
import Header from "../Header/Header";
import { useRouter } from "next/router";
import HeaderService from "../Header/HeaderService/HeaderService";
import SettingsNavForEdit from "../SettingsPage/SettingsNavForEdit";
import EditAdvertFormContainer from "./EditAdvertForm/Steps/EditStep/EditAdvertRouting/EditAdvertFormContainer";
import { useLanguage } from "../../locales/hooks/useLanguage";
import { useDispatch, useSelector } from "react-redux";
import { setAdvertDataThunk } from "../../store/slices/AdvertSlice";

const EditAdvertPage = () => {
  const { t } = useLanguage();
  const dispatch = useDispatch();
  const { query, push } = useRouter();
  const category = query.category;
  const advertId = query.advertId;
  // console.log("query: ", query);

  //test

  const allPaths = [
    "avto",
    "children",
    "electronics",
    "fashion",
    "house_garden",
    "realty",
    "services",
    "work",
    "free",
  ];

  const {
    title,
    description,
    categoryName,
    subCategoryName,
    condition,
    brand,
    mileage,
    year,
    rooms,
    employment,
    workType,
    date,
    address,
    city,
    geocode,
    img,
    uploads,
    userId,
    // advertId,
    cost,
    square,
    isMonth,
    currency,
    isLoading,
    isActivated,
  } = useSelector(state => state.advert);

  useEffect(() => {
    const fetchAdvertData = async () => {
      if (
        title ||
        description ||
        categoryName ||
        subCategoryName ||
        condition ||
        brand ||
        mileage ||
        year ||
        rooms ||
        employment ||
        workType ||
        date ||
        address ||
        city ||
        geocode ||
        img ||
        uploads ||
        userId ||
        advertId ||
        cost ||
        square ||
        isMonth ||
        currency
      )
        dispatch(setAdvertDataThunk());
    };

    fetchAdvertData();
  }, [
    title,
    description,
    categoryName,
    subCategoryName,
    condition,
    brand,
    mileage,
    year,
    rooms,
    employment,
    workType,
    date,
    address,
    city,
    geocode,
    img,
    uploads,
    userId,
    advertId,
    cost,
    square,
    isMonth,
    currency,
  ]);
  const advertData = {
    title,
    description,
    categoryName,
    subCategoryName,
    condition,
    brand,
    mileage,
    year,
    rooms,
    employment,
    workType,
    date,
    address,
    city,
    geocode,
    img,
    uploads,
    userId,
    advertId,
    cost,
    square,
    isMonth,
    currency,
  };

  return (
    <>
      <Header />
      <HeaderService />
      <main className="main">
        <SettingsNavForEdit title={t("Edit Advert")} />
        <div className="container">
          {!allPaths.some(categoryPath => categoryPath === category) ? (
            <></>
          ) : (
            <>
              {
                <EditAdvertFormContainer
                  {...{ category, advertId, advertData }}
                />
              }
            </>
          )}
        </div>
      </main>
    </>
  );
};

export default EditAdvertPage;
