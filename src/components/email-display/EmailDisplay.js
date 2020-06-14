import React from 'react';
import moment from 'moment';
import './EmailDisplay.css';
import emailIcon from '../../assets/icon_mail_sp.svg';
import attachmentIcon from '../../assets/icon_clip.svg';
import openArrow from '../../assets/icon_arrow02.svg';



export default function EmailDisplay(props) {

    const subjectMaxLengthPhone = 45;
    const senderMaxLengthPhone = 40;
    const recipientMaxLengthPhone = 50;

    const renderTime = (date) => {
        const today = "2020/01/03"
        // normally dates wouldn't be hardcoded so I would compare with e.g. new Date() but for the purposes of this mockup, the dates are hardcoded

        if (date.split(" ")[0] === today) {
            return moment(date).format("H:mm");
        } else {
            return moment(date).format("MMM DD");
        }
        
    }

    const renderSubject = (text) => {
        if (text.length > subjectMaxLengthPhone) {
            return `${text.substring(0, subjectMaxLengthPhone)}...`
        } else {
            return text;
        }
    }
    
    const renderSenderEmail = (email) => {
        if (email.length > senderMaxLengthPhone) {
            return `${email.substring(0, senderMaxLengthPhone)}...`
        } else {
            return email;
        }
    }

    const renderRecipientEmails = (emailArray) => {
        
        const validateLength = (address) => {
            if (address.length > recipientMaxLengthPhone) {
                return `${address.substring(0, recipientMaxLengthPhone)}...`;
            } else {
                return address;
            }
        }

        // if only one recipient
        if (emailArray.length === 1) {
            return validateLength(emailArray[0]);
        }
        // else check that first recipient's address isn't over limit
        else if (emailArray[0].length < recipientMaxLengthPhone) {
            let string = "";
            emailArray.forEach((email, index) => {
                //if over limit
                if ((string.length + email.length) > recipientMaxLengthPhone) {
                    renderRecipientCount(emailArray.length - index);
                    return `${string}...`;
                }
                // if last email in array
                else if (index === emailArray.length - 1) {
                    return string;
                }
                // add email to string
                else {
                    index === 0
                        ? string += email
                        : string += `, ${email}`
                }
            })
        return string;
        }
        // if first recipient's email is over limit
        else {
            renderRecipientEmails(emailArray.length - 2);
            return validateLength(emailArray[0])
        }
    }

    const renderRecipientCount = (number) => {

    }

    console.log(renderRecipientEmails(props.props.to));
    return (
        <div className="grid-container">
            <div className="subject">{renderSubject(props.props.subject)}</div>
            <div className="icon">
                <img className="email-icon"
                    src={emailIcon}
                    alt="email icon"
                ></img>
            </div>
            <div className="to">{renderRecipientEmails(props.props.to)}
                </div>
            <div className="to-icon"></div>
            <div className="attach-icon-and-date">
                {props.props.attachments.length > 0
                    ? 
                    <img className="attachment-icon" src={attachmentIcon} alt="attachment icon"></img>
                    : ""
                }
                {renderTime(props.props["sent_at"])}
                <img className="open-icon" src={openArrow} alt="open email icon"></img>
            </div>
            <div className="sender">{renderSenderEmail(props.props.sender)}</div>
        </div>
    )
}