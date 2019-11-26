import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './Sidebar.scss';

class Sidebar_item extends Component {
    constructor(props) {
        super(props);
        
        this.state ={
            is_active: ''
        }
    }

    render() {
        const { title, current_component, click, className } = this.props;
        if(title.toLowerCase()===current_component) {
            return(
                <div className="item" onClick={click}>
                    <div className="active"></div>
                    <div className={ className }></div>
                    <Link to={ "/"+title.toLowerCase() }><div className="text">{ title }</div></Link>
                </div>
            )
        }else{
            return(
                <div className="item" onClick={click}>
                    <div className="inactive"></div>
                    <div className={ className }></div>
                    <Link to={ "/"+title.toLowerCase() }><div className="text">{ title }</div></Link>
                </div>
            )
        }
    }
}

export default Sidebar_item