import { Contacts } from "components/Contacts/Contacts"
import { Filter } from "components/Filter/Filter"
import { ContactForm } from "components/Forms/FormsFone"

export const PrivatContacts = () => {
    return (
        <>
            <ContactForm />
            <Filter />
            <Contacts />
        </>
    )
}