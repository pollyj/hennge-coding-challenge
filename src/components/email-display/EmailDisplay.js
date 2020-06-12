import React from 'react';


export default function EmailDisplay(props) {

    console.log(props);
    return (
        <div className="row">
            <div className="col">
                sender
            </div>
            <div className="col">
                <div className="col">
                    to
                </div>
                <div>
                    more recipients icon
                </div>
            </div>
            <div className="col">
                subject
            </div>
            <div className="col">
                attachment icon
            </div>
            <div className="col">
                Date
            </div>
        </div>
    )
}