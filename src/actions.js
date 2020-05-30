export const VIEW_ITEM_DETAIL = 'VIEW_ITEM_DETAIL';
export const FILTER_ITEM = 'FILTER_ITEM';

export const viewItemDetail = (id) => ({
  type: VIEW_ITEM_DETAIL,
  id,
});

export const filterItem = (ingredients) => ({
  type: FILTER_ITEM,
  ingredients,
});
