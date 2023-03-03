import { createSlice } from '@reduxjs/toolkit';

export const stepsSlice = createSlice({
    name: "steps",
    initialState: {
        currentStep: 1,
        isChangeActive: false
    },
    reducers: {
        goForward: (state, action) => {
            let newStep = state.currentStep + 1;
            state.currentStep = newStep === 5 ? 5 : newStep;
        },
        goBackwards: (state, action) => {
            let newStep = state.currentStep - 1;
            state.currentStep = newStep === 1 ? 1 : newStep;
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