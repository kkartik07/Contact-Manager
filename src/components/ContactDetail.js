import React from 'react'
import user from '../images/user.png'
import './ContactDetail.css'
import { Link, useLocation } from 'react-router-dom'

function ContactDetail() {
    const location = useLocation()
    const contact = location.state?.contact;
    return (
        <div>
            <div className='out'>
                <div className="detailcard">
                    <img src={user} alt="user" className='user mt-3' />
                    <div className="card-container">
                        <h3 className='mt-3' id='name'>{contact.name}</h3>
                        <p>{contact.email}</p>
                        <hr />
                        <b><p className='number mb-2'>{contact.phno}</p></b>
                    </div>
                    <Link to='/'><button className='btn btn-primary mb-3'>Back to contact list</button></Link>
                </div>
            </div>
        </div>
    )
}

export default ContactDetail
