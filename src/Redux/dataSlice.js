import { createSlice } from '@reduxjs/toolkit';

export const dataSlice = createSlice({
    name: "data Slice",
    initialState: {
        personalInfo: {

        },
        plan: {

        },
        addOns: {

        },
        subscriptionTypeYearly: false
    },

    reducers: {
        addPersonalInfo: (state, action) => {
            state.personalInfo = action.payload.newPersonalInfo
        },
        changePersonalInfo: (state, action) => {
            state.personalInfo = action.payload.updatePersonalInfo
        },
        addPlan: (state, action) => {
            state.plan = action.payload.newPlan
        },
        changePlan: (state, action) => {
            state.plan = action.payload.updatePlan
        },
        addNewAddOns: (state, action) => {
            state.addOns = action.payload.newAddOn
        },
        changeExistingAddOns: (state, action) => {
            state.addOns = action.payload.updateAddOn
        },
        changeSubscriptiontype: (state) => {
            state.subscriptionTypeYearly = state.subscriptionTypeYearly ? false : true
        }
    }
});

export const { addPersonalInfo, changePersonalInfo, addPlan, changePlan, addNewAddOns, changeExistingAddOns, changeSubscriptiontype } = dataSlice.actions;

export default dataSlice.reducer;