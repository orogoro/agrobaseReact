import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  fetchProductCatalog,
  // fetchProductItem,
  fetchWeedCatalog,
  fetchWeedItems,
  fetchDiseasesCatalog,
  fetchDiseasesProducts,
  fetchInsectsCatalog,
  fetchInsectsProducts,
  fetchCatalog,
  fetchCulturesRequest,
  fetchActiveMaterialsRequest,
  fetchManufacturersRequest,
  fetchCategoryRequest,
} from './catalogOperations';

import { changeLanguage, colectonProductItem } from './catalogActions';

const initialState = {
  data: [],
  item: null,
};

const mainReducer = createReducer(initialState, {
  [fetchInsectsCatalog.fulfilled]: (state, { payload }) => {
    state.data = [...payload?.items];
  },
  [fetchInsectsProducts.fulfilled]: (state, { payload }) => {
    state.item = payload;
  },
  [fetchWeedCatalog.fulfilled]: (state, { payload }) => {
    state.data = [...payload?.items];
  },
  [fetchWeedItems.fulfilled]: (state, { payload }) => {
    state.item = payload;
  },
  [fetchDiseasesCatalog.fulfilled]: (state, { payload }) => {
    state.data = [...payload?.items];
  },
  [fetchDiseasesProducts.fulfilled]: (state, { payload }) => {
    state.item = payload;
  },

  // [fetchProductItem.fulfilled]: (state, { payload }) => {
  //   state.item = payload?.data;
  // },

  [colectonProductItem]: (state, { payload }) => {
    state.item = payload;
  },
});

const colectionsItemReducer = createReducer([], {
  [fetchProductCatalog.fulfilled]: (_, { payload }) => {
    return [...payload?.items];
  },
});

const catalogCountryReducer = createReducer([], {
  [fetchCatalog.fulfilled]: (_, { payload }) => {
    return [...payload];
  },
});

const initialStateLeng = {
  leng: 'united-kingdom',
  id: null,
};

const languageReducer = createReducer(initialStateLeng, {
  [changeLanguage]: (_, { payload }) => {
    const newArray = {
      leng: payload?.slug,
      id: payload?.id,
    };
    // state.id = payload?.id;
    // state.leng = payload?.slug;

    return newArray;
  },
});

const initialStatecategory = {
  activeMaterial: [],
  manufacturer: [],
  category: [],
  cultures: [],
};

const categoryReducer = createReducer(initialStatecategory, {
  [fetchActiveMaterialsRequest.fulfilled]: (state, { payload }) => {
    state.activeMaterial = [...payload?.items];
  },
  [fetchManufacturersRequest.fulfilled]: (state, { payload }) => {
    state.manufacturer = [...payload?.items];
  },
  [fetchCategoryRequest.fulfilled]: (state, { payload }) => {
    state.category = [...payload?.items];
  },
  [fetchCulturesRequest.fulfilled]: (state, { payload }) => {
    state.cultures = [...payload?.items];
  },
});

const isLoading = createReducer(false, {
  [fetchWeedItems.pending]: () => true,
  [fetchWeedItems.fulfilled]: () => false,
  [fetchWeedItems.rejected]: () => false,

  [fetchInsectsProducts.pending]: () => true,
  [fetchInsectsProducts.fulfilled]: () => false,
  [fetchInsectsProducts.rejected]: () => false,

  [fetchDiseasesProducts.pending]: () => true,
  [fetchDiseasesProducts.fulfilled]: () => false,
  [fetchDiseasesProducts.rejected]: () => false,

  [fetchProductCatalog.pending]: () => true,
  [fetchProductCatalog.fulfilled]: () => false,
  [fetchProductCatalog.rejected]: () => false,

  [fetchDiseasesCatalog.pending]: () => true,
  [fetchDiseasesCatalog.fulfilled]: () => false,
  [fetchDiseasesCatalog.rejected]: () => false,

  [fetchWeedCatalog.pending]: () => true,
  [fetchWeedCatalog.fulfilled]: () => false,
  [fetchWeedCatalog.rejected]: () => false,

  [fetchInsectsCatalog.pending]: () => true,
  [fetchInsectsCatalog.fulfilled]: () => false,
  [fetchInsectsCatalog.rejected]: () => false,
});

const catalogReducer = combineReducers({
  mainReducer,
  colectionsItemReducer,
  languageReducer,
  categoryReducer,
  isLoading,
  catalogCountryReducer,
});

export { catalogReducer };
