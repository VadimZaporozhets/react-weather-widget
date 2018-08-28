import React, {Component} from 'react';
import Header from '../components/header/Header';
import Day from '../components/day/Day';

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
    }
]

class WeaterWidget extends Component {

    renderDays() {
        return DAYS.map((day, i) => <Day key={i} {...day} />)
    }

    render() {
        return (
            <section className="weather-widget">
                <Header/>
                <section className="days">
                    {this.renderDays()}
                </section>
            </section>
        );
    }
}

export default WeaterWidget;