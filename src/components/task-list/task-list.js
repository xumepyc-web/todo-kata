import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../task-list/task-list.css';
import Task from '../task/task';

export default class TaskList extends Component {
  static defaultProps = {
    deleteItem: () => {},
    onToggleDone: () => {},
  };

  static propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object).isRequired,
    deleteItem: PropTypes.func,
    onToggleDone: PropTypes.func,
  };

  render() {
    const { todos, onToggleDone, deleteItem } = this.props;

    const elements = todos.map((el) => {
      const { todoDate, id, ...itemProps } = el;
      return (
        <span key={id}>
          <Task
            {...itemProps}
            onToggleDone={() => onToggleDone(id)}
            deleteItem={() => deleteItem(id)}
            time={todoDate}
            id={id}
          />
        </span>
      );
    });
    return <ul className="todo-list">{elements}</ul>;
  }
}
