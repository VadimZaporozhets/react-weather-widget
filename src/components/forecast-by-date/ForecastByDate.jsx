import React, { Component } from 'react';
import Day from '../day/Day';

class ForecastByDate extends Component {
    renderDays = () => {
        return this.formatDays(this.props.days)
                .map((day, i) => <Day key={i} {...day} />);
    }

    formatDays = (days) => {
        return days.map(day => day);
    }

    render() {
        return (
            <section className="days">
                {this.renderDays()}
            </section>
        );
    }
}

export default ForecastByDate;