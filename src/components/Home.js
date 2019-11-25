import React, { Component } from 'react';
import moment from 'moment';
import './Home.scss';
import Graph from './Graph';
import List from './List';

class Home extends Component {
    state ={
        data: [],
        tasks_length: '',
        tasks_late: '',
        new_messages: ''
    }

    componentDidMount() {
        fetch('Data.json')
        .then(res => res.json())
        .then(json => {
            let tasks_length = json.tasks.length;
            let tasks_late = this.tasks_counter(json.tasks);
            let new_messages = this.new_messages(json.messages);
            let activity_length = json.activities.length;
            this.setState({
                is_loaded: true,
                data: json,
                tasks_length: tasks_length,
                tasks_late: tasks_late,
                new_messages: new_messages,
                activity_length: activity_length
            })
        });
    }

    tasks_counter = (arr) => {
        let late_counter = 0;
        for(let i=0; i < arr.length; i++) {
            if(moment(arr[i].date).startOf('hour').fromNow().includes("ago")) {
                late_counter++;
            }
        }
        return late_counter;
    }

    new_messages = (arr) => {
        let new_messages = 0;
        for(let i=0; i < arr.length; i++) {
            if(arr[i].read==="true") {
                new_messages++;
            }
        }
        return new_messages; 
    }

    render() {
        if(!this.state.data) {
            return(
                <div>
                    Please wait...
                </div>
            )
        }
        else {
            let data = this.state.data;
            console.log(this.state)
            return(
                <div className="home_container">
                    <div className="greeting">Hello John!</div>
                    <div className="graphs_container">
                        <Graph
                        type="sales"
                        title="Sales"
                        />
                        <Graph
                        type="report"
                        title="Report"
                        />
                    </div>
                    <div className="lists_container">
                        <List
                        type="Tasks"
                        title="Tasks"
                        data={ data.tasks }
                        tasks_length={ this.state.tasks_length }
                        tasks_late={ this.state.tasks_late }
                        />
                        <List
                        type="Messages"
                        title="Messages"
                        data={ data.messages }
                        new_messages={ this.state.new_messages }
                        />
                        <List
                        type="Activity"
                        title="Activity"
                        data={ data.activities }
                        activity_length= { this.state.activity_length }
                        />
                    </div>
                </div>
            )
        }
    }
}

export default Home