import {useState} from 'react'
import CreatePost from './CreatePost'

const Navbar = () => {

  const [showModal, setshowModal] = useState(false)

  const toggleModal = () => {
    showModal
    ? setshowModal(false)
    : setshowModal(true)
  }

  return (
    <div className='navbar'>
      <h1 className='brand'>TO DO</h1>
      <button className='btn' onClick={toggleModal}>Create todo</button>
      {showModal && <CreatePost />}
    </div>
  )
}

export default Navbar