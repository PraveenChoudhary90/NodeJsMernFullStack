import {configureStore} from "@reduxjs/toolkit"

import Myans from "./ColorSlice";
import mycount from "./CountSlice";
const Store = configureStore({
    reducer:{
       Mycolor:Myans,
       Mycount:mycount
    }
    
    
})

export default Store;