import { createSlice} from "@reduxjs/toolkit";

const CountSlice = createSlice({
    name:"mycount",
    initialState:{
        count:"0"
    },
    reducers:{
        Increment:(state)=>{
            state.count++;
        },
        Decrement:(state)=>{
            state.count--;
        }
    }
})

export const {Increment,Decrement}= CountSlice.actions;
export default CountSlice.reducer;