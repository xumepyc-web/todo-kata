import React, { Component } from 'react';
import '../task/task.css';
import { formatDistanceToNow } from 'date-fns';

export default class Task extends Component {
  render() {
    const { label, deleteItem, onToggleDone, done, del, time } = this.props;

    let classNames = '';

    if (done) {
      classNames += 'completed';
    }

    if (del) {
      classNames = 'editing';
    }

    return (
      <li className={classNames}>
        <div className="view">
          <input className="toggle" type="checkbox" onClick={onToggleDone} />
          <label>
            <span className="description">{label}</span>
            <span className="created">created {formatDistanceToNow(time)} ago</span>
          </label>
          <button className="icon icon-edit"></button>
          <button className="icon icon-destroy" onClick={deleteItem}></button>
        </div>
      </li>
    );
  }
}
