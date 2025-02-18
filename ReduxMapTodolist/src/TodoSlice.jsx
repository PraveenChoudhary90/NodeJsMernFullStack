import {createSlice} from "@reduxjs/toolkit";


const TodoSlice = createSlice({
    name:"todolist",
    initialState:{
        task:[]
    },
    reducers:{
        Myaddtask:(state,actions)=>{
            console.log(actions.payload);
            state.task.push(actions.payload);
        },
        DeleteTask:(state,actions)=>{
            state.task = state.task.filter(key=>key.id!=actions.payload.id);

        },
        Myeditdata:(state,actions)=>{
            for(let i = 0; i<state.task.length;i++){

                if(state.task[i].id==actions.payload.id)
                {
                   state.task[i].work=state.task.data
                }
            }
        }
    }
})

export const {Myaddtask,DeleteTask,Myeditdata} = TodoSlice.actions;
export default TodoSlice.reducer;