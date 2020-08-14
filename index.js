import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import Sidebar  from './sidebar';
import MainContent from './MainContent'
import './style.scss';

class App extends Component {
 constructor(props) {
    super(props);
    this.state = {
      expanded: false
    }
  }

  toggleSidebar() {
    this.setState({
      expanded: !this.state.expanded
    })
  }

  render() {
    return (
      <main>
        <Sidebar toggleSidebar={this.toggleSidebar.bind(this)} expanded={this.state.expanded} />
        <MainContent expanded={this.state.expanded} />
      </main>
    );
  }
}

render(<App />, document.getElementById('root'));
