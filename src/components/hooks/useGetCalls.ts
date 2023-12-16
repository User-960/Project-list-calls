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
			onSuccess: ({ data }: any) => console.log(data),
			onError: () => console.log('Error in database')
		}
	)

	return useMemo(
		() => ({
			isLoading,
			error,
			mutateAsync
		}),
		[isLoading, error, mutateAsync]
	)
}
