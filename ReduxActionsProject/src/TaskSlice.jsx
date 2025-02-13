import {createSlice} from "@reduxjs/toolkit";

    // name:"mycolor",
    // initialState:{
    //     color:"yellow"
    // },
    // reducers:{
    //     Mybgcolor:(state,actions)=>{
    //         console.log(actions);
    //         state.color=actions.payload.my;
    //     }
    // }
const TaskSlice = createSlice({
  name:"mytask",
  initialState:{
    task:[]
  },
  reducers:{
    MyAdd:(state,actions)=>{
        console.log(actions.payload);
        state.task.push(actions.payload)
    },
    Mydelete:(state,actions)=>{
        console.log(actions.payload);
        state.task=state.task.filter(key=>key.id!==actions.payload);

        
    }

  }
})
export const {MyAdd, Mydelete} = TaskSlice.actions;
export default TaskSlice.reducer;