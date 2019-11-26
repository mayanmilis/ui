import React, { Component } from 'react';
import Task from './Task';
import Message from './Message';
import Activity from './Activity';

class Item extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { type, item } = this.props;
        if(type==="Tasks") {
            return(
                <div>
                    <Task
                    id={ item.id }
                    title={ item.title }
                    date={ item.date }
                    img= { item.img }
                    />
                </div>
            )
        }
        else if(type==="Messages") {
            return(
                <div>
                    <Message
                    id={ item.id }
                    date={ item.date }
                    img= { item.img }
                    first_name={item.first_name }
                    last_name={ item.last_name }
                    message_content={item.message_content}
                    read={ item.read }
                    />
                </div>
            )
        }
        else {
            return(
                <div>
                    <Activity
                    id={ item.id }
                    date={ item.date }
                    img= { item.img }
                    first_name={item.first_name }
                    last_name={ item.last_name }
                    activity_description={item.activity_description}
                    project_name={item.project_name}
                    />
                </div>
            )
        }
    }
}

export default Item