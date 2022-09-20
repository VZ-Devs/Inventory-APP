import React, {useState} from 'react';

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
      <h1>Add Item</h1>
      <form>
        <label>Item name</label>
        <input 
          name="name"
          value={inputFields.name}
          onChange={handleFormChange}
        />
        <label>Description</label>
        <input
          name="description"
          value={inputFields.description}
          onChange={handleFormChange}
        />
        <label>Category</label>
        <input
          name="category"
          value={inputFields.category}
          onChange={handleFormChange}
        />
        <label>Quantity</label>
        <input
          type = "number"
          name="quantity"
          value={inputFields.quantity}
          onChange={handleFormChange}
        />
        <label>Price</label>
        <input
          type="number"
          name="price"
          value={inputFields.price}
          onChange={handleFormChange}
        />
        <label>Upload Image</label>
        <input
          name="image"
          value={inputFields.image}
          onChange={handleFormChange}
        />
        <button onClick={addItem} type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddItem;