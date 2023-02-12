import { createSlice } from '@reduxjs/toolkit';

export const stepsSlice = createSlice({
    name: "steps",
    initialState: {
        currentStep: 1,
        isChangeActive: false
    },
    reducers: {
        goForward: (state, action) => {
            state.currentStep = action.payload
        },
        goBackwards: (state, action) => {
            state.currentStep = action.payload
        },
        goToSpecificStep: (state, action) => {
            state.currentStep = action.payload;
            state.isChangeActive = true;
        },
        resetChange: (state) => {
            state.isChangeActive = false
        }
    }
});

export const { goForward, goBackwards, goToSpecificStep, resetChange } = stepsSlice.actions;

export default stepsSlice.reducer;