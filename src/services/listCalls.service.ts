import { $axios } from '@/api/api'
import { IListCallsResponse } from '@/interfaces/calls'

class ListCallsService {
	private URL_GET_CALLS = '/mango/getList'
	private URL_GET_RECORD = '/mango/getRecord'

	async getListCalls() {
		return await $axios.post<IListCallsResponse>(`${this.URL_GET_CALLS}`, {})
	}

	async getRecord(recordId: string | number, partnershipId: string | number) {
		return await $axios.post<any>(
			`${this.URL_GET_RECORD}?record=${recordId}&partnership_id=${partnershipId}`,
			{}
		)
	}

	async getListCallsDate(date_start: string, date_end: string) {
		return await $axios.post<IListCallsResponse>(
			`${this.URL_GET_CALLS}?date_start=${date_start}&date_end=${date_end}`,
			{}
		)
	}
}

export default new ListCallsService()
