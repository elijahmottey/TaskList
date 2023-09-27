import React from 'react'

function Header({userName}) {
    
  return (
   
    <div className='header'>
       {/*this section contains the header section of the task list  
       it contains the title , date and intro part addressing user by the day's task list   */}
      <h2>TASK LIST</h2>
      <p>Date:{Date()}</p>

      <p>{userName} here are today's Task List</p>

    </div>
  )
}

export default Header
