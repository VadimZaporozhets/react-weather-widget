import {CHANGE_UNITS} from '../constants';

const weatherFilterReducer = (
    state = {
        currentUnits: 'C'
    },
    action
 ) => {
    switch (action.type) {
        case CHANGE_UNITS:
            return {
                ...state,
                currentUnits: action.payload
            }
        default:
            return state;
    }
 }

 export default weatherFilterReducer;