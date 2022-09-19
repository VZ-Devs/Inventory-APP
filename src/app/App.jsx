import React from 'react';
import styles from './App.module.css';
import Welcome from './components/Welcome/Welcome';

function App() {
  return (
    <div className={styles.App}>
      <header className={styles['App-header']}>
        <Welcome />
      </header>
    </div>
  );
}

export default App;
