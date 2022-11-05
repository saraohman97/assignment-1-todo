import React from 'react'

const Post = () => {
  return (
    <div className='post'>
      <div className="left">
        <div className="up">
          <h1>Title</h1>
          <p>9.30</p>
          <p>|</p>
          <p>Sara Öhman</p>
        </div>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam, eum aperiam suscipit tenetur deleniti accusamus quos odit impedit ipsum.</p>
      </div>

      <div className="line"></div>

      <div className="right">
        <div className='form-group'>
          <label htmlFor="status">Status: </label>
          <button className='status-control'>Backlog <i className="fa-solid fa-chevron-down"></i></button>
        </div>
        <button className='btn'>Add comment</button>
      </div>
    </div>
  )
}

export default Post