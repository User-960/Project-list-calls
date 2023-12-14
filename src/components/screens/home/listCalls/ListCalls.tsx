import React from 'react'

import styles from './ListCalls.module.scss'

const ListCalls = () => {
	return (
		<>
			<div className={styles.listCallsWrapper}>
				<div className={styles.navList}>
					<div className={styles.navListColumn}>Тип</div>
					<div className={styles.navListColumn}>Время</div>
					<div className={styles.navListColumn}>Сотрудник</div>
					<div className={styles.navListColumn}>Звонок</div>
					<div className={styles.navListColumn}>Источник</div>
					<div className={styles.navListColumn}>Оценка</div>
					<div className={styles.navListColumn}>Длительность</div>
				</div>

				<ul className={styles.listCalls}>
					<li className={styles.listCallsItem}></li>
				</ul>
			</div>
		</>
	)
}

export default ListCalls
