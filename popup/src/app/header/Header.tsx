import React from 'react';
import styles from './Header.module.css';
export default function Header(){
    return (<>
        <header className={styles.header}>
            <h3 className={styles.title}>Web time tracker</h3>
            <a>Daily summary</a>
            <a>Weekly summary</a>
            <a>Monthly summary</a>
            <a>Custom length</a>
            <a>settings</a>
            <p>Here is your timesheet of times spent on each site in last 24 hours</p>
        </header>
        <a>summary in circle</a>
        <a>summary table</a>
        <a>summary timeseries</a>
        <a>download summary</a>
        </>
    );
}