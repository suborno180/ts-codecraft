import React from 'react'
import AddDocComponents from './components/addDocComponents'

const AddDoc = () => {
  const HOST_URL = process.env.NEXTAUTH_URL

if (!HOST_URL) {
  throw new Error("Please Provide NEXTAUTH_URL in .env variable")
}

  return (
    <div>
      <AddDocComponents hostUrl={HOST_URL} />
    </div>
  )
}

export default AddDoc