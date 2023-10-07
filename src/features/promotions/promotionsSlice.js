import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { baseUrl } from '../../app/shared/baseUrl';
import { mapImagesURL } from '../../utils/mapImageURL';

export const fetchPromotions = createAsyncThunk(
  'partners/fetchPromotions',
  async () => {
    const response = await fetch(baseUrl + 'promotions');
    if (!response.ok) {
      return Promise.reject(`Unable to fetch, Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  }
);

const initialState = {
  promotionsArray: [],
  isLoading: true,
  errMsg: ''
};

const promotionsSlice = createSlice({
  name: 'promotions',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchPromotions.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchPromotions.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.errMsg = '';
      state.promotionsArray = mapImagesURL(action.payload);
    },
    [fetchPromotions.rejected]: (state, action) => {
      state.isLoading = false;
      state.errMsg = action.error
        ? action.error.message
        : 'Fetch Failed :: Unable to fetch promotions';
    }
  }
});

export const promotionsReducer = promotionsSlice.reducer;

export const selectFeaturedPromotion = (state) => {
  return {
    featuredItem: state.promotions.promotionsArray.find(
      (promotion) => promotion.featured
    ),
    isLoading: state.promotions.isLoading,
    errMsg: state.promotions.errMsg
  };
};
