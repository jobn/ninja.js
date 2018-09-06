import React, { Component } from 'react'

import Pagination from './Pagination'
import Row from './Row'
import Search from './Search'

class DataTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rows: this.props.rows,
      currentPageNumber: 0,
      totalNumberOfPages: this.calculateTotalNumberOfPages(this.props.rows)
    }
  }

  calculateTotalNumberOfPages = (rows) => {
    if (this.props.rowsPerPage === 0) return 0
    return Math.ceil(rows.length / this.props.rowsPerPage)
  }

  search = (event) => {
    const text = event.target.value
    let rowsFound = this.props.rows

    if (text) {
      rowsFound = this.props.rows.filter((row) => {
        return row.name1.toLowerCase().search(text.toLowerCase()) > -1 ||
         (row.email && row.email.toLowerCase().search(text.toLowerCase()) > -1)
      })
    }

    this.setState({
      rows: rowsFound,
      currentPageNumber: 0,
      totalNumberOfPages: this.calculateTotalNumberOfPages(rowsFound)
    })
  }

  changeToPageNumber = (pageNumber) =>{
    this.setState({ currentPageNumber: pageNumber })
  }

  rowsInPageNumber = (pageNumber) => {
    const { rowsPerPage } = this.props
    const startIndex = pageNumber * rowsPerPage
    return [startIndex, startIndex + rowsPerPage]
  }

  render() {
    const { rows, currentPageNumber, totalNumberOfPages } = this.state
    const rowsToRender = rows
      .map(row => <Row key={row.per_id} row={row} />)
      .slice(...this.rowsInPageNumber(currentPageNumber))

    return(
      <div>
        <Search onSearch={ (e) => this.search(e) } />
        <table>
          <tbody>
            { rowsToRender }
          </tbody>
        </table>
        <Pagination
          currentPageNumber={currentPageNumber}
          totalNumberOfPages={totalNumberOfPages}
          onChange={ (event) => this.changeToPageNumber(event)} />
      </div>
    )
  }
}

export default DataTable
