import React from 'react';
import styles from '../home.module.css'

export const Item = ({data: {title, price, description, category, image, quantity }}) => {

  return (
    <article className={styles.card}>
      <div className={styles.media}>
        <img src={image} alt={image} />
        <h2 className={styles.title}>{title}</h2>
        <span className={styles.tag}>{category}</span>
        <h3 className={styles.price}>{price}</h3>
      </div>
      <div className={styles.content}>
        <p className={styles.quantity}><sup>QT</sup>{quantity}</p>
        <p className={styles.description}>{description}</p>
      </div>
    </article>
  )
} 
