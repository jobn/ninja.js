//@flow
import React from 'react'

type Props = {
  value: string,
  onChange: () => void,
};

const Search = ({ onChange, value }: Props) => {
  return (
    <div className="p-b-1">
      <input
        type="search"
        className="form-control"
        placeholder="Søg brugere"
        value={value}
        onChange={onChange} />
    </div>
  )
}

export default Search
