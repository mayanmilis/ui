import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import Header from './Header';
import './Dashboard.scss';
import Home from './Home/Home';

class Dashboard extends Component {

    render() {
        const { sidebarToggle, sidebarOpen, current_component } = this.props;
        if(!current_component) return <Redirect to="/home" />
        if(!sidebarOpen) {
            return(
                <div className="dashboard_container_close_sidebar">
                    <Header
                    sidebarToggle={ sidebarToggle }
                    sidebarOpen={ sidebarOpen }
                    />
                    <Route exact path="/" component={ Home }/>              
                    <Route path="/home" component={ Home }/>              
                </div>
            )
        }else{
            return (
                <div className="dashboard_container_open_sidebar">
                    <Header
                    sidebarToggle={ sidebarToggle }
                    sidebarOpen={ sidebarOpen }
                    />      
                    <Route exact path="/" component={ Home }/>              
                    <Route path="/home" component={ Home }/>                            
                </div>
              );
        }

    }

}

export default Dashboard;
