import React from 'react'

import Page from './Page'

const Pagination = ({ currentPageNumber, totalNumberOfPages, onChange }) => {
  const pageNumbers =  Array.from(Array(totalNumberOfPages).keys())
  const pages = pageNumbers.map((pageNumber) => {
    return <Page
      key={pageNumber}
      currentPageNumber={currentPageNumber}
      pageNumber={pageNumber}
      onChange={onChange} />
  })

  if (pages.length <= 1) {
    return null
  }
  return(
    <ul className="pagination">
      {pages}
    </ul>
  )
}

export default Pagination
