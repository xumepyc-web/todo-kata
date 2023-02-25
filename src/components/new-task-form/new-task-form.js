import React, { Component } from 'react';
import '../new-task-form/new-task-form.css';

export default class NewTaskForm extends Component {
  state = {
    label: '',
  };

  onLabelChange = (event) => {
    this.setState({
      label: event.target.value,
    });
  };

  onSubmit = (event) => {
    event.preventDefault();
    this.props.addTask(this.state.label);
    this.setState({
      label: '',
    });
  };

  render() {
    return (
      <form className="header" onSubmit={this.onSubmit}>
        <input
          placeholder="What needs to be done?"
          autoFocus
          className="new-todo"
          onChange={this.onLabelChange}
          value={this.state.label}
        />
      </form>
    );
  }
}
