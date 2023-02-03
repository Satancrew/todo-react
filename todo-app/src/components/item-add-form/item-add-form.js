import React from 'react';

import './item-add-form.css';

export default class ItemAddForm extends React.Component {
  constructor() {
    super();
    this.state = {
      label: '',
    };
  }
  onLabelChange = ev => {
    this.setState({
      label: ev.target.value,
    });
  };

  onSubmit = ev => {
    ev.preventDefault();
    if (this.state.label !== '') {
      this.props.onItemAdded(this.state.label);
    }
    this.setState({
      label: '',
    });
  };

  render() {
    return (
      <form className='item-add-form d-flex' onSubmit={this.onSubmit}>
        <input
          className='form-control'
          type='text'
          onChange={this.onLabelChange}
          placeholder='What needs to be done?'
          value={this.state.label}
        />
        <button
          className='btn btn-outline-secondary'
          onClick={() => this.onSubmit}>
          Add
        </button>
      </form>
    );
  }
}
