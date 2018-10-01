//@flow
import React from 'react'

type Props = {
  value: string,
  onChange: () => void,
  placeholder?: string,
};

const Search = ({ onChange, value, placeholder  }: Props) => {
  return (
    <div className="p-b-1">
      <input
        type="search"
        className="form-control"
        placeholder={placeholder}
        value={value}
        onChange={onChange} />
    </div>
  )
}

Search.defaultProps = {
  placeholder: 'Søg brugere'
}


export default Search
