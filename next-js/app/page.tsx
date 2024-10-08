"use client";

import { useState } from 'react';
import Link from 'next/link';

export default function Home() {

	// const [otpStep, setOtpStep] = useState(0);
	// const [tokenOk, setTokenOk] = useState(false);
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
  
	const handleSignIn = async () => {
		try {
			// await signIn(username, password)
			// await requestOtp(username, password)
			// await setToken(username, password)
			// await getUser('1')
			// const res = await getUser('42')
			// setTokenOk(true)
			// console.log('res:', res)
			// setTokenOk(true)
			// redirect('/pong')
		} catch (error) {
			console.error('Error logging in:', error);
			alert('wrong email/password')
		}
	};

	const handleSignOut = () => {
		// setTokenOk(false);
	};

    return (
        <div className='gap-4 flex flex-col w-96 mx-auto py-4'>
			 <div className='gap-2 flex flex-col'>
				<Link href='/game-keyboard' className='hover:opacity-70'>1-1 game</Link>
				<Link href='/game-ai' className='hover:opacity-70'>1-1 game w/ai</Link>
				<Link href='/tournament' className='hover:opacity-70'>tournament</Link>
				<Link href='/game-remote' className='hover:opacity-70'>1-1 remote game</Link>
				<Link href='/settings' className='hover:opacity-70'>settings</Link>
				<Link href='#' onClick={() => handleSignOut()} className='hover:opacity-70'>exit</Link>
        	</div>
		</div>
    )
}