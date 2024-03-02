import { createSlice } from "@reduxjs/toolkit";

const partsSlice = createSlice({
    name: 'parts',
    initialState: { value: 'all' },
    reducers: {
        all_tasks: (state) => {
            state.value = 'all'
        },
        removed_tasks: (state) => {
            state.value = 'removed'
        },
        completed_tasks: (state) => {
            state.value = 'completed'
        },
        not_done: (state) => {
            state.value = 'not_done'
        }
    }
})

export const { all_tasks, removed_tasks, completed_tasks, not_done } = partsSlice.actions

export default partsSlice.reducer