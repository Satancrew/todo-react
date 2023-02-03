import React from 'react';
import './search-panel.css';

export default class SearchPanel extends React.Component {
  constructor() {
    super();
    this.state = {
      term: '',
    };
  }

  onSearchChange = ev => {
    const term = ev.target.value;
    this.setState({ term });
    this.props.onSearchChange(term);
  };

  render() {
    return (
      <input
        type='text'
        className='form-control search-input'
        placeholder='Search'
        value={this.state.term}
        onChange={this.onSearchChange}
      />
    );
  }
}
