import { createAction } from '@reduxjs/toolkit';

const changeLanguage = createAction(
  'catalog/catalogLanguage',
  ({ id, slug }) => ({
    payload: {
      id,
      slug,
    },
  })
);
const colectonProductItem = createAction('catalog/colectonProductItem');

export { changeLanguage, colectonProductItem };
