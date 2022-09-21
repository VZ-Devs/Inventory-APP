import { useLocation, useNavigate } from 'react-router-dom';
import React from 'react';
import styles from './view-item.module.css';

function ViewItem() {
  const location = useLocation();
  const item = location.state.data;
  const { title, price, description, category, image, quantity } = item;
  const navigate = useNavigate();

  console.log(item.image);

  // title, price, description, category, image, quantity,

  // <div className={styles.media}></div>
  return (
    <>
      <button onClick={() => navigate('/')}>Back</button>
      <section className={styles.section}>
        <div>
          <h2 className={styles.title}>{title}</h2>
          {/* <figure>{item.image}</figure> */}
          <img className={styles.image} src={item.image} />
        </div>

        <div className={styles.article}>
          <div className={styles.category}>{category}</div>
          <div className={styles.description}>{description}</div>
          <div className={styles.quantity}>{`Quantity: ${quantity}`}</div>
          <div className={styles.price}>{`Price: ${price}`}</div>
        </div>
      </section>
    </>
  );
}

export default ViewItem;
