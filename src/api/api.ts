import axios from 'axios'

import { EN_APP, SERVER_URL } from '@/config/app.constants'

const API_URL = `${SERVER_URL}`

export const $axios = axios.create({
	baseURL: API_URL,
	headers: {
		'Content-Type': 'application/json',
		Authorization: `Bearer ${EN_APP.TOKEN}`
	}
})
