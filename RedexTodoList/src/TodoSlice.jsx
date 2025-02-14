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
        },
        Mydelete:(state, actions)=>{
            state.task = state.task.filter(key=>key.id!=actions.payload.id)
        },
        Complete:(state,actions)=>{
            for(let i=0;i<state.task.length;i++)
                {
                if(state.task[i]==actions.payload.id){
                    state.task[i].ComStatus=true
                }
            }
        },
         InComplete:(state,actions)=>{
            for(let i=0;i<state.task.length;i++)
                {
                if(state.task[i].id==actions.payload.id){
                   state.task[i].ComStatus=false
                }
            }
        },
        MyEditDataSave:(state,actions)=>{
              for(var i=0; i<state.task.length; i++)
            {
                if (state.task[i].id==actions.payload.id)
                {
                    state.task[i].work=actions.payload.data;
                }
            }
            
        }

    }
})
export const {MyAdd , Mydelete,Complete,InComplete , MyEditDataSave}=MyTodo.actions;
export default MyTodo.reducer;