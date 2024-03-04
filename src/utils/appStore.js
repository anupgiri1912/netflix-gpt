import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import moviesReducer from "./moviesSlice";
import configSlice from "./configSlice";
import gptSlice from "./gptSlice";


const appStore=configureStore(
    {
        reducer:{
            user:userSlice,
            movies: moviesReducer,
            gpt:gptSlice,
            config:configSlice
        },
    }
);

export default appStore;