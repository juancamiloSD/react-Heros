import { useContext } from "react"
import { Link, NavLink, useNavigate } from "react-router-dom"
import { AuthContext } from "../../auth/context/AuthContext"

export const NavBar = () => {

    const { user, logout } = useContext( AuthContext )

    const navigate = useNavigate()

    const onLogout = () => {
        logout()
        navigate('/login', {
            replace: true
        })
    }
    

  return (
    <div className="bg-body-tertiary bg-dark">
        <nav className="navbar sticky-top navbar-expand-lg bg-body-tertiary bg-dark" data-bs-theme="dark">
            <div className="container">
                <Link
                    className="navbar-brand"
                    to="/"
                >
                    Asociaciones
                </Link>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto">
                        <NavLink
                            className={ ({ isActive }) => `nav-item nav-link ${ isActive ? 'active' : '' }` }
                            to="marvel"
                        >
                            Marvel
                        </NavLink>
                        <NavLink
                            className={ ({ isActive }) => `nav-item nav-link ${ isActive ? 'active' : '' }` }
                            to="dc"
                        >
                            DC
                        </NavLink>
                        <NavLink
                            className={ ({ isActive }) => `nav-item nav-link ${ isActive ? 'active' : '' }` }
                            to="search"
                        >
                            Search
                        </NavLink>
                        
                    </ul>
                    <span className="navbar-text">
                        <ul
                            className="navbar-nav ml-auto"
                        >
                            <span 
                                className="nav-item nav-link text-primary"
                            >
                                { user?.name }
                            </span>
                            <button
                                className="nav-item nav-link btn"
                                onClick={ onLogout }
                            >
                                Logout
                            </button>
                        </ul>
                    </span>
                </div>
            </div>
        </nav>
    </div>
  )
}
