import { useLocation, useNavigate } from 'react-router-dom';
import React from 'react';
import styles from './view-item.module.css';

function ViewItem() {
  const location = useLocation();
  const item = location.state.data;
  const { id, slug, title, price, description, category, image, quantity } = item;
  const navigate = useNavigate();

  console.log(item.image);

  const deleteItem = async (id) => {
    const response = await fetch(`http://localhost:3001/api/items/${id}`,{ 
        method: 'DELETE', 
    });
    const data = await response.json();
    navigate('/')
  }

  // title, price, description, category, image, quantity,

  // <div className={styles.media}></div>
  return (
    <>
      <button onClick={() => navigate('/')}>Back</button>
      <section className={styles.section}>
        <div>
          <h2 className={styles.title}>{title}</h2>
          {/* <figure>{item.image}</figure> */}
          <img className={styles.image} src={image} />
        </div>

        <div className={styles.article}>
          <div className={styles.category}>{category}</div>
          <div className={styles.description}>{description}</div>
          <div className={styles.quantity}>{`Quantity: ${quantity}`}</div>
          <div className={styles.price}>{`Price: ${price}`}</div>
        </div>
      </section>
      <button onClick={() => deleteItem(id)}>Delete</button>
    </>
  );
}

export default ViewItem;
