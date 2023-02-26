import { createAction, createSlice } from "@reduxjs/toolkit";
import partService from "../services/part.service";
import history from "../utils/history";
import { busketRemoved } from "./busket";

const partsSlice = createSlice({
    name: "parts",
    initialState: {
        entities: null,
        isLoading: true,
        error: null,
        dataLoaded: false
    },
    reducers: {
        partsRequested: (state) => {
            state.isLoading = true;
        },
        partsReceved: (state, action) => {
            state.entities = action.payload;
            state.isLoading = false;
            state.dataLoaded = true;
        },
        partsRequestFailed: (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        },
        partCreated: (state, action) => {
            if (!Array.isArray(state.entities)) {
                state.entities = [];
            }
            state.entities.push(action.payload);
        },
        partUpdateSuccessed: (state, action) => {
            state.entities[
                state.entities.findIndex((p) => p._id === action.payload._id)
            ] = action.payload;
        },
        partRemoved: (state, action) => {
            state.entities = state.entities.filter(
                (p) => p._id !== action.payload
            );
        },
        partsSortedByInc: (state, action) => {
            state.entities = state.entities.sort((a, b) => a.price - b.price);
        },
        partsSortedByDec: (state, action) => {
            state.entities = state.entities.sort((a, b) => b.price - a.price);
        },
        partsSortedByCat: (state, action) => {
            console.log(action.payload);
            state.entities = state.entities.filter(
                (p) => p.categories === action.payload
            );
        }
    }
});

const { reducer: partsReducer, actions } = partsSlice;
export const {
    partsReceved,
    partsRequestFailed,
    partsRequested,
    partCreated,
    partUpdateSuccessed,
    partRemoved,
    partsSortedByDec,
    partsSortedByInc,
    partsSortedByCat
} = actions;

const partUpdateRequested = createAction("parts/partUpdateRequested");
const partUpdateFailed = createAction("parts/partUpdateFailed");
const partCreateRequested = createAction("parts/partCreateRequested");
const createPartFailed = createAction("parts/createPartFailed");
const removePartRequested = createAction("parts/removePartRequested");

export const loadPartsList = () => async (dispatch) => {
    dispatch(partsRequested());
    try {
        const { content } = await partService.get();
        dispatch(partsReceved(content));
    } catch (error) {
        dispatch(partsRequestFailed(error.message));
    }
};

export const createPart = (payload) => async (dispatch) => {
    dispatch(partCreateRequested());
    try {
        const { content } = await partService.create(payload);
        dispatch(partCreated(content));
        history.push("/parts");
    } catch (error) {
        dispatch(createPartFailed(error.message));
    }
};
export const updatePart = (payload) => async (dispatch) => {
    dispatch(partUpdateRequested());
    try {
        const { content } = await partService.update(payload);
        dispatch(partUpdateSuccessed(content));
        history.push(`/parts/${content._id}`);
    } catch (error) {
        dispatch(partUpdateFailed(error.message));
    }
};
export const removePart = (partId) => async (dispatch) => {
    dispatch(removePartRequested());
    try {
        const { content } = await partService.remove(partId);
        if (!content) {
            dispatch(partRemoved(partId));
        }
        dispatch(busketRemoved(partId));

        history.push(`/editparts`);
    } catch (error) {
        dispatch(partsRequestFailed(error.message));
    }
};

export const getManufacturers = () => (state) => {
    const manufacturers = state.parts.entities.map((part) => part.manufacturer);
    const uniq = manufacturers.filter((x, i) => manufacturers.indexOf(x) === i);
    return uniq;
};
export const getParts = () => (state) => state.parts.entities;
export const getDataStatus = () => (state) => state.parts.dataLoaded;
export const getPartById = (partId) => (state) => {
    if (state.parts.entities) {
        return state.parts.entities.find((p) => p._id === partId);
    }
};

export default partsReducer;
