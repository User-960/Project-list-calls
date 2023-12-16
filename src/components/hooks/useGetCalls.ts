import { useMutation } from '@tanstack/react-query'
import { useMemo } from 'react'

import { useListCalls } from './useListCalls'
import ListCallsService from '@/services/listCalls.service'

export const useGetCalls = () => {
	const { listCalls, setListCalls } = useListCalls()

	const { isLoading, error, mutateAsync } = useMutation(
		['getListCalls'],
		() => ListCallsService.getListCalls(),
		{
			onSuccess: ({ data }) => setListCalls(data.results),
			onError: () => console.log('Error in database')
		}
	)

	const queryListCalls = async () => {
		await mutateAsync()
	}

	return useMemo(
		() => ({
			isLoading,
			error,
			queryListCalls
		}),
		[isLoading, error, queryListCalls]
	)
}
