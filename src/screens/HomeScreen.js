import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Header from '../components/Header'

const HomeScreen = (props) => {


  return (
    <div>
      <Header title="Home" />
      <h1>Welcome to UrbanFarmer</h1>
    </div>
  )
}

export default HomeScreen
