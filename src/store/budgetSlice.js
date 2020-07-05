import { createSlice } from "@reduxjs/toolkit";

const budgetSlice = createSlice({
    name: "budget",
    initialState: {
        allItems: {
            income: [],
            expense: []
        },
        totals: {
            income: 0,
            expense: 0
        },
        sankeyData: []
    },
    reducers: {
        addItemToStore: (state, action) => {
            const { type, ...rest } = action.payload;
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.allItems[type].push(rest);
        },
        updateItemInStore: (state, action) => {
            const { id, description, cost, type } = action.payload;
            //Find index of object to be updated.
            const index = state.allItems[type].findIndex(item => item.id === id);
            state.allItems[type][index].description = description;
            state.allItems[type][index].cost = cost;
        },
        deleteItemFromStore: (state, action) => {
            const { type, id } = action.payload;
            state.allItems[type].splice(id, 1);
        },
        addTotalIncome: (state, action) => {
            const { totalIncome } = action.payload;
            state.totals.income = totalIncome;
        },
        addDataForSankeyChart: (state, action) => {
            const { sankeyItem } = action.payload;
            state.sankeyData = sankeyItem;
        }
    }
});

export const { addItemToStore, updateItemInStore, deleteItemFromStore, addTotalIncome, addDataForSankeyChart } = budgetSlice.actions;
export default budgetSlice.reducer;


