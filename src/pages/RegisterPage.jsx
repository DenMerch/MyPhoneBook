import { useState } from "react";
import { useDispatch } from "react-redux"
import { register } from "redux/auth/operation";
import css from './Pages.module.css'

export const RegisterPage = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleChange = ({ target: { name, value } }) => {
        switch (name) {
            case 'name':
                return setName(value);
            case 'email':
                return setEmail(value);
            case 'password':
                return setPassword(value);
            default:
                return;
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault();

        const newUser = {
            // name,
            email,
            password,
        }
        setName('');
        setEmail('');
        setPassword('');
        dispatch(register(newUser))
    }
    return (
        <div className={css.wrap}>
            <h2>SignUp</h2>
            <form onSubmit={handleSubmit} autoComplete="off">
                <div className={css.wrap}>
                    <label htmlFor='registerName' >
                        Name
                    </label>
                    <input
                        className={css.input}
                        onChange={handleChange}
                        name='name'
                        type='text'
                        id='registerName'
                        value={name}
                    />
                </div>
                <div className={css.wrap}>
                    <label htmlFor='registerEmail'>
                        Email address
                    </label>
                    <input
                        className={css.input}
                        onChange={handleChange}
                        name='email'
                        type='email'
                        id='registerEmail'
                        aria-describedby='emailHelp'
                        value={email}
                    />
                </div>
                <div className={css.wrap}>
                    <label
                        htmlFor='registerPassword'
                    >
                        Password
                    </label>
                    <input
                        className={css.input}
                        onChange={handleChange}
                        name='password'
                        type='password'
                        id='registerPassword'
                        value={password}
                    />
                </div>
                <button type='submit' className={css.btn}>
                    Submit
                </button>
            </form>
        </div>
    )
}