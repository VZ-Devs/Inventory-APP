import React, { useState } from 'react';
import styles from './add-item.module.css';
import { Button } from '@/components/ui';

function AddItem() {
  const [inputFields, setInputFields] = useState({});

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setInputFields({
      ...inputFields,
      [name]: value,
    });
  }

  const addItem = async (e) => {
    e.preventDefault();
    const response = await fetch(`http://localhost:3001/api/items`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(inputFields)
    })
    const data = await response.json();
    console.log(data);
  }

  return (
    <div>
      <form>
        <div className={styles.f_label}>
          <h2 className={styles.header2}>Add Item</h2>
          <label>Item name</label>
          <br />
          <input
            type="text"
            name="name"
            value={inputFields.name}
            onChange={handleFormChange}
          />
        </div>
        <br />
        <div className={styles.f_label}>
          <label>Description</label>
          <br />
          <textarea
            name="description"
            value={inputFields.description}
            onChange={handleFormChange}
          />
        </div>
        <br />
        <div className={styles.f_label}>
          <label>Category</label>
          <br />
          <input
            type="text"
            name="category"
            value={inputFields.category}
            onChange={handleFormChange}
          />
        </div>
        <br />
        <section>
          <div style={{float:'left',marginRight:32}}>
            <label>Quantity</label>
            <br />
            <input
              type="number"
              name="quantity"
              value={inputFields.quantity}
              onChange={handleFormChange}
            />
          </div>
          <div style={{ float: 'left' }}>
            <label>Price</label>
            <br />
            
            <input
              type="number"
              name="price"
              value={inputFields.price}
              onChange={handleFormChange}
            />
          </div>
        </section>
        <br />
        {/* https://www.quirksmode.org/dom/inputfile.html */}
        <label className={styles.image_upload}>
          <input
            type="file"
            name="image"
            value={inputFields.image}
            onChange={handleFormChange}
          />
          <i className="fa fa-cloud-upload"></i> Upload image
        </label>
        <br />
        <Button onClick={addItem}>Submit</Button>
      </form>
    </div>
  );
}

export default AddItem;