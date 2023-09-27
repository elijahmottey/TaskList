import React from 'react'

function Header({userName}) {
    
  return (
    <div className='header'>
      <h2>TASK LIST</h2>
      <p>Date:{Date()}</p>

      <p>{userName} here are today's Task List</p>

    </div>
  )
}

export default Header
