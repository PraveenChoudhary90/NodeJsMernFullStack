import {configureStore} from "@reduxjs/toolkit";
import Myans from "./TaskSlice";
const store = configureStore({
    reducer:{
        mytask:Myans

    }
});

export default store;