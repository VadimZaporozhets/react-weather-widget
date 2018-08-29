import {CHANGE_CITY_ID, CHANGE_UNITS} from '../constants';

export const changeCityId = (cityId) => ({
    type: CHANGE_CITY_ID,
    payload: cityId
});

export const changeUnits = (units) => ({
    type: CHANGE_CITY_ID,
    payload: units
});

