import "./navbar.scss";

import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from "../../redux/authSlice";
import toast from "react-hot-toast";

const Navbar = () => {
  const auth = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  const navigate = useNavigate()



  return (
    <div className="navbar">
      <div className="wrapper">

        {auth._id ? (

          <>
            <p className="user_title">{auth.name}
              <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
            </p>
            <button
              className="logout_btn"
              onClick={() => {
                dispatch(logoutUser(null));
                navigate('/login')
                toast.success("Logged out!");
              }}
            >
              Logout
            </button>

          </>
        ) : (
          <div className="auth_links">
            <Link to="/login" className='nav_link'>Login</Link>
            <Link to="/register" className='nav_link'>Register</Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;