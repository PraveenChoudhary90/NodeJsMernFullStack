import {configureStore} from "@reduxjs/toolkit";
import  myReducres from "./ColorSlice";
const Store = configureStore({
    reducer:{
    mycolor:myReducres
    }
})
export default Store;