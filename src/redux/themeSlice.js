import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
    name:"theme",
    initialState:{
        darkTheme:null
    },
    reducers:{
        update:(state,action)=>{
            state.darkTheme = action.payload.themechange
        }
    }
})

export const {update} = themeSlice.actions
export default themeSlice.reducer