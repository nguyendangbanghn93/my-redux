
import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import News from './components/News/News';
import { connect } from 'react-redux';
//this.duLieu.props
 class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        {this.props.duLieu}
        <News/>
      </div>
    )
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    duLieu: state.num
  }
}
export default connect(mapStateToProps)(App);