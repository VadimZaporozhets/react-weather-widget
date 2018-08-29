import React, {Component} from 'react';
import Header from '../components/header/Header';
import Day from '../components/day/Day';
import Forecast from '../components/forecast/Forecast';

const DAYS = [
    {
        label: 'Thu',
        icon: '04d',
        min: 22,
        max: 11
    },
    {
        label: 'Fri',
        icon: '04d',
        min: 22,
        max: 11
    },
    {
        label: 'Sat',
        icon: '04d',
        min: 22,
        max: 11
    },
    {
        label: 'Sat',
        icon: '04d',
        min: 22,
        max: 11
    }
    ,
    {
        label: 'Sat',
        icon: '04d',
        min: 22,
        max: 11
    }
];

const forecastTilesInfo = [
    {
        time: '12:00',
        icon: '04d',
        deg: 22
    },
    {
        time: '12:00',
        icon: '04d',
        deg: 22
    },
    {
        time: '12:00',
        icon: '04d',
        deg: 22
    }
];

const currentWeatherObj = {
    currentLocation: 'Brussels',
    currentDay: 'Thursday',
    currentIcon: '04d',
    currentTemp: 22,
    currentMinTemp: 15,
    currentMaxTemp: 25
}

class WeaterWidget extends Component {
    renderDays = () => {
        return this.formatDays(DAYS)
                .map((day, i) => <Day key={i} {...day} />);
    }

    formatDays = (days) => {
        return days.map(day => day);
    }

    render() {
        return (
            <section className="weather-widget">
                <Header {...currentWeatherObj}/>
                <Forecast tiles={forecastTilesInfo} />
                <section className="days">
                    {this.renderDays()}
                </section>
            </section>
        );
    }
}

export default WeaterWidget;