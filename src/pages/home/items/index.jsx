import React from 'react';
import { Item } from '../item';
import styles from '../home.module.css';
import { Button } from '@/components/ui';
import { Link } from 'react-router-dom';

export const Items = ({items}) => {
	return (
    <>
      <section className={styles.container}> 
      {
        // items.length &&
        items.map((item) => {
          return <Item key={item.id} data={item} />
        })
      }
      </section>
      <Link to="/add-item">Add new item</Link>
    </>

	 )
} 
