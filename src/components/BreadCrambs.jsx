import { Link } from 'react-router-dom'
import React from 'react'

function BreadCrambs() {
  return (
    <div>
<div className="breadcrumbs text-sm px-9 mt-4">
  <ul>
    <li><Link to="/" >Home</Link></li>
    <li><a>Documents</a></li>
  </ul>
</div>
    </div>
  )
}

export default BreadCrambs
