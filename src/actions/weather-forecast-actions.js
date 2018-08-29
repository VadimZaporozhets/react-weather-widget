import {
    GET_WEATHER_FORECAST, 
    GET_WEATHER_FORECAST_SUCCESS, 
    GET_WEATHER_FORECAST_ERROR,
    OPEN_WEATHER_API_DOMAIN,
    OPEN_WEATHER_API_FORECAST,
    OPEN_WEATHER_API_KEY_PARAM
} from '../constants';

export const fetchWeatherForecast = (cityId) => {
    return (dispatch) => {
        dispatch({
            type: GET_WEATHER_FORECAST
        });

        fetch(`${OPEN_WEATHER_API_DOMAIN}${OPEN_WEATHER_API_FORECAST}?id=${cityId}&${OPEN_WEATHER_API_KEY_PARAM}`)
            .then(res => res.json())
            .then(res => {
                dispatch({
                    type: GET_WEATHER_FORECAST_SUCCESS,
                    payload: res
                });
            })
            .catch(err => {
                dispatch({
                    type: GET_WEATHER_FORECAST_ERROR,
                    payload: err
                });
            })
    }
}