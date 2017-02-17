import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

var Timer = React.createClass({
   render: function() {
     if (this.props.time == 0) {
       document.getElementById('end-of-time').play()
        alert("Time Over!!")
       
     }
     if (this.props.time == null || this.props.time == 0) return <div/>
     return <h1>Time left: {this.props.time}</h1>
    }
})

var Wrapper = React.createClass({
  getInitialState: function () {
    return {time: null, int: null}
  },
  startTimer: function (time) {
    clearInterval(this.state.int)
    var _this= this
    var int = setInterval(function() {
      var tl = _this.state.time - 1
      if (tl == 0) clearInterval(int)
      _this.setState({time: tl})
    }, 1000)
    return this.setState({time: time, int: int})
  },
  render: function() {
    return (
      <div id="sam">
        <div id="button-group">
        <h2>For 5 seconds</h2>
          <Button time="5" startTimer={this.startTimer}></Button>
        <h2>For 10 Seconds</h2>
          <Button time="10" startTimer={this.startTimer}/>
        <h2>For 15 Seconds</h2>
          <Button time="15" startTimer={this.startTimer}/>
          <h1>  </h1>
        </div>
        <Timer time={this.state.time}/>
      <audio id="end-of-time" src="alert.wav" preload="auto"></audio>
      </div>
    );
  }
})

var Button = React.createClass({
  startTimer: function (e) {
    return this.props.startTimer(this.props.time)
  },
  render: function () {
    return <button type="button" onClick={this.startTimer}>
      {this.props.time} seconds
    </button>
  }
})
class Heading extends React.Component {
  render() {
    return <h1>
      <img src="timer.png" height="27"/>
    Timer-App</h1>
    ;      <img src="timer.png" height="27"/>

  }
}
ReactDOM.render(< Wrapper />, document.getElementById('root'))  
ReactDOM.render(< Heading />, document.getElementById('sam'))