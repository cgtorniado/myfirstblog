import React from 'react'
import { Link } from 'react-router-dom'

const NotFoundPage = () => {
  return (
    <div className='text-center row notfound justify-content-center align-items-center'>
      <div className='col'>
         <h1 className="display-1 text-primary">Something's not right</h1>
         <p>The page cannot be found. Please check the link.<br/>
         <Link to="/">Back to home</Link></p>
         </div>
    </div>
  )
}

export default NotFoundPage