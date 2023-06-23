import { useDispatch, useSelector } from 'react-redux';
import css from './Contacts.module.css'
import { useEffect } from 'react';
import { deleteContact, fetchContacts } from 'redux/contacts/apiContacts';
import { contactsSelector, filterSelector } from 'redux/selectors';

export const Contacts = () => {
    const contacts = useSelector(contactsSelector)
    const filter = useSelector(filterSelector)
    const dispatch = useDispatch();

    useEffect(() => {

        dispatch(fetchContacts())
    }, [dispatch])
    const foundedName = (filter, contacts) => {
        if (filter) {
            return contacts.filter(contact => contact.name.toLowerCase().replace(" ", '')
                .includes(filter))
        }
        return contacts
    };
    const contactDelet = id => {
        dispatch(deleteContact(id));

    };
    const listItems = foundedName(filter, contacts).map((contact) => {
        return (
            < li className={css.item} key={contact.id}>
                {contact.name}: {contact.number}
                <button className={css.btn} onClick={() => {
                    contactDelet(contact.id)
                }}>Delete</button>
            </li>)
    });

    return (
        <ul className={css.list}>
            {listItems}
        </ul>
    )
}