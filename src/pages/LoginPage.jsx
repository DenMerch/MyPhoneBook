import { useState } from "react";
import { useDispatch } from "react-redux"
import { logIn } from "redux/auth/operation";
import css from './Pages.module.css'

export const LoginPage = () => {

    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleChange = (e) => {
        if (e.target.name === 'email') setEmail(e.target.value)
        setPassword(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(logIn({
            email,
            password
        }))
        setEmail('')
        setPassword('')
    }
    return (
        <div className={css.wrap}>
            <h2>Please login</h2>
            <form onSubmit={handleSubmit} >
                <div className={css.wrap}>
                    <label htmlFor='loginEmail'>
                        Email address
                    </label>
                    <input
                        className={css.input}
                        name='email'
                        type='email'
                        id="loginEmail"
                        aria-describedby='emailHelp'
                        onChange={handleChange}
                    />
                </div>
                <div className={css.wrap}>
                    <label
                        htmlFor='loginPassword'
                    >
                        Password
                    </label>
                    <input
                        className={css.input}
                        name='password'
                        type='password'
                        onChange={handleChange}
                        id="loginPassword"
                    />
                </div>
                <button type='submit' className={css.btn}>
                    Submit
                </button>
            </form>
        </div>
    )
}