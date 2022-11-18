import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addIssue } from './store/issues/issuesAction'

const CreatePost = () => {

  const dispatch = useDispatch()


  const [formData, setFormData] = useState({
    subject: '',
    message: '',
    mail: ''
  })

  const onChange = e => {
    setFormData(state => ({
      ...state,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = e => {
    e.preventDefault()

    dispatch(addIssue(formData))
  }



  return (
    <>
    <form className='create-post' onSubmit={handleSubmit}>
      <h1>Create</h1>


      <div className="form-group">
        <label htmlFor="mail">Mail:</label>
        <input onChange={onChange} type="text" value={formData.mail} name='mail' className='form-control' />
      </div>

      <div className="form-group">
        <label htmlFor="subject">Title:</label>
        <input onChange={onChange} type="text" value={formData.subject} name='subject' className='form-control' />
      </div>

      <div className="d-flex">
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea onChange={onChange} name='message' value={formData.message} type='text' className='form-control' cols="30" rows="10"></textarea>
        </div>

        <button className='btn-post'>Post</button>
      </div>

    </form>

    </>
  )
}

export default CreatePost