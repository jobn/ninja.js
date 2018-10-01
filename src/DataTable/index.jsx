//@flow
import React from 'react'
import memoizeOne from 'memoize-one';
import  DataTable from './Datatable';

import type { rows } from '../App.js';

type Props = {
  rowsPerPage: number,
  locale: 'da' | 'en',
  rows: rows,
}

type State = {
  rows: rows,
  searchTerm: string,
  currentPageNumber: number,
}

class DataTableContainer extends React.PureComponent<Props, State> {
  state = {
    rows: this.props.rows,
    searchTerm: '',
    currentPageNumber: 0,
  }

  static defaultProps = {
    rowsPerPage: 40,
    rows: [],
  }

  calculateTotalNumberOfPages(rowsLength: number) {
    const { rowsPerPage } = this.props;
    if (rowsPerPage === 0) return 0;
    return Math.ceil(rowsLength / rowsPerPage);
  }

  search = (event: { target: { value: string } }) => {
    const searchTerm = event.target.value;
    this.setState({ searchTerm });
  }

  filterResult = memoizeOne((rows, searchTerm) =>
    searchTerm ? rows.filter(({ name1 = '', email = '' }) => name1.includes(searchTerm) || email.toUpperCase().includes(searchTerm.toUpperCase()) ) :  rows 
  ); 

  changeToPageNumber = (pageNumber: number) => {
    this.setState({ currentPageNumber: pageNumber });
  }

  renderResult = (rows: rows): rows => {
    const { props: { rowsPerPage }, state: { currentPageNumber  } } = this;
    const startIndex = currentPageNumber * rowsPerPage
    const visibleSlice = [startIndex, startIndex + rowsPerPage]
    return rows.slice(...visibleSlice);
  }

  render() {
    const { currentPageNumber, searchTerm, rows } = this.state
    const filteredRows = this.filterResult(rows, searchTerm);
    const totalNumberOfPages = this.calculateTotalNumberOfPages(filteredRows.length);
    return(
      <DataTable 
        searchTerm={searchTerm}
        onChange={this.changeToPageNumber} 
        searchHandler={this.search} 
        rows={this.renderResult(filteredRows)} 
        currentPageNumber={currentPageNumber} 
        totalNumberOfPages={totalNumberOfPages} 
      />
    )
  }
}

export default DataTableContainer;
