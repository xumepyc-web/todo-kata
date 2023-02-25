import React, { Component } from 'react';





import NewTaskForm from '../new-task-form/new-task-form';
import TaskList from '../task-list/task-list';
import Footer from '../footer/footer';
import './app.css';
export default class App extends Component {
  maxId = 100;
  state = {
    todoData: [],
    term: '',
    filter: 'all',
  };

  createTask(label) {
    return {
      label,
      done: false,
      id: this.maxId++,
      todoDate: new Date(),
    };
  }

  addTask = (text) => {
    const newItem = this.createTask(text);
    this.setState(({ todoData }) => {
      const newArr = [...todoData, newItem];
      return {
        todoData: newArr,
      };
    });
  };

  deleteItem = (id) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((el) => el.id === id);

      const before = todoData.slice(0, idx);
      const after = todoData.slice(idx + 1);

      const newArr = [...before, ...after];

      return {
        todoData: newArr,
      };
    });
  };




  onToggleDone = (id) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((el) => el.id === id);
      const oldItem = todoData[idx];
      const newItem = { ...oldItem, done: !oldItem.done };

      const newArr = [...todoData.slice(0, idx), newItem, ...todoData.slice(idx + 1)];

      return {
        todoData: newArr,
      };
    });
  };

  search(items, term) {
    if (term.length === 0) {
      return items;
    }

    return items.filter((el) => {
      return el.label.indexOf(term > -1);
    });
  }

  filter(items, filter) {
    switch (filter) {
      case 'all':
        return items;
      case 'active':
        return items.filter((el) => !el.done);
      case 'completed':
        return items.filter((el) => el.done);
      default:
        return items;
    }
  }

  onFilterChange = (filter) => {
    this.setState({ filter });
  };

  onClearCompleted = () => {
    this.setState(({ todoData }) => {
      const newArr = todoData.filter((el) => !el.done);
      return {
        todoData: newArr,
      };
    });
  };

  render() {
    const { todoData, term, filter } = this.state;
    const search = this.search(todoData, term);
    const visibleItems = this.filter(this.search(todoData, term), filter);
    const doneCount = todoData.filter((el) => el.done).length;

    const itemsLeftCount = todoData.length - doneCount;

    return (
      <section className="todoapp">
        <h1>todos</h1>
        <NewTaskForm addTask={this.addTask} />
        <section className="main">
          <TaskList todos={visibleItems} deleteItem={this.deleteItem} onToggleDone={this.onToggleDone} />
          <Footer
            itemsLeft={itemsLeftCount}
            filter={filter}
            onFilterChange={this.onFilterChange}
            onClearCompleted={this.onClearCompleted}
            search={search}
          />
        </section>
      </section>
    );
  }
}
