import './spinner.css'
import React from 'react'

const Spinner = () => {
  return (
    <div class="lds-css ng-scope">
      <div class="lds-double-ring">
        <div></div>
        <div></div>
      </div>
      <style type="text/css">
      </style>
    </div>
  )
}

export default Spinner