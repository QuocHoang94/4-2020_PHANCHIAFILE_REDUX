import * as types from './../constants/ActionTypes'
const initialState = {
    myObject : [
        {
            id:1,
            content:'NetFlix',
        },
        {
            id:2,
            content:'Schanel',
        }
    ],
    myNewobject:{},
    checkForm: false
}
var myReducer = (state = initialState,action)=>{
    switch (action.type){
        case types.CHANGE_VALUE:{
            return state.myObject;
        }
        case types.ADD_TASK:{
            console.log('action value:',action);
            // state.myNewobject = action.task
            return {...state,myNewobject:action.task};
        }
        case types.TOGGLE_FORM:{
            return {...state,checkForm:!state.checkForm }
        }
        case types.OPEN_FORM:{
            return{...state,checkForm:true}
        }
        case types.CLOSE_FORM:{
            return{...state,checkForm:false}
        }
        default:
            return state;
    }
}
export default myReducer;