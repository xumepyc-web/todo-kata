import React, { Component } from 'react';
import './timer.css';

export default class Timer extends Component {
  sec = 0;
  min = 0;
  state = {
    start: false,
    pause: true,
    second: 0,
    minute: 0,
  };
  componentDidMount() {
    this.setState({
      second:
        localStorage.getItem(`second${this.props.id}`) === null ? 0 : localStorage.getItem(`second${this.props.id}`),
    });
  }

  updateTimer = () => {
    if (this.state.start) {
      localStorage.setItem(`second${this.props.id}`, `${this.state.second}`);
      this.setState(({ second }) => {
        return {
          second: Number(second) + 1,
        };
      });
      if (this.state.second === 59) {
        this.sec = 0;
        this.min++;
        this.setState({
          second: this.sec,
          minute: this.min,
        });
      }
    }
  };
  onPlay = () => {
    if (this.state.pause) {
      this.interval = setInterval(this.updateTimer, 1000);
    }
    this.setState({
      start: true,
      pause: false,
    });
  };

  onPause = () => {
    clearInterval(this.interval);
    this.setState({
      start: false,
      pause: true,
    });
  };

  render() {
    const { second, minute } = this.state;
    const min = minute >= 10 ? minute : `0${minute}`;
    const sec = second >= 10 ? second : `0${second}`;
    return (
      <span className="description">
        <button className="icon icon-play" onClick={this.onPlay}></button>
        <button className="icon icon-pause" onClick={this.onPause}></button>
        {`${min}:${sec}`}
      </span>
    );
  }
}
