import { useMutation } from '@tanstack/react-query'
import { useMemo } from 'react'

import { useListCalls } from './useListCalls'
import ListCallsService from '@/services/listCalls.service'

export const useGetCallsDate = () => {
	const { listCalls, setListCalls, setFilteredListCalls } = useListCalls()

	const { isLoading, error, mutateAsync } = useMutation(
		['getListCalls'],
		({ data_start, data_end }: any) =>
			ListCallsService.getListCallsDate(data_start, data_end),
		{
			onSuccess: ({ data }) => {
				console.log(data)
				// setListCalls(data.results)
				// setFilteredListCalls(data.results)
			},
			onError: () => console.log('Error in database')
		}
	)

	const queryListCallsDate = async (data: any) => {
		await mutateAsync(data)
	}

	return useMemo(
		() => ({
			isLoading,
			error,
			queryListCallsDate
		}),
		[isLoading, error, queryListCallsDate]
	)
}
