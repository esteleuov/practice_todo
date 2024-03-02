import { createReducer, createSlice } from "@reduxjs/toolkit";

const initState = [
    {
        id: 1,
        title: 'Убраться по дому',
        completed: true,
        removed: false        
    },
    {
        id: 2,
        title: 'Вынести мусор',
        completed: true,
        removed: false
    }
    ,
    {
        id: 3,
        title: 'Помочь ребёнку собраться',
        completed: false,
        removed: false
    },
    {
        id: 4,
        title: 'Позвонить гостям',
        completed: false,
        removed: false
    },
]

    let uniqId = initState.length 

const TasksSlice = createSlice({
    name: 'tasks',
    initialState: initState,
    reducers: {
        addTask: (state, action) => {
            uniqId += 1;
            state.push({
                id: uniqId,
                title: action.payload,
                did: false,
                removed: false,
                completed: false
            })  
        },
        removeTask: (state, action) => {        
            state.find((el) => {
                if (el.id === action.payload) {
                    el.removed = !el.removed
                }
            })
        },
        completeTask: (state, action) => {            
            state.find((el) => {
                if (el.id === action.payload) {
                    el.completed = !el.completed
                }
            })
        }
        
    }
})

export const { addTask, removeTask, completeTask } = TasksSlice.actions

export default TasksSlice.reducer