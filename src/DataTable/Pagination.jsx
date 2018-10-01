import React from 'react'

import Page from './Page'

const Pagination = ({ currentPageNumber, totalNumberOfPages, onChange }) => {
  const pages = Array.from(Array(totalNumberOfPages).keys());
  if (pages.length <= 1) {
    return null
  }
  return(
    <ul className="pagination">
      {
        pages.map(pageNumber => {
          return <Page
            key={pageNumber}
            isActive={currentPageNumber === pageNumber}
            pageNumber={pageNumber + 1}
            onChange={(event) => {
              event.preventDefault();
              onChange(pageNumber);
            }} />
        })
      }
    </ul>
  )
}

export default Pagination
