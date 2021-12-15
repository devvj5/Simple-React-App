import React, { useState } from 'react'

export default function Form() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstNameVal, setFirstNameVal] = useState(false);
    const [lastNameVal, setLastNameVal] = useState(false);
    const [emailVal, setEmailVal] = useState(false);
    const [passwordVal, setPasswordVal] = useState(false);

    /**
     * function: handleSubmit
     * description: handle the form submission
     * @param {*} e 
     * Author: Vinit Joshi
     */
    const handleSubmit = (e) => {
        e.preventDefault()
        if (firstName.length < 1) {
            setFirstNameVal(true); 
            setLastNameVal(false); 
            setEmailVal(false); 
            setPasswordVal(false);
        }
        else if (lastName.length < 1) {
            setFirstNameVal(false); 
            setLastNameVal(true); 
            setEmailVal(false); 
            setPasswordVal(false);
        }
        else if (email.length < 1) {
            setFirstNameVal(false); 
            setLastNameVal(false); 
            setEmailVal(true); 
            setPasswordVal(false);
        }
        else if (password.length < 1) {
            setFirstNameVal(false); 
            setLastNameVal(false);
            setEmailVal(false); 
            setPasswordVal(true);
        }
        else {

            setFirstNameVal(false);
            setLastNameVal(false);
            setEmailVal(false);
            setPasswordVal(false);

            let data = {
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: password
            }
            console.log(data)
        }

    }
    return (
        <div className="form">
            <form className="form-res" onSubmit={(e) => handleSubmit(e)}>
                <div className='title'>FORM</div>
                <div >
                    <div className='form-div'>
                        <label htmlFor="firstname">First Name:</label>
                        <div>
                            <input id="firstname" data-testid="testinput1" type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)}></input>
                            {firstNameVal && <div><small>*required</small></div>}
                        </div>
                    </div>
                    <div className='form-div'>
                        <label htmlFor="lastname"> Last Name:</label>
                        <div>
                            <input id="lastname" data-testid="testinput2" type="text" value={lastName} onChange={(e) => setLastName(e.target.value)}></input>
                            {lastNameVal && <div><small>*required</small></div>}
                        </div>
                    </div>
                    <div className='form-div'>
                        <label htmlFor="email">Email:</label>
                        <div>
                            <input id="email" data-testid="testinput3" type="email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                            {emailVal && <div><small>*required</small></div>}
                        </div>
                    </div>
                    <div className='form-div'>
                        <label htmlFor="password">Password:</label>
                        <div>
                            <input id="password" data-testid="testinput4" type="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
                            {passwordVal && <div><small>*required</small></div>}
                        </div>
                    </div>
                </div>
                <button type="submit" className='button'>Submit</button>
            </form>
        </div>
    )
}
