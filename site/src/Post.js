import React from 'react'
import { useState } from 'react'
import CommentModal from './CommentModal'
import StatusModal from './StatusModal'

const Post = ({ issue }) => {

  const [showModal, setShowModal] = useState(false)
  const [showComment, setShowComment] = useState(false)

  const toggleModal = () => {
    showModal
    ? setShowModal(false)
    : setShowModal(true)
  }
  const toggleComment = () => {
    showComment
    ? setShowComment(false)
    : setShowComment(true)
  }

  return (
    <div className='post'>
      <div className="left">
        <div className="up">
          <h1>{issue.subject}</h1>
          <p>9.30</p>
          <p>|</p>
          <p>Sara Öhman</p>
        </div>
        <p>{issue.message}</p>
      </div>




      <div className="line"></div>

      <div className="right">
        <div className='button-group'>
          <label htmlFor="status">Status: </label>
          <button className='status-control' onClick={toggleModal}>Backlog <i className="fa-solid fa-chevron-down"></i></button>
          {showModal && <StatusModal />}
        </div>
        <button className='btn' onClick={toggleComment}>Add comment</button>
        {showComment && <CommentModal />}
      </div>
    </div>
  )
}

export default Post