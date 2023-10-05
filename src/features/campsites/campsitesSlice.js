import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { baseUrl } from '../../app/shared/baseUrl';
import { mapImagesURL } from '../../utils/mapImageURL';

//import { CAMPSITES } from '../../app/shared/CAMPSITES';

export const fetchCampsites = createAsyncThunk(
  'campsite/fetchCampsites',
  async () => {
    const response = await fetch( baseUrl + 'campsites' );
    if ( !response.ok ) {
      return Promise.reject( `Unable to fetch, Status: ${response.status}` );
    }
    const data = await response.json();
    return data;
  }
);

const initialState = { campsitesArray: [], isLoading:true, errMsg:'' };

const campsitesSlice = createSlice({
  name: 'campsites',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchCampsites.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchCampsites.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.errMsg = '';
      state.campsitesArray = mapImagesURL(action.payload);
    },
    [fetchCampsites.rejected]: ( state, action ) => {
      state.isLoading = false;
      state.errMsg = action.error ? action.error.message : 'Fetch Failed :: Unable to fetch campsites';
    }
  }
});

export const campsitesReducer = campsitesSlice.reducer;

export const selectAllCampsites = (state) => {
  return state.campsites.campsitesArray;
};

export const selectCampsiteById = (campsiteId) =>(state)=> {
  return state.campsites.campsitesArray.find(
    (campsite) => campsite.id === parseInt(campsiteId)
  );
};

export const selectFeaturedCampsite = (state) => {
  return state.campsites.campsitesArray.find((campsite) => campsite.featured);
};
