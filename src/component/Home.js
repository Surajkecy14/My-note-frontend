import React from 'react'
import AddNote from './AddNote'

const Home = ({alert}) => {
  return (
    <>
    <AddNote alert={alert} />
    </>
  )
}

export default Home
