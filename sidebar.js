import React from 'react';

class Sidebar extends React.Component {
  render() {
    return (
      <div className={this.props.expanded ? "sidebar sidebar--expanded" : "sidebar"} onClick={this.props.toggleSidebar} >
        <span className="shape"></span>
        <span className="shape"></span> 
      </div>
    )
  }
}
export default Sidebar;

// class Appd extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       expanded: false
//     }
//   }

//   toggleSidebar() {
//     this.setState({
//       expanded: !this.state.expanded
//     })
//   }

//   render() {
//     return (
//       <main>
//         <Sidebar toggleSidebar={this.toggleSidebar.bind(this)} expanded={this.state.expanded} />
//         <MainContent expanded={this.state.expanded} />
//       </main>
//     );
//   }
// }



// ReactDOM.render(<App />, document.querySelector('#app'));