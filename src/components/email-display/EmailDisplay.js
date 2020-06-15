import React, { useState, useEffect } from 'react';
import moment from 'moment';
import './EmailDisplay.css';
import emailIcon from '../../assets/icon_mail_sp.svg';
import attachmentIcon from '../../assets/icon_clip.svg';
import openArrow from '../../assets/icon_arrow02.svg';



export default function EmailDisplay({ props } = props.props) {

    const [screenSize, setScreenSize] = useState(window.innerWidth);
    const [emailIsDisplayed, setEmailIsDisplayed] = useState(false);

    window.addEventListener("resize", () => {
        setScreenSize(window.innerWidth);
    })
    
    const renderTime = (date) => {
        const today = "2020/01/03"
        // normally dates wouldn't be hardcoded so I would compare with e.g. new Date() but for the purposes of this mockup, the dates are hardcoded

        if (date.split(" ")[0] === today) {
            return moment(date).format("H:mm");
        } else if (moment(date).isSame(new Date(), 'year')) {
            return moment(date).format("MMM DD");
        } else {
            return moment(date).format("YYYY/MM/DD")
        }
    }

    const renderSubject = (text) => {
        let subjectMaxLength;
        screenSize > 600
            ? subjectMaxLength = 100
            : subjectMaxLength = 40;

        if (text.length > subjectMaxLength) {
            return `${text.substring(0, subjectMaxLength)}...`
        } else {
            return text;
        }
    }

    let number;
    const renderSenderEmail = (email) => {
        let senderMaxLength;
        screenSize > 600
            ? senderMaxLength = 13
            : senderMaxLength = 35;

        if (email.length > senderMaxLength) {
            return `${email.substring(0, senderMaxLength)}...`
        } else {
            return email;
        }
    }

    const renderRecipientEmails = (emailArray) => {
        let recipientMaxLength;
        screenSize > 600
            ? recipientMaxLength = 20
            : recipientMaxLength = 35;

        const validateLength = (address) => {
            if (address.length > recipientMaxLength) {
                return `${address.substring(0, recipientMaxLength)}...`;
            } else {
                return address;
            }
        }
        // if only one recipient
        if (emailArray.length === 1) {
            return validateLength(emailArray[0]);
        }
        // else check that first recipient's address isn't over limit
        else if (emailArray[0].length < recipientMaxLength) {
            let string = "";
            for (let i = 0; i < emailArray.length; i++) {
                if ((string.length + emailArray[i].length) > recipientMaxLength) {
                    number = emailArray.length - i;
                    string = `${string}, ...`;
                    return string;
                } else if (i === emailArray.length - 1) {
                    string += `${emailArray[i]}`
                } else {
                    i === 0
                        ? string += emailArray[i]
                        : string += `, ${emailArray[i]}`
                }
            }
            return string;
        }
        // if first recipient's email is over limit
        else {
            number = emailArray.length - 2;
            return validateLength(emailArray[0])
        }
        // return string;
    }

    const handleEmailDisplay = () => {
        const emailDisplay = document.body.querySelector(`.email-${props.id}`)
        if (emailIsDisplayed === false) {
            const bodyTextContainer = document.createElement("div");
            bodyTextContainer.id = `body-${props.id}`
            bodyTextContainer.innerHTML = `<div class="email-body">${props.body}</div>`;
    
            emailDisplay.appendChild(bodyTextContainer);
            emailDisplay.style.backgroundColor = "#F6F8FA"

            setEmailIsDisplayed(true);
        } else {
            document.body.querySelector(`#body-${props.id}`).remove();
            emailDisplay.style.backgroundColor = "#FFF"
            setEmailIsDisplayed(false);
        }
    }


    useEffect(() => {
        setScreenSize(window.innerWidth);
    }, [])

    return (
        <div className={`wrapper email-${props.id}`} onClick={handleEmailDisplay}>
            <div className="grid-container">
                <div className="email-subject">{renderSubject(props.subject)}</div>
                <div className="icon">
                    <img className="email-icon"
                        src={emailIcon}
                        alt="email icon"
                    ></img>
                </div>
                <div className="to recipient-wrapper">
                    <div className="recipient-emails">
                        {renderRecipientEmails(props.to)}
                    </div>
                    <div className="to-icon">
                        {
                            number
                                ? <div className="number">{`+${number}`}</div>
                                : ""
                        }
                    </div>
                </div>
                <div className="attach-icon-and-date">
                    <div className="attachment">
                        {props.attachments.length > 0
                            ? 
                            <img className="attachment-icon" src={attachmentIcon} alt="attachment icon"></img>
                            : ""
                        }
                    </div>
                    <div className="sent-at">
                        {renderTime(props["sent_at"])}
                    </div>
                    <img className="open-icon" src={openArrow} alt="open email icon"></img>
                </div>
                <div className="sender">{renderSenderEmail(props.sender)}</div>
                <div className="body"></div>
            </div>
        </div>
    )
}