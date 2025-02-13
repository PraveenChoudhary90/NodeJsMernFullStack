import {configureStore} from "@reduxjs/toolkit";
import todoAns from "./todoSlice";
const store=configureStore({
    reducer:{
        todo:todoAns
    }
})
export default store;