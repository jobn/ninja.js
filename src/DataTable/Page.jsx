import React from 'react'

const Page = ({ pageNumber, currentPageNumber, onChange }) => {
  let buttonClass = 'page-link'
  if (isActivePage()) buttonClass += ' button-outline'

  function isActivePage() {
    return currentPageNumber == pageNumber
  }

  function renderedPageNumber() {
    return pageNumber + 1
  }

  function handleClick (event) {
    event.preventDefault()
    onChange(pageNumber)
  }

  return(
    <li className="page-item mr-1">
      <button className={buttonClass} onClick={handleClick} >{renderedPageNumber()}</button>
    </li>
  )
}

export default Page
