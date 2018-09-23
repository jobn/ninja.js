import React from 'react'
import PropTypes from 'prop-types'

const Search = ({ onSearch }) => {

  return (
    <div className="p-b-1">
      <input
        type="search"
        className="form-control"
        placeholder="Søg brugere"
        onChange={(e)=>{onSearch(e)}} />
    </div>
  )
}

Search.propTypes = {
  onSearch: PropTypes.func.isRequired
}

export default Search
