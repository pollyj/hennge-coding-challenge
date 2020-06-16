import React from 'react';
import calendarIcon from '../../assets/icon_calender.svg';
import searchIcon from '../../assets/icon_search.svg';

import './SearchBar.css';

export default function SearchBar() {

    return (
        <div className="searchbar">
            <div className="searchbar-container">
                <div className="calendar">
                    <img className="calendar-icon" src={calendarIcon} alt="calendar icon"></img>
                </div>
                <div className="dates">
                    <p>2019/12/31 - 2020/1/3</p>
                </div>
                <div className="search">
                    <img className="search-icon" src={searchIcon} alt="search icon"></img>
                </div>
            </div>
        </div>
    )
}