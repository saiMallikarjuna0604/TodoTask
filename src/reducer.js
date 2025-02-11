import { createSlice } from '@reduxjs/toolkit'

const initialState={
        listOfTodos:[] 
}

const todoSlice=createSlice({
    name:'Todo',
    initialState,
    reducers:{
        addTodo(state,action)
        {
            console.log(action,'-------action',state)
            // state.listOfTodos.push(action.payload)
            state.listOfTodos=action.payload

        },
        isCompleted(state,action)
        {
            state.listOfTodos=action.payload
        },
        deleteTodo(state,action)
        {
            state.listOfTodos=action.payload

        }
    }

})

export const {addTodo,isCompleted,deleteTodo}=todoSlice.actions
export default todoSlice.reducer