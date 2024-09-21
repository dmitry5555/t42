'use client'

import Link from 'next/link';
import { useState } from 'react';
import { setToken } from '@/actions/db';

export default function Home() {

	// const [otpStep, setOtpStep] = useState(0);
	// const [tokenOk, setTokenOk] = useState(false);
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
  
	// const handleSignIn = async () => {
	// 	signIn(username, password)
	// }

	const handleSignIn = async () => {
        // if (password !== passwordAgain) {
        //     setPasswordsMatch(false);
        //     return;
        // }
		const userData = {
            username: email,
            password: password,
            // email: username,
        };

		const response = await fetch('/api/token/', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(userData),
		});

		if (response.ok) {
			console.log('JWT выдан!');
			const access_token = await response.json();
			setToken(access_token)
			console.log('response', access_token);

			// cookies().set('access_token', access_token.access)
			// cookies().set('refresh_token', access_token.refresh)
		} else {
			console.error('Ошибка 1:', response.statusText);
		}
	}
	const handleSignOut = () => {
		// setTokenOk(false);
	};

    return (
        <div className='gap-4 flex flex-col w-96 mx-auto py-4'>
			<h2>sign in</h2>

			<div className='mx-auto gap-3 flex flex-col'>
				<div className='flex flex-row items-center'>
					<label className='w-1/2'>Email: </label>
					<input className='w-1/2 text-black px-2 py-1' type="text"  value={email} onChange={(e) => setEmail(e.target.value)} />
				</div>	
				<div className='flex flex-row items-center'>
					<label className='w-1/2'>Password: </label>
					<input className='w-1/2 text-black px-2 py-1' type="password"  value={password} onChange={(e) => setPassword(e.target.value)} />
				</div>
				<button onClick={handleSignIn} className='border-2 py-2 px-4 mt-4 opacity-100 text-sm mx-auto'>Sign in</button>
			</div>

			<div>new user? 
				<Link href='/signup' className='hover:opacity-70'> sign up</Link>
			</div>

        </div>
    )
}