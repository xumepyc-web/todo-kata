import React, { Component } from 'react';
import '../task-filter/task-filter.css';
import PropTypes from 'prop-types';

export default class TasksFilter extends Component {
  static propsTypes = {
    filter: PropTypes.string.isRequired,
    onFilterChange: PropTypes.func.isRequired,
  };

  buttons = [
    { name: 'all', label: 'All' },
    { name: 'active', label: 'Active' },
    { name: 'completed', label: 'Completed' },
  ];

  render() {
    const { filter, onFilterChange } = this.props;

    const buttons = this.buttons.map(({ name, label }) => {
      const isActive = filter === name;
      const clazz = isActive ? 'selected' : '';
      return (
        <button key={name} className={clazz} onClick={() => onFilterChange(name)}>
          {label}
        </button>
      );
    });

    return (
      <ul className="filters">
        <li>{buttons}</li>
      </ul>
    );
  }
}
