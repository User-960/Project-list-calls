import React from 'react'

import Layout from '@/components/layout/Layout'
import { IMeta } from '@/components/seo/meta.interface'

import Filter from './filter/Filter'
import ListCalls from './listCalls/ListCalls'

const Home = () => {
	const meta: IMeta = {
		title: 'Главная',
		description: 'Список всех вызовов'
	}

	return (
		<Layout meta={meta}>
			<Filter />
			<ListCalls />
		</Layout>
	)
}

export default Home
