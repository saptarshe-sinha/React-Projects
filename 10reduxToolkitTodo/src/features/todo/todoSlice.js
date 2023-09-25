import { createSlice, nanoid } from "@reduxjs/toolkit"


const initialState = {
    updateTodoId: 0,
    todos: [{id: 1, text: "Hello", updateMode: false}]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        // add todo reducer
        addTodo: (state, action) => {                         // reducers fucntions always takes "state" & "action"
            const todo = {
                id: nanoid(),                                 // nanoid() generates unique value
                text: action.payload
            }
            state.todos.push(todo)
        },
        // // update todo reducer
        // updateTodo: (state, action) => {
        //     state.todos.map((prevTodo) => {
        //         if (prevTodo.id === action.payload[0]) {
        //             prevTodo.text = action.payload[1];
        //         }
        //     });
        //     state.updateTodoId = action.payload;
        // }, 
        // // update mode switcher reducer
        // toggleUpdateMode: (state, action) => {
        //     state.todos.map((prevTodo) => {
        //         if (prevTodo.id === action.payload) {
        //             todo.updateMode = !(todo.updateMode)
        //         }
        //     })
        // },
        // remove todo reducer              
        removeTodo: (state, action) => {
            state.todos = state.todos.filter ((prevTodo) => prevTodo.id !== action.payload)
        },
        
    }
})



export const {addTodo, removeTodo} = todoSlice.actions   //we have to export all individual reducers from slices

export default todoSlice.reducer        //We have to export all slices.reducer
