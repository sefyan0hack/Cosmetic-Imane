import React from 'react';
import styles from './Title.module.css'; // Ensure you have this CSS module

function Title() {
    return (
        <div className={styles.titleContainer}>
            <h1 className={styles.title}>Welcome to Cosmetics By Imane</h1>
        </div>
    );
}

export default Title;
