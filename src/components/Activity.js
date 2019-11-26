import React, { Component } from 'react';
import moment from 'moment';
import './Activity.scss';

class Activity extends Component {
    state ={

    }

    render() {
        const { date, img, first_name, last_name, activity_description, project_name } = this.props;
        let image = img;
        image = true;
        return(
            <div className="activity_container">
                <div className="img_container">
                    { image ? <div className="img"></div> : first_name[0].toUpperCase() }
                </div>
                <div className="details_container">
                    <div className="activity_header_container">
                        <div className="name">{ first_name } { last_name }</div>
                        <div className="activity_description">{ activity_description }</div>
                        <div className="project_name">{ project_name }</div>
                    </div>
                    <div className="activity_body_container">
                        <div>{ moment(date).startOf('hour').fromNow() }</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Activity