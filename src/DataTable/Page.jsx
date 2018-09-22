import React from 'react'

const Page = ({ pageNumber, currentPageNumber, onChange }) => {

  const isActivePage = () => {
    return currentPageNumber == pageNumber
  }

  const renderedPageNumber = () => {
    return pageNumber + 1
  }

  const click = (event) => {
    event.preventDefault()
    onChange(pageNumber)
  }

  if (isActivePage()) {
    return(
      <li className="page-item mr-1">
        <button className="page-link button-outline" onClick={click} >{renderedPageNumber()}</button>
      </li>
    )
  }
  return(
    <li className="page-item mr-1">
      <button className="page-link" onClick={click} >{renderedPageNumber()}</button>
    </li>
  )
}

export default Page
