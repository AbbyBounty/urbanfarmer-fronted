import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { signin } from '../actions/userActions'
import { useDispatch, useSelector } from 'react-redux'

const SigninScreen = (props) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const userSignin = useSelector((store) => store.userSignin)
  const { loading, error, response } = userSignin

  const dispatch = useDispatch()
  const onSignin = () => {
    dispatch(signin(email, password))
  }

  useEffect(() => {
    if (response) {
      alert("login success")

      props.history.push('/home')
    } else if (response && response.status == 'error') {
      alert(response.error)
    } else if (error) {
      alert(error)
    }
  }, [loading, error, response])

  return (
    <>
      <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
    <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
      <h1 className="title-font font-medium text-3xl text-orange-700">Welcome to the family of <span className="text-red-900">The</span>-<span className="text-red-700">Urban</span>-<span className="text-green-900">Farmer!</span></h1>
      <p className="leading-relaxed mt-4">“Agriculture is our wisest pursuit, because it will in the end contribute most to real wealth, good morals, and happiness.” – Thomas Jefferson</p>
    </div>
    <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
      <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Sign Up</h2>
      <div className="relative mb-4">
        <label for="email" className="leading-7 text-sm text-gray-600">Email</label>
        <input
            onChange={(e) => {
              setEmail(e.target.value)
            }}
            type="email"
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            placeholder="test@test.com"
          />
      </div>
      <div className="relative mb-4">
        <label for="password" className="leading-7 text-sm text-gray-600">Password</label>

        <input
            onChange={(e) => {
              setPassword(e.target.value)
            }}
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            type="password"
            placeholder="*****"/>
      </div>
      <button onClick={onSignin} className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
      Singin
      </button>
      <p className="text-xs text-gray-500 mt-3">
            New User? <Link to="/signup">Signup here</Link>
      </p>
    </div>
    {loading && <div>waiting for response</div>}
  </div>
</section>

</>


  )
}

export default SigninScreen
