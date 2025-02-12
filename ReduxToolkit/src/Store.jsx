import {configureStore} from "@reduxjs/toolkit"
import myans from "./ColorSlice"
const store = configureStore({
    reducer:{
        mycolor:myans
    }
})
export default store;