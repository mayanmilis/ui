import React, { Component } from 'react';
import './Graph.scss';

class Graph extends Component {
    state ={

    }

    render() {
        const { title, type } = this.props;
        return(
            <div className={ type }>
                <div className="header">
                    <div className="title">{ title }</div>
                    <div className="select_container">
                        <div className="select_title">Period:</div>
                        <select>
                            <option value="0">Last Year</option>
                            <option value="1">Last Year</option>
                            <option value="2">Last Year</option>
                        </select>
                    </div>
                </div>
            </div>
        )
    }
}

export default Graph