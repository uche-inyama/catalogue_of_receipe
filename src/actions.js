export const VIEW_ITEM_DETAIL = 'VIEW_ITEM_DETAIL';
export const FILTER_ITEM = 'FILTER_ITEM';
export const INITIALIZE_ITEMS = 'INITIALIZE_ITEMS';

export const initializeItems = (itemsArray) => ({
  type: INITIALIZE_ITEMS,
  itemsArray,
});

export const filterItem = (filter, state) => ({
  type: FILTER_ITEM,
  filter,
  state,
});
