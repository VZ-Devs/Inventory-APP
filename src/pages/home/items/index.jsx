import React from 'react';
import { Item } from '../item';
import styles from '../home.module.css';
// import Comp from '@/components/Comp'

export const Items = ({items}) => {
	return (
    <section className={styles.container}> 
    {
      // items.length &&
			items.map((item) => {
        return <Item key={item.id} data={item} />
			})
		}
    </section>
	 )
} 
