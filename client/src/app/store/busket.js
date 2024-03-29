import { createSlice } from "@reduxjs/toolkit";
import { calcTotalPrice } from "../utils/calcTotalPrice.js";
import { getBusket } from "../utils/getBusket.js";

const { items, totalPrice } = getBusket();
const busketSlice = createSlice({
    name: "busket",
    initialState: {
        totalPrice,
        items
    },
    reducers: {
        busketRequested: (state, action) => {
            return state.items;
        },
        busketCreated: (state, action) => {
            state.items = action.payload;
        },
        busketAdded: (state, action) => {
            const findItem = state.items.find(
                (item) => item._id === action.payload._id
            );
            if (findItem) {
                findItem.count++;
            } else {
                state.items.push({ ...action.payload, count: 1 });
            }
            state.totalPrice = calcTotalPrice(state.items);
        },
        busketDecremented: (state, action) => {
            const findItem = state.items.find(
                (item) => item._id === action.payload._id
            );
            if (findItem && findItem.count > 1) {
                findItem.count--;
            }
            state.totalPrice = calcTotalPrice(state.items);
        },
        busketRemoved: (state, action) => {
            state.items = state.items.filter(
                (item) => item._id !== action.payload
            );
            state.totalPrice = calcTotalPrice(state.items);
        },
        busketCleaned: (state, action) => {
            state.items = [];
            state.totalPrice = 0;
        }
    }
});

const { reducer: busketReducer, actions } = busketSlice;
export const {
    busketRequested,
    busketCreated,
    busketAdded,
    busketDecremented,
    busketRemoved,
    busketCleaned
} = actions;

export const getBusketCount = (state) => {
    return state;
};

export default busketReducer;
