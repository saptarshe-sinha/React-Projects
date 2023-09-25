import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
    const {userid} = useParams()
  return (
    <div className='bg-gray-600 text-white text-2xl m-3 p-3 text-center'>User: {userid} </div>
  )
}

export default User