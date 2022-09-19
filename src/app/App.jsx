import React, { useState, useEffect } from 'react';
import { Items } from './Items';
// import styles from './App.module.css';
// import Welcome from './components/Welcome/Welcome';

// import apiURL from '../api';

function App() {

  const [items, setItems] = useState([]);

  async function fetchItems() {
    try {
      const response = await fetch(`http://localhost:3001/api/items`);
      const data = await response.json();
      setItems(data);
    } catch (err) {
      console.log("Oh no an error! ", err)
    }
  }

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <main>
      <h1>Inventory Management APP</h1>
      <Items items={items} />
    </main>
  )

  // return (
  //   <div className={styles.App}>
  //     <header className={styles['App-header']}>
  //       <Welcome />
  //     </header>
  //   </div>
  // );

}

export default App;
