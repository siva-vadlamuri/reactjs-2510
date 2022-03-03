// Action creator are plain javascript functions which returns an object which

import { ACTION_TYPES } from "../ActionTypes/ActionTypes";

export const setProducts = (products) => {
  return {
    type: ACTION_TYPES.SET_PRODUCTS,
    payload: products,
  };
};

export const addToCart = (product) => {
  return {
    type: ACTION_TYPES.ADD_TO_CART,
    payload: product,
  };
};

export const deleteFromCart = (id) => {
  return {
    type: ACTION_TYPES.REMOVE_ITEM_FROM_CART,
    payload: id,
  };
};
