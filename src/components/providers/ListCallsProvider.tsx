import {
	Dispatch,
	FC,
	PropsWithChildren,
	SetStateAction,
	useState
} from 'react'
import { createContext } from 'react'

import { TypeListCalls } from '@/interfaces/calls'

type TypeContext = {
	listCalls: TypeListCalls[]
	setListCalls: Dispatch<SetStateAction<TypeListCalls[]>>
}

export const ListCallsContext = createContext<TypeContext>({
	listCalls: [],
	setListCalls: () => {}
})

const ListCallsProvider: FC<PropsWithChildren> = ({ children }) => {
	const [listCalls, setListCalls] = useState<TypeListCalls[]>([])

	return (
		<ListCallsContext.Provider value={{ listCalls, setListCalls }}>
			{children}
		</ListCallsContext.Provider>
	)
}

export default ListCallsProvider
