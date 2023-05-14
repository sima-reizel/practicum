import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAllImages = createAsyncThunk('fetchAllImages' , async()=> {
    const response = await axios.get('https://jsonplaceholder.typicode.com/photos');
    return response.data;
});

const initialState = {
    imageArr:[]
}
const imageSlice= createSlice({
    name:"image",
    initialState,
    extraReducers:(builder)=>{
        builder
        .addCase(fetchAllImages.fulfilled,(state,action)=>{
          state.imageArr=action.payload;
        })
    }
})
export const {} = imageSlice.actions;
export default imageSlice.reducer;
