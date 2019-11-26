import React, { Component } from 'react';
import './Sidebar.scss';
import Sidebar_item from './Sidebar_item';

class Sidebar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { className, current_component, current_component_function } = this.props;
        return(
            <div className={ className }>
                <div className="logo_container">
                    <div className="logo"></div>
                </div>
                <hr/>
                <div className="menu_list">
                    <Sidebar_item
                    title="Home"
                    current_component={ current_component }
                    click={() => current_component_function() }
                    className="home"
                    />
                    <hr/>
                    <Sidebar_item
                    title="Workflow"
                    current_component={ current_component }
                    click={() => current_component_function() }
                    className="workflow"
                    />
                    <hr/>
                    <Sidebar_item
                    title="Statistics"
                    current_component={ current_component }
                    click={() => current_component_function() }
                    className="statistics"
                    />
                    <hr/>
                    <Sidebar_item
                    title="Calendar"
                    current_component={ current_component }
                    click={() => current_component_function() }
                    className="calendar"
                    />
                    <hr/>
                    <Sidebar_item
                    title="Users"
                    current_component={ current_component }
                    click={() => current_component_function() }
                    className="users"
                    />
                    <hr/>
                    <Sidebar_item
                    title="Settings"
                    current_component={ current_component }
                    click={() => current_component_function() }
                    className="settings"
                    />
                </div>
            </div>
        )
    }
}

export default Sidebar