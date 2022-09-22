import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Items } from './pages/home/items';
import styles from './App.module.css';
import AddItem from './pages/add-item';
import ViewItem from './pages/view-item';
import 'font-awesome/css/font-awesome.min.css';
// importing a named component

// import apiURL from '../api';

function App() {
  const [items, setItems] = useState([]);

  async function fetchItems() {
    try {
      const response = await fetch(`http://localhost:3001/api/items`);
      const data = await response.json();
      setItems(data);
    } catch (err) {
      console.log('Oh no an error! ', err);
    }
  }

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <main>
      <h1>Inventory Management APP</h1>
      <Routes>
        <Route path="/" element={<Items items={items} />} />
        <Route path="/add-item" element={<AddItem />} />
        <Route path="/item/:slug" element={<ViewItem />} />
      </Routes>
    </main>
  );

  // return (
  //   <div className={styles.App}>
  //     <header className={styles['App-header']}>
  //       <Welcome />
  //     </header>
  //   </div>
  // );
}

export default App;
