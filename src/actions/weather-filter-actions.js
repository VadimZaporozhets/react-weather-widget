import {CHANGE_UNITS} from '../constants';

export const changeUnits = (units) => ({
    type: CHANGE_UNITS,
    payload: units
});

