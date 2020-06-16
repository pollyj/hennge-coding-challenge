import React from 'react';
import EmailDisplay from '../email-display/EmailDisplay';
import NoMatches from '../no-matches/NoMatches';
import './ResultsList.css';
import emailData from '../../data/emails.json';
import upArrow from '../../assets/icon_arrow01.svg'

export default function ResultsList() {

    const renderSearchResults = () => {
        if (emailData) {
            return emailData.map((email) => <EmailDisplay key={email.id} props={email} />)
        } else {
            return <NoMatches />
        }
    }

    return (
        <div className="results-list">
            <div className="row">
                <div className="results-bar col-12">
                    <p>Results: <span className="result-number">10</span> mail(s)</p>
                </div>
            </div>
            <div className="top-bar-wrapper">
                <p className="sender">From{" "}
                    <img src={upArrow} alt="up arrow"></img>
                </p>
                <p className="divider">|</p>
                <p className="to">To</p>
                <p className="divider">|</p>
                <p className="subject">Subject</p>
                <p className="divider">|</p>
                <div className="date-area">
                        <div className="date">
                            Date
                        </div>
                    </div>
            </div>
            <div className="emails">
                {renderSearchResults()}
            </div>
        </div>
    )
}