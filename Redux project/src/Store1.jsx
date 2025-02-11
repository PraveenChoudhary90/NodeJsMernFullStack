import { configureStore } from "@reduxjs/toolkit";
import { Mybgcolor } from "./colorSlice";

const Store1 = configureStore({
    reducer:{
        mycolor:Mybgcolor
        
    }
})

export default Store1;