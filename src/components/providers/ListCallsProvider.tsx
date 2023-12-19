import {
	Dispatch,
	FC,
	PropsWithChildren,
	SetStateAction,
	useEffect,
	useState
} from 'react'
import { createContext } from 'react'

import { ICall, IStartEndDateFilter } from '@/interfaces/calls'

type TypeContext = {
	listCalls: ICall[]
	setListCalls: Dispatch<SetStateAction<ICall[]>>
	filteredListCalls: ICall[]
	setFilteredListCalls: Dispatch<SetStateAction<ICall[]>>

	downloadRecord: string
	setDownloadRecord: Dispatch<SetStateAction<string>>

	currentTypeCallFilter: string
	setCurrentTypeCallFilter: Dispatch<SetStateAction<string>>

	sortDurationUpDown: 'down' | 'up' | null
	setSortDurationUpDown: Dispatch<SetStateAction<'down' | 'up' | null>>
	isSortDuration: boolean
	setIsSortDuration: Dispatch<SetStateAction<boolean>>

	sortDateUpDown: 'down' | 'up' | null
	setSortDateUpDown: Dispatch<SetStateAction<'down' | 'up' | null>>
	isSortDate: boolean
	setIsSortDate: Dispatch<SetStateAction<boolean>>

	openSound: number
	setOpenSound: Dispatch<SetStateAction<number>>

	startEndDateFilter: null | IStartEndDateFilter
	setStartEndDateFilter: Dispatch<SetStateAction<null | IStartEndDateFilter>>

	isShowAlert: boolean
	setIsShowAlert: Dispatch<SetStateAction<boolean>>

	searchedCalls: string
	setSearchedCalls: Dispatch<SetStateAction<string>>
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

	sortDurationUpDown: null,
	setSortDurationUpDown: () => {},
	isSortDuration: false,
	setIsSortDuration: () => {},

	sortDateUpDown: null,
	setSortDateUpDown: () => {},
	isSortDate: false,
	setIsSortDate: () => {},

	openSound: 0,
	setOpenSound: () => {},

	startEndDateFilter: null,
	setStartEndDateFilter: () => {},

	isShowAlert: false,
	setIsShowAlert: () => {},

	searchedCalls: '',
	setSearchedCalls: () => {}
})

const ListCallsProvider: FC<PropsWithChildren> = ({ children }) => {
	const [listCalls, setListCalls] = useState<ICall[]>([])
	const [isShowAlert, setIsShowAlert] = useState<boolean>(false)
	const [searchedCalls, setSearchedCalls] = useState<string>('')
	const [filteredListCalls, setFilteredListCalls] = useState<ICall[]>([])
	const [downloadRecord, setDownloadRecord] = useState<string>('')
	const [currentTypeCallFilter, setCurrentTypeCallFilter] =
		useState<string>('allCalls')

	const [sortDurationUpDown, setSortDurationUpDown] = useState<
		'down' | 'up' | null
	>(null)
	const [isSortDuration, setIsSortDuration] = useState<boolean>(false)

	const [sortDateUpDown, setSortDateUpDown] = useState<'down' | 'up' | null>(
		null
	)
	const [isSortDate, setIsSortDate] = useState<boolean>(false)

	const [openSound, setOpenSound] = useState<number>(0)

	const [startEndDateFilter, setStartEndDateFilter] =
		useState<null | IStartEndDateFilter>(null)

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
		if (sortDurationUpDown === 'down' && isSortDuration) {
			filteredListCalls.sort((call1, call2) =>
				call1.time < call2.time ? 1 : -1
			)
			setIsSortDuration(false)
		}

		if (sortDurationUpDown === 'up' && isSortDuration) {
			filteredListCalls.sort((call1, call2) =>
				call1.time > call2.time ? 1 : -1
			)
			setIsSortDuration(false)
		}
	}, [sortDurationUpDown])

	useEffect(() => {
		if (sortDateUpDown === 'down' && isSortDate) {
			filteredListCalls.sort((call1, call2) =>
				call1.date < call2.date ? 1 : -1
			)
			setIsSortDate(false)
		}

		if (sortDateUpDown === 'up' && isSortDate) {
			filteredListCalls.sort((call1, call2) =>
				call1.date > call2.date ? 1 : -1
			)
			setIsSortDate(false)
		}
	}, [sortDateUpDown])

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
				setSortDurationUpDown,
				isSortDuration,
				setIsSortDuration,

				sortDateUpDown,
				setSortDateUpDown,
				isSortDate,
				setIsSortDate,

				openSound,
				setOpenSound,

				startEndDateFilter,
				setStartEndDateFilter,

				isShowAlert,
				setIsShowAlert,

				searchedCalls,
				setSearchedCalls
			}}
		>
			{children}
		</ListCallsContext.Provider>
	)
}

export default ListCallsProvider
