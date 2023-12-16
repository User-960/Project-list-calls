import { $axios } from '@/api/api'

class ListCallsService {
	private URL_GET_CALLS = '/mango/getList'

	async getListCalls() {
		return await $axios.post<any>(`${this.URL_GET_CALLS}`, {})
	}
}

export default new ListCallsService()
