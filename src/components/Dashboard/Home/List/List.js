import React, { Component } from 'react';
import './List.scss';
import Item from './Item';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        let { type, title, data, tasks_length, tasks_late, new_messages, activity_length } = this.props;
        return(
            <div className="list">
                <div className="header">
                    <div className="title">{ title }</div>
                    <div className="notifications_container">
                        { tasks_length ? <div className="notification">{ tasks_length }</div> : null}
                        { tasks_late ? <div className="notification" id="tasks_late">{ tasks_late }</div> : null}
                        { new_messages ? <div className="notification">{ new_messages }</div> : null}
                        { activity_length ? <div className="notification">{ activity_length }</div> : null}
                    </div>
                </div>
                <div className="items_container">
                    <ul>
                        {data&&data.map( item => {
                            return(
                                <li>
                                    <Item
                                    type={type}
                                    item={item}
                                    />
                                </li>
                            )
                        }).slice(0,4)}
                    </ul>
                </div>
            </div>
        )
    }
}

export default List