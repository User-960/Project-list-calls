import {
	Dispatch,
	FC,
	PropsWithChildren,
	SetStateAction,
	useEffect,
	useState
} from 'react'
import { createContext } from 'react'

import { ICall } from '@/interfaces/calls'

type TypeContext = {
	listCalls: ICall[]
	setListCalls: Dispatch<SetStateAction<ICall[]>>
	filteredListCalls: ICall[]
	setFilteredListCalls: Dispatch<SetStateAction<ICall[]>>
	downloadRecord: string
	setDownloadRecord: Dispatch<SetStateAction<string>>
	currentTypeCallFilter: string
	setCurrentTypeCallFilter: Dispatch<SetStateAction<string>>
}

export const ListCallsContext = createContext<TypeContext>({
	listCalls: [],
	setListCalls: () => {},
	filteredListCalls: [],
	setFilteredListCalls: () => {},
	downloadRecord: '',
	setDownloadRecord: () => {},
	currentTypeCallFilter: '',
	setCurrentTypeCallFilter: () => {}
})

const ListCallsProvider: FC<PropsWithChildren> = ({ children }) => {
	const [listCalls, setListCalls] = useState<ICall[]>([])
	const [filteredListCalls, setFilteredListCalls] = useState<ICall[]>([])
	const [downloadRecord, setDownloadRecord] = useState<string>('')
	const [currentTypeCallFilter, setCurrentTypeCallFilter] =
		useState<string>('allCalls')

	useEffect(() => {
		listCalls.forEach(call => {
			if (currentTypeCallFilter === 'allCalls') {
				setFilteredListCalls(listCalls)
			}

			if (currentTypeCallFilter === 'incomingCalls') {
				setFilteredListCalls(listCalls)
				setFilteredListCalls(prev => prev.filter(call => call.in_out === 0))
			}

			if (currentTypeCallFilter === 'outgoingCalls') {
				setFilteredListCalls(listCalls)
				setFilteredListCalls(prev => prev.filter(call => call.in_out === 1))
			}
		})
	}, [currentTypeCallFilter])

	return (
		<ListCallsContext.Provider
			value={{
				listCalls,
				setListCalls,
				filteredListCalls,
				setFilteredListCalls,
				downloadRecord,
				setDownloadRecord,
				currentTypeCallFilter,
				setCurrentTypeCallFilter
			}}
		>
			{children}
		</ListCallsContext.Provider>
	)
}

export default ListCallsProvider
