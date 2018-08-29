import React, {Component} from 'react';
import ForecastTile from '../forecast-tile/ForecastTile';

class Forecast extends Component {
    constructor(props) {
        super(props);
    }

    renderTiles = () => {
        return this.props.tiles.map((tile, i) => <ForecastTile key={i} {...tile} />);
    }

    render() {
        return (
            <section className="forecast">
                {this.renderTiles()}
            </section>
        );
    }
}

export default Forecast;