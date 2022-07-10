import React from 'react'
import deleteIcon from '../images/delete.png'
import avatar from '../images/avatar.png'
import editIcon from '../images/edit.png'
import './ContactCard.css'
import { Link } from 'react-router-dom'

function ContactCard(props) {
    const contact = props.contact;
    return (
        <div className='card'>
            <div className='container contact'>
                <div className='avatar-name'>
                    <span><img src={avatar} alt='avatar' className='avatar' /></span>
                    <Link to={`/contact/${contact.id}`} state={{ contact: contact }} >
                        <div className='name-phno'>
                            <p className='name'>{contact.name}</p>
                            <p>{contact.email}</p>
                        </div>
                    </Link>
                </div>
                <p>{contact.phno}</p>
                <div>
                    <Link to='/edit' state={{ contact: contact }}>
                        <img src={editIcon} alt='edit-icon' className='delete m-4' onClick={() => props.clickHandler(contact.id)} />
                    </Link>
                    <img src={deleteIcon} alt='delete-icon' className='delete m-4' />
                </div>
            </div>

        </div >
    )
}

export default ContactCard;
