import React, { Component, Fragment } from 'react';
import {connect} from 'react-redux';
import CurrentWeather from '../../components/current-weather/CurrentWeather';
import {fetchCurrentWeather} from '../../actions/current-weather-actions';
import {changeUnits} from '../../actions/weather-filter-actions';
import {fetchWeatherForecast} from '../../actions/weather-forecast-actions';
import ForecastByDay from '../../components/forecast-by-day/ForecastByDay';
import ForecastByDate from '../../components/forecast-by-date/ForecastByDate';
import cities from '../../city.list.json';

const currentWeatherObj = {
    currentLocation: 'Brussels',
    currentDay: 'Thursday',
    currentIcon: '04d',
    currentTemp: 22,
    currentMinTemp: 15,
    currentMaxTemp: 25
}

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


class WeatherWidget extends Component {
    constructor(props) {
        super(props);

        // this.state = {
        //     currentDay: ,
        //     forecastByDay
        // }

        console.log(cities)

        this.defaultCityId = 703448;
        this.props.fetchCurrentWeather(this.defaultCityId);
        this.props.fetchWeatherForecast(this.defaultCityId);
    }

    formatCurrentWeather = (currentWeatherObj) => {

    }

    render() {
        return (
            <Fragment>
                <CurrentWeather {...currentWeatherObj} />
                <ForecastByDay tiles={forecastTilesInfo} />
                <ForecastByDate days={DAYS} />
            </Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        currentWeather: state.currentWeather.currentWeather,
        currentWeatherError: state.currentWeather.error,
        currentWeatherLoading: state.currentWeather.isLoading,
        currentUnits: state.weatherFilter.currentUnits,
        weatherForecast: state.weatherForecast.weatherForecast,
        weatherForecastError: state.weatherForecast.error,
        weatherForecastLoading: state.weatherForecast.isLoading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchCurrentWeather: (cityId) => {
            dispatch(fetchCurrentWeather(cityId));
        },
        fetchWeatherForecast: (cityId) => {
            dispatch(fetchWeatherForecast(cityId));
        },
        changeUnits: (units) => {
            dispatch(changeUnits(units));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherWidget);