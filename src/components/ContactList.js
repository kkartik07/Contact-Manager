import React from 'react'
import ContactCard from './ContactCard'
import { Link } from 'react-router-dom'

function ContactList(props) {
    const contacts = props.contacts;
    const deleteContactHandler = (id) => {
        props.getContactId(id);
    };
    const renderContacts = contacts.map((contact) => {
        return (
            <ContactCard contact={contact} clickHandler={deleteContactHandler} key={contact.id} />
        )
    })

    return (
        <div>
            <Link to='/add'><button className='btn btn-primary'>Add Contact</button></Link>
            <h1>contactlist</h1>
            {renderContacts}
        </div >
    )
}

export default ContactList
