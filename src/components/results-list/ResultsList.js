import React from 'react';
import EmailDisplay from '../email-display/EmailDisplay';
import NoMatches from '../no-matches/NoMatches';
import './ResultsList.css';
import emailData from '../../data/emails.json';
import upArrow from '../../assets/icon_arrow01.svg'

export default function ResultsList(props) {

    const renderSearchResults = () => {
        if (emailData) {
            return emailData.map((email) => <EmailDisplay props={email} />)
        } else {
            return <NoMatches />
        }
    }

    return (
        <div className="results-list container-fluid">
            <div className="row">
                <div className="results-bar col-12">
                    <p>Results: <span className="result-number">10</span> mail(s)</p>
                </div>
            </div>
            <div className="row">
                <div className="col-12 top-bar-wrapper">
                    <p>From
                    <img src={upArrow}></img>
                    </p><p>|</p>
                    <p>To</p><p>|</p>
                    <p>Subject</p><p>|</p>
                    <p>Date</p>
                </div>
            </div>
            {renderSearchResults()}
        </div>
    )
}