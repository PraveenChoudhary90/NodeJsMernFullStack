import {configureStore} from "@reduxjs/toolkit";
import myans from "./TodoSlice";

const  Store = configureStore({
    reducer:{
     todolist:myans
    }
})

export default Store;