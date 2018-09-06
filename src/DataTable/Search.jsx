import React from 'react'

const Search = ({ onSearch } ) => {
  return (
    <div className="p-b-1">
      <input
        type="search"
        className="form-control"
        placeholder="Søg brugere"
        onChange={ (event) => onSearch(event)} />
    </div>
  )
}

export default Search
