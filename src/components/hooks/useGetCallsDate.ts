import { useMutation } from '@tanstack/react-query'
import { useMemo } from 'react'

import { useListCalls } from './useListCalls'
import { IStartEndDateFilter } from '@/interfaces/calls'
import ListCallsService from '@/services/listCalls.service'

export const useGetCallsDate = () => {
	const { setListCalls, setFilteredListCalls } = useListCalls()

	const { isLoading, error, mutateAsync } = useMutation(
		['getListCallsDate'],
		({ date_start, date_end }: IStartEndDateFilter) =>
			ListCallsService.getListCallsDate(date_start, date_end),
		{
			onSuccess: ({ data }) => {
				setListCalls(data.results)
				setFilteredListCalls(data.results)
			},
			onError: () => console.log('Error in database')
		}
	)

	const queryListCallsDate = async (date: IStartEndDateFilter) => {
		await mutateAsync(date)
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
