import { UserMenu } from "components/UserMenu/UserMenu"
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { logOut } from "redux/auth/operation"
import css from './header.module.css'
export const Header = () => {
    const { isLoggedIn } = useSelector((state) => state.auth)
    const navigate = useNavigate()
    const handleLogin = () => {
        navigate('/login')
    }
    const handleRegister = () => {
        navigate('/signUp')
    }
    const dispatch = useDispatch()

    const handleLogOut = () => {
        dispatch(logOut())
    }
    return (
        <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderBottom: "1px solid rgba(0, 0, 0, .2)"

        }}>
            <h1>Phonebook</h1>
            <Link to={'/'} className={css.link}>Home</Link>
            {isLoggedIn && <Link to={'/contacts'} className={css.link}>Contacts</Link>}
            {isLoggedIn && <UserMenu />}
            {isLoggedIn && <button
                role='link'
                onClick={handleLogOut}
                className={css.btn}
            >
                LogOut
            </button>}
            {!isLoggedIn && <button
                role='link'
                onClick={handleLogin}
                className={css.btn}
            >
                LogIn
            </button>}
            {!isLoggedIn && <button
                role='link'
                onClick={handleRegister}
                className={css.btn}
            >
                Register
            </button>}
        </div>

    )
}