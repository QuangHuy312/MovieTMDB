import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { createAction } from "../../redux/action/createAction/createAction";
import {
  LAZY_LOADING_MOUNT,
  LAZY_LOADING_UNMOUNT,
} from "../../redux/types/LazyLoadingType";

const LazyLoading = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(createAction(LAZY_LOADING_MOUNT));
    return () => {
      dispatch(createAction(LAZY_LOADING_UNMOUNT));
    };
  });
  return <div></div>;
};

export default LazyLoading;
