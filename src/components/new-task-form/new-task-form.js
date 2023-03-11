import React, { Component } from 'react';
import '../new-task-form/new-task-form.css';

export default class NewTaskForm extends Component {
  state = {
    label: '',
    sec: '',
    min: '',
  };

  onLabelChange = (event) => {
    const name = event.target.name;
    const target = event.target;
    this.setState({
      [name]: target.value,
    });
  };

  onSubmit = (event) => {
    event.preventDefault();
    this.props.addTask(this.state.label);
    this.setState({
      label: '',
      sec: '',
      min: '',
    });
  };

  render() {
    return (
      <form className="new-todo-form" onSubmit={this.onSubmit}>
        <input
          className="new-todo"
          name="label"
          placeholder="What needs to be done?"
          onChange={this.onLabelChange}
          value={this.state.label}
          autoFocus
        />
        <input
          name="min"
          className="new-todo-form__timer"
          placeholder="Min"
          autoFocus
          onChange={this.onLabelChange}
          value={this.state.min}
        />
        <input
          name="sec"
          className="new-todo-form__timer"
          placeholder="Sec"
          autoFocus
          onChange={this.onLabelChange}
          value={this.state.sec}
        />
        <input className="submit" type="submit" />
      </form>
    );
  }
}
