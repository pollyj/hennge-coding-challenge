import React from 'react';
import EmailDisplay from '../email-display/EmailDisplay';
import './ResultsList.css';
import emailData from '../../data/emails.json';

export default function ResultsList(props) {
    console.log('emailData:', emailData)

    function test() {
        emailData.forEach((item) => {
            return (
                <p>{item.body}</p>
            )
        })
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
            {emailData.map((email) => <EmailDisplay props={email} />
            )}
        </div>
    )
}