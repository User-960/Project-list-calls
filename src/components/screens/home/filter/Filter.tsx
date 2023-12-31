import React, { useId } from 'react'
import Select from 'react-select'

import { useListCalls } from '@/components/hooks/useListCalls'

import styles from './Filter.module.scss'
import FilterDate from './filterDate/FilterDate'

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

	const customStyles = {
		option: (provided: any, state: any) => ({
			...provided,
			color: state.isSelected ? '#015EF5' : '#2B2D33',
			backgroundColor: state.isSelected ? 'transparent' : '#FFFFFF'
		})
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
					styles={customStyles}
				/>

				<FilterDate />
			</div>
		</>
	)
}

export default Filter
