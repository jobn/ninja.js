//@flow
import React, { Component } from 'react';
import DataTable from './DataTable';
import './App.css';

export type rows = Array<{ name1: string, email: string, per_id: number, edit_path: string  }>

type Props = {
  rows: rows,
  rowsPerPage: number,
  locale: 'da' | 'en',
}

class App extends Component<Props> {
  static defaultProps = {
    locale: 'da',
    rowsPerPage: 5,
    rows: [],
  }

  render() {
    const { rows, rowsPerPage, locale } = this.props;
    return (
      <div className="container mt-3">
        <DataTable rows={rows} locale={locale} rowsPerPage={rowsPerPage} />
      </div>
    );
  }
}

export default App;
