import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import auth from "./auth";
import funds from "./funds";
import blog from "./blog";

const reducer = combineReducers({
  auth,
  funds,
  blog,
});

const store = configureStore({ reducer });

export default store;
