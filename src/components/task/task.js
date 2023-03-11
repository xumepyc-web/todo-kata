import React, { Component } from 'react';
import { formatDistanceToNow } from 'date-fns';

import Timer from '../timer/timer';
import '../task/task.css';

export default class Task extends Component {
  render() {
    const { label, deleteItem, onToggleDone, done, del, time, id } = this.props;

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
            <span className="title">{label}</span>
            <Timer id={id} />
            <span className="description">created {formatDistanceToNow(time)} ago</span>
          </label>
          <button className="icon icon-edit"></button>
          <button className="icon icon-destroy" onClick={deleteItem}></button>
        </div>
      </li>
    );
  }
}
