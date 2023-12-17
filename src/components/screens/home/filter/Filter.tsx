import React, { useId } from 'react'
import Select from 'react-select'

import { useListCalls } from '@/components/hooks/useListCalls'

import styles from './Filter.module.scss'

const Filter = () => {
	const { currentTypeCallFilter, setCurrentTypeCallFilter } = useListCalls()

	const options = [
		{ id: 1, value: 'allCalls', label: 'Все типы' },
		{ id: 2, value: 'incomingCalls', label: 'Входящие' },
		{ id: 3, value: 'outgoingCalls', label: 'Исходящие' }
	]

	const getValue = () => {
		return currentTypeCallFilter
			? options.find(t => t.value === currentTypeCallFilter)
			: ''
	}

	const onChange = (newValue: any) => {
		setCurrentTypeCallFilter(newValue.value)
	}

	return (
		<>
			<div className={styles.filterWrapper}>
				<Select
					classNamePrefix='calls-select'
					options={options}
					defaultValue={options[0]}
					value={getValue()}
					onChange={onChange}
					instanceId={useId()}
				/>

				<div className={styles.filterDays}>3 дня</div>
			</div>
		</>
	)
}

export default Filter
