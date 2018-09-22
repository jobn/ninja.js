import React from 'react'

const Row = ({ row }) => {

  return (
    <tr>
      <td>
        <a className="row-title" href={row.editPath} target="_blank">{row.name}</a>
        <small>{row.email}</small>
      </td>
    </tr>
  )
}

export default Row
