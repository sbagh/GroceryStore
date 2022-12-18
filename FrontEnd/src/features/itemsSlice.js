import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
   things: [],
   status: null,
};

export const itemsFetch = createAsyncThunk(
    "items/itemsFetch", 
    async () => {
        const response = await axios.get("http://localhost:5100/items")
        return response?.data;
});

const itemsSlice = createSlice({
   name: "items",
   initialState,
   reducers: {},
   extraRedcuers: {
      [itemsFetch.pending]: (state, action) => {},
   },
});

export default itemsSlice.reducer;
