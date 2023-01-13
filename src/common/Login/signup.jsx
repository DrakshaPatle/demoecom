import React, { useState } from 'react'
// import Navbar from './Navbar'
import './login.css'
import { Link } from 'react-router-dom'
import { createUserWithEmailAndPassword } from '@firebase/auth'
import { auth } from '../../firebaseconfig'
import { useHistory } from 'react-router-dom'

const Signup = () => {
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("")
    const [errorMsg, setErrorMsg] = useState("")
    const [successMsg, setSuccessMsg] = useState("")
    const history = useHistory()
    const handleLogin = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {

                setSuccessMsg('Logged in successfully, you will be redirected to homepage')
                setEmail(userCredential.user.email)
                setPassword(userCredential.user.password)
                localStorage.setItem('email', email);
                localStorage.setItem('password', password);
                setTimeout(() => {
                    setSuccessMsg('');
                    history.push('/home');
                }, 3000);
            })
            .catch((error) => {
                const errorCode = error.code;
                console.log(error.message)
                if (error.message == 'Firebase: Error (auth/invalid-email).') {
                    setErrorMsg('Please fill all required fields')
                }
                if (error.message == 'Firebase: Error (auth/user-not-found).') {
                    setErrorMsg('Email not found');
                }
                if (error.message == 'Firebase: Error (auth/wrong-password).') {
                    setErrorMsg('Wrong Password');
                }
            });
    }

    return (
        <div>
            {/* <Navbar /> */}
            <div className='signin-container'>
                <form className='signin-form'>
                    <p>Signup</p>
                    {successMsg && <>
                        <div className='success-msg'>{successMsg}</div>
                    </>}
                    {errorMsg && <>
                        <div className='error-msg'>{errorMsg}</div>
                    </>}
                    <label>Email</label>
                    <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter your email" />
                    <label>Password</label>
                    <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Enter your password" />
                    <button onClick={handleLogin}>Signup</button>

                </form>
            </div>
        </div>
    )
}

export default Signup;