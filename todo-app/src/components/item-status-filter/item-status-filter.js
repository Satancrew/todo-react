import React from 'react';
import './item-status-filter.css';

export default class ItemStatusFilter extends React.Component {
  render() {
    const { onChecked } = this.props;

    return (
      <div className='btn-group'>
        <button
          type='button'
          className='btn btn-outline-secondary active'
          onClick={onChecked('all')}>
          All
        </button>
        <button
          type='button'
          className='btn btn-outline-secondary'
          onClick={onChecked('active')}>
          Active
        </button>
        <button
          type='button'
          className='btn btn-outline-secondary'
          onClick={onChecked('done')}>
          Done
        </button>
      </div>
    );
  }
}
