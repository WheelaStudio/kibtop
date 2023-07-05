import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { AdvertApi } from "../../services/AdvertApi";
import { EditAdvertApi } from "../../services/EditAdvertApi";

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

  isLoading: false,
  // isActivated: false,
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
    setEditAdvertLoading(state, { payload }) {
      state.isLoading = payload;
    },
  },
});

export const { setAdvertData, setEditAdvertLoading } = editAdvertSlice.actions;

export const editAdvertThunk =
  (data, category, advertId, lang, uploadsId) => async dispatch => {
    await EditAdvertApi.editAdvert(
      data,
      category,
      advertId,
      lang,
      uploadsId
    ).then(res => {
      const checkActivated = setInterval(async () => {
        await AdvertApi.getAdvertDatails(advertId, category, lang)
          .then(res => {
            clearInterval(checkActivated);
            dispatch(setEditAdvertLoading(true));
          })
          .catch(err => {
            console.log(err);
          });
      }, 3000);
    });
  };

export const EditAdvertReducer = editAdvertSlice.reducer;
