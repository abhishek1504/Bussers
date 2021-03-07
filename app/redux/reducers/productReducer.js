import {SET_PRODUCTS} from '../actions/constants';

const initialState = {
  categories: null,
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return {
        ...state,
        categories: action.categories,
      };
    default:
      return {...state};
  }
};

export default productReducer;
