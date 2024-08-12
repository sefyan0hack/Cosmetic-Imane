import React from 'react';
import styles from './Title.module.css'; // Ensure you have this CSS module

function Title() {
    return (
        <div className={styles.titleContainer}>
            <p className={styles.Title}> Cosmetic By Imane</p>
        </div>
    );
}

export default Title;
