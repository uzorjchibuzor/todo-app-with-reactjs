import React from 'react'

export default function VisibilityControl({isChecked, description, callback}) {

  return (
    <div className="form-check">
      <input className="form-check-input" type="checkbox"
          checked={ isChecked }
          onChange={ (e) => callback(e.target.checked) }
      />
      <label className="form-check-label">
        Show { description }
      </label>
    </div>
  )
}