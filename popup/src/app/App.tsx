import React from 'react';
import styles from './App.module.css';
import Content from './content/Content';
import Header from './header/Header';
function App() {
  return (
        <div className={styles.app}>
          <Header/>
          <Content/>
        </div>
  );
}

export default App;
