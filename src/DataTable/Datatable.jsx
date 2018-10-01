import React from 'react';
import Pagination from './Pagination'
import Row from './Row'
import Search from './Search'

export default function DataTable({ searchTerm, searchHandler, rows, currentPageNumber, totalNumberOfPages, onChange }) {
  return (
    <div>
      <Search onChange={searchHandler} value={searchTerm} />
      <table>
        <tbody>
          { rows.map(row => <Row key={row.per_id} row={row} />) }
        </tbody>
      </table>
      <Pagination
        currentPageNumber={currentPageNumber}
        totalNumberOfPages={totalNumberOfPages}
        onChange={onChange} />
    </div>
  );
}