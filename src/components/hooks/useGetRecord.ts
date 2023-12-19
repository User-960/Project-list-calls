import { useMutation } from '@tanstack/react-query'
import { useMemo } from 'react'

import { useListCalls } from './useListCalls'
import { ICallRecord } from '@/interfaces/calls'
import ListCallsService from '@/services/listCalls.service'

export const useGetRecord = () => {
	const { setDownloadRecord } = useListCalls()

	const { isLoading, error, mutateAsync } = useMutation(
		['getRecord'],
		({ recordId, partnershipId }: ICallRecord) =>
			ListCallsService.getRecord(recordId, partnershipId),
		{
			onSuccess: ({ data }) => setDownloadRecord(data),
			onError: () => console.log('Error in database')
		}
	)

	const queryRecord = async (data: ICallRecord) => {
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
