import React from 'react'

import Layout from '@/components/layout/Layout'
import { IMeta } from '@/components/seo/meta.interface'

const Home = () => {
	const meta: IMeta = {
		title: 'Главная',
		description: 'Список всех вызовов'
	}

	return (
		<Layout meta={meta}>
			<p>Home</p>
		</Layout>
	)
}

export default Home
