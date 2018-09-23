import React from 'react'
import PropTypes from 'prop-types'

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

Row.propTypes = {
  row: PropTypes.object.isRequired
}

export default Row
