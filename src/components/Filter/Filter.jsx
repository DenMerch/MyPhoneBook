import { useDispatch, useSelector } from "react-redux";
import { filterContacts } from "redux/filter/filterSlice";
import { filterSelector } from "redux/selectors";
import css from './Filter.module.css'

export const Filter = () => {
    const dispatch = useDispatch();
    const filter = useSelector(filterSelector)
    const handleInput = e => {
        const value = e.target.value
        dispatch(filterContacts(value))
    };

    return (
        <div className={css.wrap}>
            <h2>Find contacts by name</h2>
            <label htmlFor="filter" className="form-label">Name</label>
            <input
                className={css.input}
                onChange={handleInput}
                value={filter}
                id="filter"
                type="text"
                name="filter"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
            />
        </div>
    )
}