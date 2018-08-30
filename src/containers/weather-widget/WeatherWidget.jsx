import React, { Component, Fragment } from 'react';
import {connect} from 'react-redux';
import CurrentWeather from '../../components/current-weather/CurrentWeather';
import {fetchCurrentWeather} from '../../actions/current-weather-actions';
import {changeUnits} from '../../actions/weather-filter-actions';
import {fetchWeatherForecast} from '../../actions/weather-forecast-actions';
import ForecastByDay from '../../components/forecast-by-day/ForecastByDay';
import ForecastByDate from '../../components/forecast-by-date/ForecastByDate';
import {daysNames} from '../../constants';

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

        this.defaultCityId = 703448;
        this.props.fetchCurrentWeather(this.defaultCityId);
        this.props.fetchWeatherForecast(this.defaultCityId);
    }

    formatCurrentWeather = (currentWeatherObj) => {
        const day = daysNames[this.getFormatedDate(currentWeatherObj.dt).getDay()];

        return {
            currentLocation: currentWeatherObj.name,
            currentDay: day,
            currentIcon: currentWeatherObj.weather[0].icon,
            currentTemp: this.formatDegrees(currentWeatherObj.main.temp),
            currentMinTemp: this.formatDegrees(currentWeatherObj.main.temp_min),
            currentMaxTemp: this.formatDegrees(currentWeatherObj.main.temp_max),
            currentUnits: this.props.currentUnits
        }
    }

    formatDegrees = (deg) => {
        return this.props.currentUnits === 'C' ? Math.round(deg-273.15) : Math.round(deg*9/5-459.67);
    }

    getFormatedDate = (dtValue) => {
        return new Date(dtValue * 1000);
    }

    render() {
        const {currentWeather, currentWeatherFetched} = this.props;
        const currentWeatherObj = currentWeatherFetched && this.formatCurrentWeather(currentWeather);

        return (
            <Fragment>
                {currentWeatherFetched && <CurrentWeather {...currentWeatherObj} />}
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
        currentWeatherFetched: state.currentWeather.isFetched,
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