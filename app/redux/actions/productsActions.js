import {SET_PRODUCTS} from './constants';

export function setProducts(categories) {
  return {
    type: SET_PRODUCTS,
    categories,
  };
}
