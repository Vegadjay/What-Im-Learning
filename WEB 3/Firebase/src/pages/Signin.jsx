import React, { useState } from 'react'
import { SignInWithEmail } from '../firebase/providers';
const Signin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await SignInWithEmail(email, password);
            alert("User created Sucessfully...");
        } catch (err) {
            alert(err);
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="email" name='email' placeholder='Enter Email' value={email} onChange={(e) => { setEmail(e.target.value) }} />
                <input type="password" name='password' placeholder='Enter Password' value={password} onChange={(e) => { setPassword(e.target.value) }} />
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default Signin