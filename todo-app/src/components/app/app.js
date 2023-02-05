import React from 'react';
// import ReactDOM from 'react-dom';

import AppHeader from '../app-header/app-header';
import ItemAddForm from '../item-add-form/item-add-form';
import ItemStatusFilter from '../item-status-filter/item-status-filter';
import SearchPanel from '../search-panel/search-panel';
import TodoList from '../todo-list/todo-list';

import './app.css';

export default class App extends React.Component {
  constructor() {
    super();
    this.maxId = 100;
    this.state = {
      todoData: [
        this.createTodoItem('Drink Coffee'),
        this.createTodoItem('Make Awesome App'),
        this.createTodoItem('Have a lunch'),
        this.createTodoItem('Sleep'),
      ],
      term: '',
      filter: 'all',
    };
  }

  createTodoItem = label => {
    return {
      label,
      important: false,
      done: false,
      id: this.maxId++,
    };
  };

  DeleteItem = id => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex(el => el.id === id);

      const before = todoData.slice(0, idx);
      const after = todoData.slice(idx + 1);

      const newArray = [...before, ...after];

      return {
        todoData: newArray,
      };
    });
  };

  AddItem = text => {
    const newItem = this.createTodoItem(text);
    this.setState(({ todoData }) => {
      const newArray = [...todoData, newItem];
      return {
        todoData: newArray,
      };
    });
  };

  toggleProperty(arr, id, propName) {
    const idx = arr.findIndex(el => el.id === id);

    const oldItem = arr[idx];
    const newItem = { ...oldItem, [propName]: !oldItem[propName] };

    const newArray = [...arr.slice(0, idx), newItem, ...arr.slice(idx + 1)];

    return newArray;
  }

  onToggleImportant = id => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'important'),
      };
    });
  };

  onToggleDone = id => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'done'),
      };
    });
  };

  checkStatus = (items, filter) => {
    switch (filter) {
      case 'all':
        return items;
      case 'active':
        return items.filter(el => !el.done);
      case 'done':
        return items.filter(el => el.done);
      default:
        return items;
    }
  };

  search(items, term) {
    if (term.length === 0) {
      return items;
    }

    return items.filter(el => {
      return el.label.toUpperCase().indexOf(term.toUpperCase()) > -1;
    });
  }

  onSearchChange = term => {
    this.setState({ term });
  };
  
  onFilterChange = filter => {
    this.setState({ filter });
  };

  render() {
    const { todoData, term, filter } = this.state;
    const doneCount = todoData.filter(el => el.done).length;
    const notDoneCount = todoData.filter(el => !el.done).length;
    const visibleItems = this.checkStatus(this.search(todoData, term), filter);
    return (
      <div className='todo-app'>
        <AppHeader toDo={notDoneCount} done={doneCount} />
        <div className='top-panel d-flex'>
          <SearchPanel onSearchChange={this.onSearchChange} />
          <ItemStatusFilter
            filter={filter}
            onFilterChange={this.onFilterChange}
          />
        </div>
        <TodoList
          todos={visibleItems}
          onDeleted={this.DeleteItem}
          onToggleImportant={this.onToggleImportant}
          onToggleDone={this.onToggleDone}
        />
        <ItemAddForm onItemAdded={this.AddItem} />
      </div>
    );
  }
}
