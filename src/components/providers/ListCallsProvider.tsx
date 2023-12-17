import {
	Dispatch,
	FC,
	PropsWithChildren,
	SetStateAction,
	useState
} from 'react'
import { createContext } from 'react'

import { ICall } from '@/interfaces/calls'

type TypeContext = {
	listCalls: ICall[]
	setListCalls: Dispatch<SetStateAction<ICall[]>>
	downloadRecord: string
	setDownloadRecord: Dispatch<SetStateAction<string>>
	currentTypeCallFilter: string
	setCurrentTypeCallFilter: Dispatch<SetStateAction<string>>
}

export const ListCallsContext = createContext<TypeContext>({
	listCalls: [],
	setListCalls: () => {},
	downloadRecord: '',
	setDownloadRecord: () => {},
	currentTypeCallFilter: '',
	setCurrentTypeCallFilter: () => {}
})

const ListCallsProvider: FC<PropsWithChildren> = ({ children }) => {
	const [listCalls, setListCalls] = useState<ICall[]>([])
	const [downloadRecord, setDownloadRecord] = useState<string>('')
	const [currentTypeCallFilter, setCurrentTypeCallFilter] =
		useState<string>('allCalls')

	return (
		<ListCallsContext.Provider
			value={{
				listCalls,
				setListCalls,
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
