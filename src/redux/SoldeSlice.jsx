import { createSlice } from "@reduxjs/toolkit";


const soldeSlice = createSlice({
    name:'solde',
    initialState:{solde:0},
    reducers : {
        augumenter: (state,action) => {
            state.solde += parseFloat(action.payload);
        },
        diminuer: (state,action) => {
            state.solde -= parseFloat(action.payload);
        },
        initialiser: (state,action) => {
            state.solde = parseFloat(action.payload);
        }
    }
});


export  const {augumenter, diminuer, initialiser} = soldeSlice.actions

export default soldeSlice.reducer;