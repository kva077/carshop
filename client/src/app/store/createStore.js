import { combineReducers, configureStore } from "@reduxjs/toolkit";
import partsReducer from "./parts";
import usersReducer from "./users";
import busketReducer from "./busket";
import categoriesReducer from "./categories";

const rootReducer = combineReducers({
    users: usersReducer,
    categories: categoriesReducer,
    parts: partsReducer,
    busket: busketReducer
});

export function createStore() {
    return configureStore({
        reducer: rootReducer
    });
}
