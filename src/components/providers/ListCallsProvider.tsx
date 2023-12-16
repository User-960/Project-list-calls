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
	listRecords: any[]
	setListRecords: Dispatch<SetStateAction<any[]>>
}

export const ListCallsContext = createContext<TypeContext>({
	listCalls: [],
	setListCalls: () => {},
	listRecords: [],
	setListRecords: () => {}
})

const ListCallsProvider: FC<PropsWithChildren> = ({ children }) => {
	const [listCalls, setListCalls] = useState<ICall[]>([])
	const [listRecords, setListRecords] = useState<any[]>([])

	return (
		<ListCallsContext.Provider
			value={{ listCalls, setListCalls, listRecords, setListRecords }}
		>
			{children}
		</ListCallsContext.Provider>
	)
}

export default ListCallsProvider
