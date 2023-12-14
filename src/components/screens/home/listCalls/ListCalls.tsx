import React from 'react'

import styles from './ListCalls.module.scss'

const ListCalls = () => {
	return (
		<>
			<div>
				<div className={styles.navList}>
					<div>Тип</div>
					<div>Время</div>
					<div>Сотрудник</div>
					<div>Звонок</div>
					<div>Источник</div>
					<div>Оценка</div>
					<div>Длительность</div>
				</div>

				<ul className={styles.listCalls}>
					<li className={styles.listCallsItem}></li>
				</ul>
			</div>
		</>
	)
}

export default ListCalls
