import { NavLink, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";


export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [Logout, setLogout] = useState(false);
  useEffect(() => {
    const checkLogin = async () => {
      const response = await axios.get(
        "http://localhost:5000/auth/isLoggedIn",
        { withCredentials: true }
      );
      if (response.data === "loggedIn") {
        setLogout(true);
      } else {
        setLogout(false);
      }
    };
    checkLogin();
  }, [location]);

const logout = async () => {
  await axios.get("http://localhost:5000/auth/logout", {
    withCredentials: true,
  });
  setLogout(false);      // <-- Update login state here!
  navigate('/loginAccount');
  
};


  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm sticky-top">
      <div className="container">
        <NavLink className="navbar-brand fw-bold text-primary" to="/">
          MY-NOTE
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink to="/" className="nav-link" end>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about" className="nav-link">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/profile" className="nav-link">
                Profile
              </NavLink>
            </li>

            {Logout === false ? (
              <>
                <li className="nav-item">
                  <NavLink to="/createAccount" className="nav-link">
                    Create-Account
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/loginAccount" className="nav-link">
                    Login-Account
                  </NavLink>
                </li>
              </>
            ) : (
              <li className="nav-item">
                <button onClick={logout} className="nav-link">
                  Logout
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
