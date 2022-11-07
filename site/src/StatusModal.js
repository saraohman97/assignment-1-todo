import React from 'react'

const StatusModal = () => {
  return (
    <div className='status'>
        <button>Backlog <i className="fa-sharp fa-solid fa-square red"></i></button>
        <button>Working <i className="fa-sharp fa-solid fa-square yellow"></i></button>
        <button>Done <i className="fa-sharp fa-solid fa-square green"></i></button>
    </div>
  )
}

export default StatusModal