import { useMutation } from '@tanstack/react-query'
import { useMemo } from 'react'

import { useListCalls } from './useListCalls'
import ListCallsService from '@/services/listCalls.service'

export const useGetRecord = () => {
	const { listCalls, setListCalls } = useListCalls()

	const { isLoading, error, mutateAsync } = useMutation(
		['getRecord'],
		({ record, partnership_id }: any) =>
			ListCallsService.getRecord(record, partnership_id),
		{
			onSuccess: ({ data }) => console.log(data),
			onError: () => console.log('Error in database')
		}
	)

	const queryRecord = async (data: any) => {
		await mutateAsync(data)
	}

	return useMemo(
		() => ({
			isLoading,
			error,
			queryRecord
		}),
		[isLoading, error, queryRecord]
	)
}
