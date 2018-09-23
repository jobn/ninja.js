import React from 'react'
import PropTypes from 'prop-types'

import Pagination from './Pagination'
import Row from './Row'
import Search from './Search'

class DataTable extends React.Component {
  state = {
    rows: this.props.rows,
    currentPageNumber: 0,
    totalNumberOfPages: this.calculateTotalNumberOfPages(this.props.rows)
  }

  static defaultProps = {
    rowsPerPage: 40
  }

  search = this.search.bind(this);
  changeToPageNumber = this.changeToPageNumber.bind(this);

  calculateTotalNumberOfPages(rows) {
    const { rowsPerPage } = this.props
    if (rowsPerPage == 0) return 0
    return Math.ceil(rows.length / rowsPerPage)
  }

  search(event) {
    const { rows } = this.props
    const text = event.target.value
    let rowsFound = rows

    if (text) {
      const textFormatted = text.toLowerCase();

      rowsFound = rows.filter((row) => {
        const nameFound = row.name && row.name.toLowerCase().search(textFormatted) > -1
        const emailFound = row.email && row.email.toLowerCase().search(textFormatted) > -1
        return nameFound || emailFound
      })
    }

    this.setState({
      rows: rowsFound,
      currentPageNumber: 0,
      totalNumberOfPages: this.calculateTotalNumberOfPages(rowsFound)
    })
  }

  changeToPageNumber(pageNumber) {
    this.setState({ currentPageNumber: pageNumber })
  }

  rowsInPageNumber(pageNumber) {
    const { rowsPerPage } = this.props
    const startIndex = pageNumber * rowsPerPage
    return [startIndex, startIndex + rowsPerPage]
  }

  render() {
    const { rows, currentPageNumber, totalNumberOfPages } = this.state
    const rowsToRender = rows
      .slice(...this.rowsInPageNumber(currentPageNumber))
      .map((row) => {return <Row key={row.perId} row={row} />})

    return(
      <div>
        <Search onSearch={this.search} />
        <table>
          <tbody>
            {rowsToRender}
          </tbody>
        </table>
        <Pagination
          currentPageNumber={currentPageNumber}
          totalNumberOfPages={totalNumberOfPages}
          onChange={this.changeToPageNumber} />
      </div>
    )
  }
}

DataTable.PropTypes = {
  rows: PropTypes.array.isRequired,
  rowsPerPage: PropTypes.number.isRequired
}

export default DataTable
