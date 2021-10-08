import {
  LAZY_LOADING_MOUNT,
  LAZY_LOADING_UNMOUNT,
} from "../types/LazyLoadingType";

const initialState = {
  isLazy: false,
};
export const LazyReducer = (state = initialState, { type }) => {
  switch (type) {
    case LAZY_LOADING_MOUNT: {
      return { ...state, isLazy: true };
    }
    case LAZY_LOADING_UNMOUNT: {
      return { ...state, isLazy: false };
    }
    default:
      return state;
  }
};
