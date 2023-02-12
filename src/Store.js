import { configureStore } from '@reduxjs/toolkit';
import stepsSlice from "./Redux/stepsSlice";
import dataSlice from "./Redux/dataSlice";

export default configureStore({
    reducer: {
        step: stepsSlice,
        data: dataSlice
    }
});