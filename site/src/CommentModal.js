import React from 'react'

const CommentModal = () => {
  return (
    <form className='comment'>
        <h1>Comment</h1>

        <div className="form-group">
            <textarea id='text' type='text' placeholder='Write...' cols="30" rows="10"></textarea>
        </div>

        <div className="buttons">
            <button className='btn'>Comment</button>
            <button className='btn btn-gray'>Nevermind</button>
        </div>

    </form>
  )
}

export default CommentModal