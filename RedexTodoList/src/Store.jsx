import {configureStore} from "@reduxjs/toolkit";

import Myans from "./TodoSlice"
const store = configureStore({
    reducer:{
   todo:Myans

    }
})
export default store;