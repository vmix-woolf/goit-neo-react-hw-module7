import Contact from '../Contact/Contact'
import css from './ContactList.module.css'
import { useSelector } from 'react-redux'
import { selectFilteredContacts } from '../../redux/contactsSlice'


const ContactList = () => {
    const contacts = useSelector(selectFilteredContacts)

    return (
        <ul className={css.list}>
            {contacts.map(contact => (
                <li key={contact.id}>
                    <Contact
                        id={contact.id}
                        name={contact.name}
                        number={contact.number}
                    />
                </li>
            ))}
        </ul>
    )
}

export default ContactList
