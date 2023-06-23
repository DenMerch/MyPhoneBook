import { useState } from "react";
import css from './Forms.module.css'
import { useDispatch, useSelector } from "react-redux";
import Notiflix from "notiflix";
import { addContact } from "redux/contacts/apiContacts";
import { contactsSelector } from "redux/selectors";
import { nanoid } from "@reduxjs/toolkit";

export const ContactForm = () => {
    const contacts = useSelector(contactsSelector)
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const handleInput = e => {
        if (e.target.name === 'name') { setName(e.target.value) }
        else if (e.target.name === 'number') { setNumber(e.target.value) }
    }
    const handleSubmit = (name, number) => {
        const isNamePresent = contacts.find(el => el.name === name);
        if (isNamePresent) {
            return showMessage(name)
        } else {
            dispatch(addContact({ id: nanoid(), name, number: number }))
        }
    };
    const showMessage = (name) => {
        return Notiflix.Notify.failure(`${name} is alredy in contacts`)
    }
    const handBtnSubmit = e => {
        e.preventDefault()
        handleSubmit(name, number)
        setName('');
        setNumber('');
    }

    return (
        <div>
            <h2>Please add your contacts</h2>
            <form onSubmit={handBtnSubmit}>
                <div className={css.mb} >
                    <label htmlFor="name" className="form-label">Name</label>
                    <input
                        className={css.input}
                        onChange={handleInput}
                        value={name}
                        id="name"
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                    />
                    <label htmlFor="number" className="form-label">Phone number</label>
                    <input
                        className={css.input}
                        onChange={handleInput}
                        value={number}
                        id="number"
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                    />
                </div>
                <button type="submit" className={css.btn}  >Submit</button>
            </form >
        </div>

    )
}