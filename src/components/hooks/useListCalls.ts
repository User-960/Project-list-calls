import { useContext } from 'react'

import { ListCallsContext } from '../providers/ListCallsProvider'

export const useListCalls = () => useContext(ListCallsContext)
