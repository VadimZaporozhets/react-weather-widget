import React from 'react';

const Header = () => {
    return (
        <header className="current-weater">
            <div className="current-weater__data">
                <p className="current-weather__data--max">Max: 25</p>
                <p className="current-weather__data--current">22 C</p>
                <p className="current-weather__data--min">Min: 15</p>
            </div>
            <div className="current-weather__icon">
                <span className="current-weather__icon--img"></span>
            </div>
            <div className="current-weather__date-loc">
                <p className="current-weather__date-loc--date">Thursday</p>
                <p className="current-weather__date-loc--loc">Brussels</p>
            </div>
        </header>
    );
}

export default Header;