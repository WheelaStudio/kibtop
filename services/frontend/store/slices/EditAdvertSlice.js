import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { AdvertApi } from "../../services/AdvertApi";
import { EditAdvertApi } from "../../services/EditAdvertApi";
import { useSelector } from "react-redux";

const initialState = {
  title: null,
  description: null,
  categoryName: null,
  subCategoryName: null,
  condition: null,
  brand: null,
  mileage: null,
  year: null,
  rooms: null,
  employment: null,
  workType: null,
  date: null,
  address: null,
  city: null,
  geocode: null,
  img: null,
  uploads: [],
  userId: null,
  advertId: null,
  cost: null,
  square: null,
  isMonth: null,
  currency: null,
};

const editAdvertSlice = createSlice({
  name: "editadvert",
  initialState,
  reducers: {
    setAdvertData(state, { payload }) {
      if (!payload) return;
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
        advertId,
        cost,
        square,
        isMonth,
        currency,
      } = payload;

      state.title = title || null;
      state.description = description || null;
      state.categoryName = categoryName || null;
      state.subCategoryName = subCategoryName || null;
      state.condition = condition || null;
      state.brand = brand || null;
      state.mileage = mileage || null;
      state.year = year || null;
      state.rooms = rooms || null;
      state.employment = employment || null;
      state.workType = workType || null;
      state.date = date || null;
      state.address = address || null;
      state.city = city || null;
      state.geocode = geocode || null;
      state.img = img || null;
      state.uploads = uploads || [];
      state.userId = userId || null;
      state.advertId = advertId || null;
      state.cost = cost || null;
      state.square = square || null;
      state.isMonth = isMonth || null;
      state.currency = currency || null;
    },
  },
});

export const { setAdvertData, setAdvertEditingActivated } =
  editAdvertSlice.actions;

export const setEditAdvertDataThunk =
  (advertId, category, lang) => async dispatch => {
    const advert = await AdvertApi.getEditAdvertDatails(
      advertId,
      category,
      lang
    );

    if (!advert) return;
    dispatch(setAdvertData({ ...advert }));
    return advert;
  };
export const editAdvertThunk =
  (data, category, lang, advertId) => async dispatch => {
    await EditAdvertApi.editAdvert(data, category, advertId, lang);
  };

// export const setAdvertDataThunk =
//   (advertId, category, lang) => async dispatch => {
//     const advert = await AdvertApi.getAdvertDatails(advertId, category, lang);
//     if (!advert) return;
//     dispatch(setAdvertData({ ...advert }));
//   };

// export const editAdvertThunk =
//   (data, category, advertId, lang, subCategoryName) => async dispatch => {
//     await EditAdvertApi.editAdvert(
//       data,
//       category,
//       advertId,
//       lang,
//       subCategoryName
//     );
//     await EditAdvertApi.deleteLastAdvert(category, advertId, lang);
//   };

export const EditAdvertReducer = editAdvertSlice.reducer;
