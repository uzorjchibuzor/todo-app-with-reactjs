import React from 'react'

export default function TodoRow ({item, callback}) {
  return (
    <tr>
      <td>{ item.action }</td>
      <td>
        <input type="checkbox" checked={ item.done }
            onChange={ () => callback(item) } />
      </td>
    </tr>
  )
}