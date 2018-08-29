import {GET_WEATHER_FORECAST, GET_WEATHER_FORECAST_ERROR, GET_WEATHER_FORECAST_SUCCESS} from '../constants';

const weatherForecastReducer = (
    state = {
        weatherForecast: [],
        isLoading: false,
        error: ''
    },
    action
 ) => {
    switch (action.type) {
        case GET_WEATHER_FORECAST:
            return {
                ...state,
                isLoading: true
            }
        case GET_WEATHER_FORECAST_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: '',
                weatherForecast: action.payload
            }
        case GET_WEATHER_FORECAST_ERROR:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        default:
            return state;
    }
 }

 export default weatherForecastReducer;

