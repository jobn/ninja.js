import React from 'react'

const Row = (props) => {
  const { row } = props

  return (
    <tr>
      <td>
        <a href={row.editPath}>
          {row.name}
        </a><br />
        <small>{row.email}</small>
      </td>
    </tr>
  )
}

export default Row
