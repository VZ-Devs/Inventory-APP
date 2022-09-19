import React from 'react';
import { Item } from './Item';

export const Items = ({items}) => {
	return ( <>
		{
      // items.length &&
			items.map((item) => {
        return <Item key={item.id} data={item} />
			})
		}
	</> )
} 
