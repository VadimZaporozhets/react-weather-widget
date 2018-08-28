import React from 'react';

const weatherIconDomain = 'http://openweathermap.org/img/w/';

const Day = ({label, icon, min, max}) => {
    return (
        <div className="day">
            <div className="day__label">{label}</div>
            <img className="day__icon" src={`${weatherIconDomain}${icon}.png`}/>
            <p className="day__max">{max} C</p>
            <p className="day__min">{min} C</p>
        </div>
    );
}

export default Day;