import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from '../actions/userActions'

const Navigation = (props) => {
  const dispatch = useDispatch()
  const userSignin = useSelector((store) => store.userSignin)

  const onLogout = () => {
    dispatch(logout())
  }

  return (
    <div>
      {userSignin.response && (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <Link to="/home">
              <span className="navbar-brand">NoteApp</span>
            </Link>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link to="/home">
                    <span className="nav-link">Home</span>
                  </Link>
                </li>

               
              </ul>
              <div className="d-flex">
                <button onClick={onLogout} className="btn btn-outline-success">
                  Logout
                </button>
              </div>
            </div>
          </div>
        </nav>
      )}
    </div>
  )
}

export default Navigation
