import React from 'react'

const CreatePost = () => {
  return (
    <form className='create-post'>
      <h1>Create</h1>

      <div className='d-flex'>
        <div className="form-group">
          <label htmlFor="user">User:</label>
          <input type="text" className='form-control' />
        </div>

        <div className="form-group">
          <label htmlFor="deadline">Deadline:</label>
          <input type="text" className='form-control' />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="title">Title:</label>
        <input type="text" className='form-control' />
      </div>

      <div className="d-flex">
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea id='text' type='text' className='form-control' cols="30" rows="10"></textarea>
        </div>

        <button className='btn-post'>Post</button>
      </div>

    </form>
  )
}

export default CreatePost