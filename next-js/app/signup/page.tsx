'use client'

import { useState } from 'react';
import Link from 'next/link';

export default function Home() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordAgain, setPasswordAgain] = useState('');
    const [passwordsMatch, setPasswordsMatch] = useState(true);

    const handleSignUp = async () => {
        if (password !== passwordAgain) {
            setPasswordsMatch(false);
            return;
        }
		const userData = {
            username: email,
            email: email,
            password: password,
        };

        const response = await fetch('/api/users/', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(userData),
		});

		if (response.ok) {
			const res = await response.json();
			console.log('new user created:', res);

		} else {
			console.error('user not created', response.statusText);
		}

	}

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
        setPasswordsMatch(e.target.value === passwordAgain);
    }

    const handlePasswordAgainChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPasswordAgain(e.target.value);
        setPasswordsMatch(e.target.value === password);
    }




    return (
        <div className='gap-4 flex flex-col w-96 mx-auto py-4'>
            <h2>sign up</h2>

            <div className='mx-auto gap-3 flex flex-col'>
                <div className='flex flex-row items-center'>
                    <label className='w-1/2'>Email: </label>
                    <input className='w-1/2 text-black px-2 py-1' type="text"  value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>	
                <div className='flex flex-row items-center'>
                    <label className='w-1/2'>Password: </label>
                    <input className='w-1/2 text-black px-2 py-1' type="password"  value={password} onChange={handlePasswordChange} />
                </div>
                <div className='flex flex-row items-center'>
                    <label className='w-1/2'>Password again: </label>
                    <input className='w-1/2 text-black px-2 py-1' type="password"  value={passwordAgain} onChange={handlePasswordAgainChange} />
                </div>
                {!passwordsMatch && <div className='text-red-500'>Passwords do not match</div>}
                
                <button onClick={handleSignUp} className='border-2 py-2 px-4 mt-4 opacity-100 text-sm mx-auto uppercase'>sign up</button>
            </div>

            <div>have an account?  
                <Link href='/signin' className='hover:opacity-70 uppercase'> sign in</Link>
            </div>
        </div>
    )
}