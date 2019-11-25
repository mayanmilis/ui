import React, { Component } from 'react';
import moment from 'moment';
import './Message.scss';

class Message extends Component {
    state ={

    }

    render() {
        const { date, img, first_name, last_name, message_content, read } = this.props;
        let image = img;
        image = true;
        return(
            <div className={ read==="true" ? "message_container_read" : "message_container_not_read"}>
                <div className="img_container">
                    { image ? <div className="img"></div> : first_name[0].toUpperCase() }
                </div>
                <div className="details_container">
                    <div className="message_header_container">
                        <div className="name">{ first_name }</div>
                        <div className="name">{ last_name }</div>
                        <div className="date">{ moment(date).startOf('hour').fromNow() }</div>
                    </div>
                    <div className="body_container">
                        <div className="content">{ message_content }</div>
                    </div>
                    <div className="action_buttons">
                        <button className="arrow"></button>
                        <button className="settings"></button>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Message