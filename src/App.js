import React, { Component } from 'react';
import { BrowserRouter, Redirect } from "react-router-dom";
import Dashboard from './components/Dashboard';
import Sidebar from './components/Sidebar';
import './App.css';

class App extends Component {
  state = {
    sidebarOpen: false,
    current_component: ''
}

componentDidMount() {
  this.current_component();
}
current_component = () => {
  let url = window.location.href;
  let current_component = url.slice(url.lastIndexOf('/')+1);
  console.log(current_component)
  this.setState({
      current_component: current_component
  })
}

sidebarToggle = () => {
    this.setState({
        sidebarOpen: !this.state.sidebarOpen
    })
}
  render() {
    console.log(this.state.current_component)
    if(!this.state.sidebarOpen) {
      return (
        <BrowserRouter>
        <div className="app_container">
          <Dashboard
          sidebarToggle={ this.sidebarToggle }
          sidebarOpen={ this.state.sidebarOpen }
          current_component={ this.state.current_component }
          />
          <Sidebar
          className="close_sidebar_container"
          current_component={ this.state.current_component }
          />
        </div>
        </BrowserRouter>
  );
    }else {
      return (
        <BrowserRouter>
        <div className="app_container">
          <Dashboard
          sidebarToggle={ this.sidebarToggle }
          sidebarOpen={ this.state.sidebarOpen }
          current_component={ this.state.current_component }
          />
          <Sidebar
          className="open_sidebar_container"
          current_component={ this.state.current_component }
          current_component_function={ this.current_component }
          />
        </div>
        </BrowserRouter>

  );
    }
  }

}

export default App;
