import {
    GET_CURRENT_WEATHER, 
    GET_CURRENT_WEATHER_SUCCESS, 
    GET_CURRENT_WEATHER_ERROR,
    OPEN_WEATHER_API_DOMAIN,
    OPEN_WEATHER_API_CURRENT,
    OPEN_WEATHER_API_KEY_PARAM
} from '../constants';

export const fetchCurrentWeather = () => {
    return (dispatch) => {
        dispatch({
            type: GET_CURRENT_WEATHER
        });

        fetch(`${OPEN_WEATHER_API_DOMAIN}${OPEN_WEATHER_API_CURRENT}?id=524901&${OPEN_WEATHER_API_KEY_PARAM}`)
            .then(res => res.json())
            .then(res => {
                dispatch({
                    type: GET_CURRENT_WEATHER_SUCCESS,
                    payload: res
                });
            })
            .catch(err => {
                dispatch({
                    type: GET_CURRENT_WEATHER_ERROR,
                    payload: err
                });
            })
    }
}