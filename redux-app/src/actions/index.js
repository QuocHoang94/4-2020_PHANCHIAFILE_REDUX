import * as types from './../constants/ActionTypes'
export const myvalue = ()=>{
    return {
        type: types.CHANGE_VALUE,
    }
}
export const addTask = (task)=>{
    return {
        type: types.ADD_TASK,
        task
    }
}
export const toggleForm = ()=>{
    return {
        type: types.TOGGLE_FORM
    }
}
export const openForm = ()=>{
    return {
        type: types.OPEN_FORM
    }
}
export const closeForm = ()=>{
    return {
        type: types.CLOSE_FORM
    }
}