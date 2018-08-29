import React, {Component} from 'react';
import ForecastTile from '../forecast-tile/ForecastTile';

class ForecastByDay extends Component {
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

export default ForecastByDay;