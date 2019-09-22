import './spinner.css'
import React from 'react'

const Spinner = () => {
  return (
    <div className="lds-css ng-scope">
      <div className="lds-double-ring">
        <div></div>
        <div></div>
      </div>
      <style type="text/css">
      </style>
    </div>
  )
}

export default Spinner