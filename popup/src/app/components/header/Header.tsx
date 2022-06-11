import React from 'react';
import usePaginationContext from '../usePaginationContext';
import styles from './Header.module.css';
export default function Header(){
    const {setActivePage, activePage} = usePaginationContext();
    return (
        <header className={styles.header}>
            <button className={activePage === 'default' ? styles.activeButton: styles.nonActiveButton} onClick={() => setActivePage('default')}>summary</button>
            <button className={activePage === 'timeGraph' ? styles.activeButton: styles.nonActiveButton}  onClick={() => setActivePage('timeGraph')}>graph</button>
            <button className={activePage === 'settings' ? styles.activeButton: styles.nonActiveButton}  onClick={() => setActivePage('settings')}>settings</button>
        </header>
    );
}