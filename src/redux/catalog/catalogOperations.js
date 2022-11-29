import { createAsyncThunk } from '@reduxjs/toolkit';
import { catalogAPI } from '../../API/APIcatalog';

export const fetchCatalog = createAsyncThunk(
  'catalog/fetchCatalog',
  async (_, { rejectWithValue }) => {
    try {
      const response = await catalogAPI.getCatalogRequest();
      return response.data.items;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const fetchProductCatalog = createAsyncThunk(
  'catalog/fechProduct',
  async (id, { rejectWithValue }) => {
    try {
      const response = await catalogAPI.getProductCatalogRequest(id);
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// export const fetchProductItem = createAsyncThunk(
//   'catalog/fetchProductItem',
//   async ({ language, itemName }, { rejectWithValue }) => {
//     const data = {
//       language,
//       itemName,
//     };
//     try {
//       const response = await catalogAPI.getProductItemRequest(data);
//       return response;
//     } catch (error) {
//       return rejectWithValue(error);
//     }
//   }
// );

export const fetchWeedCatalog = createAsyncThunk(
  'catalog/fetchWeed',
  async (id, { rejectWithValue }) => {
    try {
      const response = await catalogAPI.getWeedCatalogRequest(id);
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const fetchWeedItems = createAsyncThunk(
  'catalog/fetchWeedItem',
  async (id, { rejectWithValue }) => {
    try {
      const response = await catalogAPI.getWeedItemsRequest(id);
      return response.items;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const fetchDiseasesCatalog = createAsyncThunk(
  'catalog/fetchDiseases',
  async (id, { rejectWithValue }) => {
    try {
      const response = await catalogAPI.getDiseasesCatalogRequest(id);
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const fetchDiseasesProducts = createAsyncThunk(
  'catalog/fetchDiseasesProducts',
  async (id, { rejectWithValue }) => {
    try {
      const response = await catalogAPI.getDiseasesProductsRequest(id);
      return response.items;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const fetchInsectsCatalog = createAsyncThunk(
  'catalog/fetchInsects',
  async (id, { rejectWithValue }) => {
    try {
      const response = await catalogAPI.getInsectsCatalogRequest(id);
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const fetchInsectsProducts = createAsyncThunk(
  'catalog/fetchInsectsProducts',
  async (id, { rejectWithValue }) => {
    try {
      const response = await catalogAPI.getInsectsProductsRequest(id);
      return response.items;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const fetchActiveMaterialsRequest = createAsyncThunk(
  'catalog/fetchActiveMaterials',
  async (_, { rejectWithValue }) => {
    try {
      const response = await catalogAPI.getActiveMaterialsRequest();
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const fetchManufacturersRequest = createAsyncThunk(
  'catalog/fetchManufacturers',
  async (_, { rejectWithValue }) => {
    try {
      const response = await catalogAPI.getManufacturersRequest();
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const fetchCategoryRequest = createAsyncThunk(
  'catalog/fetchCategory',
  async (_, { rejectWithValue }) => {
    try {
      const response = await catalogAPI.getCategoryRequest();
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const fetchCulturesRequest = createAsyncThunk(
  'catalog/fetchCultures',
  async (_, { rejectWithValue }) => {
    try {
      const response = await catalogAPI.getCulturesRequest();
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
