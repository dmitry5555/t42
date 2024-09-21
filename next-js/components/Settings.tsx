'use client'

import Link from "next/link"
import { useState } from "react"

export default function Settings() {

	const [image, setImage] = useState(null)

	const handleImageUpload = async (e: any) => {
		const token = document.cookie
			.split('; ')
			.find(row => row.startsWith('access_token='))
			?.split('=')[1]
		try {
			const userData = {
				user_id: 1,
				is_online: true,
				avatar_url: 'https://www.google.com',
			};
	
			const response = await fetch('/api/profiles/1', {
				method: 'GET',
				headers: {
					'Authorization': `Bearer ${token}`,
				},
				credentials: 'include',
			});

			// const response = await fetch('/api/profiles/', {
			// 	method: 'POST',
			// 	headers: {
			// 		'Authorization': `Bearer ${token}`,
			// 		'Content-Type': 'application/json', 
			// 	},
			// 	body: JSON.stringify(userData),
			// 	credentials: 'include',
			// });
			
			if (response.ok) {
				console.log('testing ok: ', response)
				const res = await response.json()
				console.log('res: ', res)

			} else {
				console.error('error: ', response.statusText)
			}
			

		} catch (error) {
			console.error('error 2:', error)
		}
	
        // try {
        //     const formData = new FormData();
        //     formData.append('image', file);			
        //     const response = await fetch('/api/images/', {
        //         method: 'POST',
		// 		headers: {
		// 			'Authorization': `Bearer ${token}`,
		// 		},
        //         body: formData,
		// 		credentials: 'include',
        //     });
            
        //     if (response.ok) {
        //         console.log('Изображение успешно загружено!')
        //     } else {
        //         console.error('Ошибка загрузки изображения:', response.statusText)
        //     }
        // } catch (error) {
        //     console.error('Ошибка загрузки изображения:', error)
        // }
    }

	return (
		<div className='w-96 py-4 mx-auto flex flex-col gap-3'>
			<h2>settings</h2>
			<div className="flex flex-row items-center">
				<label className="w-1/2">Avatar: </label>
				<input onChange={handleImageUpload} className='w-1/2 text-black' type="file" />
			</div>
			<div className="flex flex-row items-center">
				<label className="w-1/2">Name: </label>
				<input className='w-1/2 px-2 py-1 text-black' type="text" placeholder={'at@gmail.com'} />
			</div>
			<div className="flex flex-row items-center">
				<label className="w-1/2">Email: </label>
				<input readOnly className='w-1/2 px-2 py-1 text-black' type="text" placeholder={'at@gmail.com'} />
			</div>
			<div className="flex flex-row mx-auto gap-3">
				<Link href='/' className="border-2 py-2 px-4 mt-4 opacity-100 text-sm ">Back</Link>
				<button className="uppercase border-2 py-2 px-4 mt-4 opacity-100 text-sm ">Save</button>
			</div>
		</div>
	)
}