import { configureStore} from "@reduxjs/toolkit";
import MyReducres from "./CounterSlice"
const  Store = configureStore({
    reducer:{
   mycount:MyReducres
    }
})
export default Store;