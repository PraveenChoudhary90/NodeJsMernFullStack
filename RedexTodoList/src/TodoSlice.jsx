import {createSlice} from "@reduxjs/toolkit";

const MyTodo  = createSlice({
    name:"todo",
    initialState:{
        task:[]
    },
    reducers:{
        MyAdd :(state, actions)=>{
            console.log(actions.payload)
            state.task.push(actions.payload)
        }

    }
})
export const {MyAdd}=MyTodo.actions;
export default MyTodo.reducer;