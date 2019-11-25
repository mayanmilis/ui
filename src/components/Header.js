import React, { Component } from 'react';
import './Header.scss';

class Header extends Component {
    state ={

    }

    render() {
        const { sidebarToggle, sidebarOpen } = this.props;
        return(
            <div className="header_container">
                <div className="left">
                    { sidebarOpen ? <div className="sidebar_open"></div> : "" }
                    <div className="hamburger" onClick={sidebarToggle}></div>
                    <div className="search"></div>
                </div>
                <div className="right">
                    <button className="add_project">
                        <div>+</div>
                        <div>Add project</div>
                        </button>
                    <div className="message_icon"></div>
                    <div className="notifications">
                        <div className="number">6</div>
                        <div className="icon"></div>
                    </div>
                    <div className="avatar"></div>
                    <div className="arror_down"></div>
                </div>
            </div>
        )
    }
}

export default Header