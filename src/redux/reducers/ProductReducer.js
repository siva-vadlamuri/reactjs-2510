import { ACTION_TYPES } from "../ActionTypes/ActionTypes";

const intialState = {
  products: [],
  cartData: [],
};

export const ProductReducer = (state = intialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.SET_PRODUCTS:
      return { ...state, products: action.payload };
    case ACTION_TYPES.ADD_TO_CART:
      return { ...state, cartData: [...state.cartData, action.payload] };
    default:
      return state;
  }
};
