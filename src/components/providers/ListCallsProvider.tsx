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
}

export const ListCallsContext = createContext<TypeContext>({
	listCalls: [],
	setListCalls: () => {}
})

const ListCallsProvider: FC<PropsWithChildren> = ({ children }) => {
	const [listCalls, setListCalls] = useState<ICall[]>([])

	return (
		<ListCallsContext.Provider value={{ listCalls, setListCalls }}>
			{children}
		</ListCallsContext.Provider>
	)
}

export default ListCallsProvider
