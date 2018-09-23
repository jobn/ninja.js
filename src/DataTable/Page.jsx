import React from 'react'
import PropTypes from 'prop-types'

const Page = ({ pageNumber, currentPageNumber, onChange }) => {
  let buttonClass = 'page-link'
  if (isActivePage()) buttonClass += ' button-outline'

  function isActivePage() {
    return currentPageNumber === pageNumber
  }

  function renderedPageNumber() {
    return pageNumber + 1
  }

  function handleClick (event) {
    event.preventDefault()
    onChange(pageNumber)
  }

  return(
    <li className="page-item mar-right-s">
      <button className={buttonClass} onClick={handleClick} >{renderedPageNumber()}</button>
    </li>
  )
}

Page.propTypes = {
  pageNumber: PropTypes.number.isRequired,
  currentPageNumber: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired
}

export default Page
