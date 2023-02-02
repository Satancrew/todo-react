import React from 'react';
import './todo-list-item.css';

export default class TodoListItem extends React.Component {


  onLabelClick = () => {
    console.log(`Done: ${this.props.label}`);
  }

  render() {
    const { label, important } = this.props;

    const style = {
      color: important ? 'steelblue' : 'black',
      fontWeight: important ? 'bold' : 'normal',
    };

    return (
      <span className='todo-list-item'>
        <span
          className='todo-list-item-label'
          style={style}
          onClick={this.onLabelClick}>
          {label}
        </span>
        <div className='btn-todo-group'>
          <button
            type='button'
            className='btn btn-outline-success btn-sm float-right'>
            +
          </button>
          <button
            type='button'
            className='btn btn-outline-danger btn-sm float-right'>
            -
          </button>
        </div>
      </span>
    );
  }
}

// const TodoListItemFunc = ({ label, important = false }) => {
//   const style = {
//     color: important ? 'steelblue' : 'black',
//     fontWeight: important ? 'bold' : 'normal',
//   };

//   return (
//     <span className='todo-list-item'>
//       <span className='todo-list-item-label' style={style}>
//         {label}
//       </span>
//       <button type='button' className='btn btn-outline-success btn-sm float-right'>
//         <i className='fa fa-exclamation' />
//       </button>
//       <button type='button' className='btn btn-outline-danger btn-sm float-right'>
//         <i className='fa fa-trash-o' />
//       </button>
//     </span>
//   );
// };
