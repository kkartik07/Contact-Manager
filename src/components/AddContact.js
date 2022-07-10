import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function AddContact({ addContactHandler }) {
    const Navigate = useNavigate()

    const [name, setName] = useState('');
    const [phno, setPhno] = useState('');
    const [email, setEmail] = useState('');

    const addContact = e => {
        e.preventDefault();
        if (name === "" || email === "" || phno === "") {
            alert("All the fields are mandatory!");
            return;
        }
        addContactHandler({ name, phno, email })
        setName("");
        setPhno("");
        setEmail("");

        Navigate('/')

    }
    return (
        <div className='container w-50'>
            <h2>Add Contact</h2>
            <form className='form-control' onSubmit={addContact}>
                <div className="input-group input-group mb-3 mt-3">
                    <span className="input-group-text" id="inputGroup-sizing-sm">Name</span>
                    <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" value={name} onChange={e => setName(e.target.value)} />
                </div>
                <div className="input-group input-group mb-3">
                    <span className="input-group-text" id="inputGroup-sizing">Ph-No.</span>
                    <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" value={phno} onChange={e => setPhno(e.target.value)} />
                </div>
                <div className="input-group input-group mb-3">
                    <span className="input-group-text" id="inputGroup-sizing">Email</span>
                    <input type="email" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" value={email} onChange={e => setEmail(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-primary mb-2">Add</button>
            </form>
        </div>
    )
}

export default AddContact
