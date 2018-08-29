import {CHANGE_CITY_ID, CHANGE_UNITS} from '../constants';

const weatherFilterReducer = (
    state = {
        currentCityId: 703448,
        currentUnits: 'C'
    },
    action
 ) => {
    switch (action.type) {
        case CHANGE_CITY_ID:
            return {
                ...state,
                currentCityId: action.payload
            }
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