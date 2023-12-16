import { $axios } from '@/api/api'
import { IListCallsResponse } from '@/interfaces/calls'

class ListCallsService {
	private URL_GET_CALLS = '/mango/getList'

	async getListCalls() {
		return await $axios.post<IListCallsResponse>(`${this.URL_GET_CALLS}`, {})
	}
}

export default new ListCallsService()
