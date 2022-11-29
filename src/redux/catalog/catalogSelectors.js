export const getCatalog = state => state.catalog.catalogCountryReducer;
export const getColectionsItems = state => state.catalog.mainReducer.data;
export const getItem = state => state.catalog.mainReducer.item;

export const getItemColections = state => state.catalog.colectionsItemReducer;

export const getLanguage = state => state.catalog.languageReducer.leng;
export const getLanguageById = state => state.catalog.languageReducer.id;

export const getCategory = state => state.catalog.categoryReducer;

export const isLoading = state => state.catalog.isLoading;
