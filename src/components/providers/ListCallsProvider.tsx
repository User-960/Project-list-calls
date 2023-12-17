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

	sortDurationUpDown: 'down' | 'up'
	setSortDurationUpDown: Dispatch<SetStateAction<'down' | 'up'>>
}

export const ListCallsContext = createContext<TypeContext>({
	listCalls: [],
	setListCalls: () => {},
	filteredListCalls: [],
	setFilteredListCalls: () => {},
	downloadRecord: '',
	setDownloadRecord: () => {},
	currentTypeCallFilter: '',
	setCurrentTypeCallFilter: () => {},

	sortDurationUpDown: 'down',
	setSortDurationUpDown: () => {}
})

const ListCallsProvider: FC<PropsWithChildren> = ({ children }) => {
	const [listCalls, setListCalls] = useState<ICall[]>([])
	const [filteredListCalls, setFilteredListCalls] = useState<ICall[]>([])
	const [downloadRecord, setDownloadRecord] = useState<string>('')
	const [currentTypeCallFilter, setCurrentTypeCallFilter] =
		useState<string>('allCalls')

	const [sortDurationUpDown, setSortDurationUpDown] = useState<'down' | 'up'>(
		'down'
	)

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

	useEffect(() => {
		if (sortDurationUpDown === 'down') {
			filteredListCalls.sort((call1, call2) =>
				call1.time > call2.time ? 1 : -1
			)
		}

		if (sortDurationUpDown === 'up') {
			filteredListCalls.sort((call1, call2) =>
				call1.time < call2.time ? 1 : -1
			)
		}
	}, [sortDurationUpDown])

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
				setCurrentTypeCallFilter,

				sortDurationUpDown,
				setSortDurationUpDown
			}}
		>
			{children}
		</ListCallsContext.Provider>
	)
}

export default ListCallsProvider
