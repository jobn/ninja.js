import React, { Component } from 'react';
import DataTable from './DataTable';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container mar-top-l">
        <DataTable rows={this.props.rows} locale="da" rowsPerPage={5} />
      </div>
    );
  }
}

export default App;
