import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore, doc, setDoc } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../firebase'; // Ensure your Firebase config is correct

import './test.css';

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const UserLogin = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onLogin = async (e) => {
        e.preventDefault();

        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            // Save user profile to Firestore
            const userProfile = {
                uid: user.uid,
                email: user.email,
                // Add other profile fields as needed
            };

            await setDoc(doc(db, 'users', user.uid), userProfile);
            console.log('User signed in and profile saved:', userProfile);

            alert('Login successful!');
            navigate('/home');
        } catch (error) {
            alert('Error logging in: ' + error.message);
            console.error('Error logging in: ', error.message);
        }
    };

    const onLoginWithGoogle = async () => {
        const provider = new GoogleAuthProvider();

        try {
            const result = await signInWithPopup(auth, provider);
            const user = result.user;

            // Save user profile to Firestore
            const userProfile = {
                uid: user.uid,
                email: user.email,
            };

            await setDoc(doc(db, 'users', user.uid), userProfile);
            console.log('User signed in with Google and profile saved:', userProfile);

            alert('Login with Google successful!');
            navigate('/home');
        } catch (error) {
            alert('Error logging in with Google: ' + error.message);
            console.error('Error logging in with Google: ', error.message);
        }
    };

    return (
        <div>
            <div className='flex justify-evenly items-center h-screen'>
                <div className='flex h-80 w-1/4 m-0 justify-center'>
                    <div className='flex flex-col justify-center items-center ml-20'>
                        <span className='text-6xl font-bold anton-regular mb-8'>yourLibrary.com</span>
                        <div className='bg-red-500 rounded-xl w-60 h-1 mb-8'></div>
                        <span className='text-2xl poppins-thin mb-8'>because reading is fun!</span>
                    </div>
                </div>
                <div className='flex justify-center overflow-visible shadow-login p-20 m-20 rounded-3xl'>
                    <div className='flex justify-center items-center'>
                        <form className='flex flex-col' onSubmit={onLogin}>
                            <p className='text-left poppins-thin'>
                                <label htmlFor="email-address">Email Address</label>
                            </p>
                            <div className='flex flex-col items-center mb-4'>
                                <input
                                    id="email-address"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    placeholder="Enter email"
                                    className='w-56 rounded-lg'
                                />
                            </div>

                            <p className='text-left poppins-thin'>
                                <label htmlFor="password">Password</label>
                            </p>
                            <div className='flex flex-col items-center mb-4'>
                                <input
                                    id="password"
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Enter password"
                                    required
                                    className='w-56 rounded-lg'
                                />
                            </div>

                            <button
                                className='h-10 poppins-bold rounded-2xl bg-purple-100 border-r-blue-gray-300 hover:bg-blue-600 border-y-deep-purple-500 mb-7 transition-all ease-in duration-300'
                                type="submit"
                            >
                                Login
                            </button>

                            <button
                                className='h-10 poppins-bold rounded-2xl bg-green-400  border-r-blue-gray-300 hover:bg-blue-600 hover:border-y-deep-purple-500 transition-all ease-in duration-300'
                                type="button"
                                onClick={onLoginWithGoogle}
                            >
                                Login with Google
                            </button>

                            <p className="text-sm poppins-thin text-center mt-6">
                                No account yet?{' '}
                                <NavLink to="/user-signup">
                                    <span className='hover:text-light-blue-700 font-bold'>Sign up</span>
                                </NavLink>
                            </p>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserLogin;
