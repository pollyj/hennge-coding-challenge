import React from 'react';
import logo from '../../assets/logo.png';
import './NoMatches.css';


export default function NoMatches() {

    return (
        <div className="container">
            <img className="app-logo" src={logo} alt="Mail Archiver logo"></img>    
        </div>
    )
}