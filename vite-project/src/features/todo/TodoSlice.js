import {createSlice, nanoid} from '@reduxjs/toolkit';
//nanoid generates unique id

const initialState = {
    todos: [{id: 1, text: "Hello World"}]
}

// const arr = [
//     {
//         id: 1,
//         text: "Hello World"
//     },
//     {
//         id: 2,
//         text: "Hello juit"
//     },
//     {
//         id: 3,
//         text: "Hello World"
//     },
//     {
//         id: 4,
//         text: "Hello juit"
//     }
// ]



export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state,action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo) //updating the state
        }, //always state and action 
        removeTodo: (state,action) => {
            state.todos = state.todos.filter((todo) => 
            todo.id !== action.payload)
        },
        editTodo: (state, action) => {
            for(let i = 0; i < state.todos.length(); i++){
                if(state.todos[i].id === action.payload.id){
                    state.todos[i].title = action.payload.title
                }
            }
            console.log(state.todos)
        }
    } //propertes or functions
    //state->current state
})

export const {addTodo,removeTodo,editTodo} = todoSlice.actions
export default todoSlice.reducer