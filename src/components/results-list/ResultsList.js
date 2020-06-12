import React from 'react';
import EmailDisplay from '../email-display/EmailDisplay';
import NoMatches from '../no-matches/NoMatches';
import './ResultsList.css';
import emailData from '../../data/emails.json';

export default function ResultsList(props) {

    const renderSearchResults = () => {
        if (emailData) {
            return emailData.map((email) => <EmailDisplay props={email} />)
        } else {
            return <NoMatches />
        }
    }

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col">
                    <p>Results: 10 </p>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <p>top</p>
                </div>
            </div>
            {renderSearchResults()}
        </div>
    )
}