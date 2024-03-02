import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "./taskReducers";
import partReducers from "./partReducers";

const store = configureStore({
    reducer: {
        tasks: tasksReducer,
        parts: partReducers
    }
})

export default store 