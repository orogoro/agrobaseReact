import axios from 'axios';

// export const catalogs = axios.create({
//   baseURL: 'https://catalog.farmis.lt/v1.1/',
//   // baseURL: '/api/catalog',
// });

export const catalog = axios.create({
  // baseURL: 'https://catalog.farmis.lt/v1.1/',
  baseURL: '/api/catalog',
});

export const api = axios.create({
  baseURL: '/api/',
});

export const ip = axios.create({
  baseURL: 'https://extreme-ip-lookup.com/json/',
});

const KEY_IP = 'Oe5cfuXXGbhUdXhtu4kM';

export const fatchIPUsers = async () => {
  try {
    const response = await ip.get(`?key=${KEY_IP}`);
    return response;
  } catch (err) {
    console.log('Error', err);
  }
};

export const catalogAPI = {
  async getCatalogRequest() {
    try {
      let response = await catalog.get(`/catalog.json`);

      return response;
    } catch (error) {
      console.log(error);
      if (axios.isCancel(error)) {
        return Promise.reject();
      } else {
        console.log('Error', error);
      }
    }
  },

  async getProductCatalogRequest(id) {
    try {
      let response = await catalog.get(`/${id}/product.json`);

      return response.data;
    } catch (error) {
      console.log(error);
      if (axios.isCancel(error)) {
        return Promise.reject();
      } else {
        console.log('Error', error);
      }
    }
  },

  // async getProductItemRequest({ language, itemName }) {
  //   try {
  //     let response = await catalogs.get(`${language}/product/${itemName}`);

  //     return response.data;
  //   } catch (error) {
  //     console.log(error);
  //     if (axios.isCancel(error)) {
  //       return Promise.reject();
  //     } else {
  //       console.log('Error', error);
  //     }
  //   }
  // },

  async getWeedCatalogRequest(id) {
    try {
      let response = await catalog.get(`/${id}/weed.json`);

      return response.data;
    } catch (error) {
      console.log(error);
      if (axios.isCancel(error)) {
        return Promise.reject();
      } else {
        console.log('Error', error);
      }
    }
  },

  async getWeedItemsRequest(id) {
    try {
      let response = await catalog.get(`/${id}/weed-products.json`);
      return response.data;
    } catch (error) {
      console.log(error);
      if (axios.isCancel(error)) {
        return Promise.reject();
      } else {
        console.log('Error', error);
      }
    }
  },

  async getDiseasesCatalogRequest(id) {
    try {
      let response = await catalog.get(`/${id}/disease.json`);
      return response.data;
    } catch (error) {
      if (axios.isCancel(error)) {
        return Promise.reject();
      } else {
        console.log('Error', error);
      }
    }
  },

  async getDiseasesProductsRequest(id) {
    try {
      let response = await catalog.get(`/${id}/disease-products.json`);
      return response.data;
    } catch (error) {
      console.log(error);
      if (axios.isCancel(error)) {
        return Promise.reject();
      } else {
        console.log('failed');
        console.log('Error', error);
      }
    }
  },

  async getInsectsCatalogRequest(id) {
    try {
      let response = await catalog.get(`${id}/pest.json`);
      return response.data;
    } catch (error) {
      if (axios.isCancel(error)) {
        return Promise.reject();
      } else {
        console.log('Error', error);
      }
    }
  },

  async getInsectsProductsRequest(id) {
    try {
      let response = await catalog.get(`${id}/pest-products.json`);
      return response.data;
    } catch (error) {
      console.log(error);
      if (axios.isCancel(error)) {
        return Promise.reject();
      } else {
        console.log('failed');
        console.log('Error', error);
      }
    }
  },

  async getCulturesRequest() {
    try {
      let response = await api.get(`/culture.json`);
      return response.data;
    } catch (error) {
      if (axios.isCancel(error)) {
        return Promise.reject();
      } else {
        console.log('Error', error);
      }
    }
  },

  async getActiveMaterialsRequest() {
    try {
      let response = await api.get('/active-material.json');
      return response.data;
    } catch (error) {
      if (axios.isCancel(error)) {
        return Promise.reject();
      } else {
        console.log(error);
      }
    }
  },
  async getManufacturersRequest() {
    try {
      let response = await api.get('/manufacturer.json');
      return response.data;
    } catch (error) {
      if (axios.isCancel(error)) {
        return Promise.reject();
      } else {
        console.log(error);
      }
    }
  },
  async getCategoryRequest() {
    try {
      let response = await api.get('/category.json');
      return response.data;
    } catch (error) {
      if (axios.isCancel(error)) {
        return Promise.reject();
      } else {
        console.log(error);
      }
    }
  },
};
