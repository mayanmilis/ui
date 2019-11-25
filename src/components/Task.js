import React, { Component } from 'react';
import moment from 'moment';
import './Task.scss';

class Task extends Component {
    state ={

    }

    render() {
        const { title, date, img } = this.props;
        let late = moment(date).startOf('hour').fromNow().includes("ago");
        let image = img;
        image = false;
        console.log(title)
        return(
            <div className="task_container">
                <div className="img_container">
                { image ? <div className="img"></div> : title[0].toUpperCase() }
                </div>
                <div className="details_container">
                    <div className="task_header_container">
                        <div>{ title }</div>
                    </div>
                    <div className="body_container">
                        { late ? <div className="clock_late"></div> : <div className="clock"></div> }
                        { late ? <div className="date_late">{ moment(date).startOf('hour').fromNow() }</div> : <div className="date">{ moment(date).startOf('hour').fromNow() }</div> }
                    </div>
                </div>
                <div className="action_buttons">
                    <button></button>
                </div>
            </div>
        )
    }
}

export default Task