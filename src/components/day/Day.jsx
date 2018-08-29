import React from 'react';
import {WEATHER_ICON_DOMAIN} from '../../constants';

const Day = ({label, icon, min, max}) => {
    return (
        <div className="day">
            <div className="day__label">{label}</div>
            <img className="day__icon" src={`${WEATHER_ICON_DOMAIN}${icon}.png`} alt=""/>
            <p className="day__max">{max}&#176;C</p>
            <p className="day__min">{min}&#176;C</p>
        </div>
    );
}

export default Day;