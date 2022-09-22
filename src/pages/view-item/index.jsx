import { useLocation, useNavigate } from 'react-router-dom';
import React from 'react';
import styles from './view-item.module.css';

function ViewItem() {
  const location = useLocation();
  const item = location.state.data;
  const { title, price, description, category, image, quantity } = item;
  const navigate = useNavigate();

  return (
    <>
      <button className={styles.btn} onClick={() => navigate('/')}>
        &#8592;Back
      </button>

      <section className={styles.container}>
        <div className={styles.container_img}>
          <figure>
            <img className={styles.image} src={item.image} />
          </figure>
        </div>

        <div className={styles.article}>
          <h2 className={styles.title}>{title}</h2>
          <div className={styles.category}>{category}</div>
          <div className={styles.description}>{description}</div>
          <div className={styles.quantity}>{`Quantity: ${quantity}`}</div>
          <div className={styles.price}>{`Price: $${price}`}</div>
        </div>
      </section>

      {/* prev btn */}

      {/* section btn */}
      <section className={styles.section_btn_container}>
        <button className={styles.button_edit}>Edit</button>

        <button className={styles.button_delete}>Delete</button>
      </section>

      <section className={styles.prev_btn}>
        <button className={styles.button_prev}>&#8592;Prev</button>
        <button className={styles.button_next}>Next&#8594;</button>
      </section>
    </>
  );
}

export default ViewItem;
