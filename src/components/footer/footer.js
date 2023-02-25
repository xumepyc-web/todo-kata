import React, { Component } from 'react';
import '../footer/footer.css';
import PropTypes from 'prop-types';

import TaskFilter from '../task-filter/task-filter';

export default class Footer extends Component {
  static defaultProps = {
    filter: 'all',
    itemsLeft: 0,
    onFilterChange: () => {},
    delCompleteItems: () => {},
  };

  static propTypes = {
    todoCount: PropTypes.number,
    filter: PropTypes.string,
    onFilterChange: PropTypes.func,
    delCompleteItems: PropTypes.func,
  };

  render() {
    const { itemsLeft, filter, onFilterChange, onClearCompleted } = this.props;
    return (
      <footer className="footer">
        <span className="todo-count">{itemsLeft}</span>
        <TaskFilter onFilterChange={onFilterChange} filter={filter} />
        <button onClick={onClearCompleted} className="clear-completed">
          Clear completed
        </button>
      </footer>
    );
  }
}
