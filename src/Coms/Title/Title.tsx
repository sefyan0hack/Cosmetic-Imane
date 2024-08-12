"use client";

import {useState} from 'react';
import styles from './Title.module.css'; // Ensure you have this CSS module
import { assets } from '@/src/assets/assets';

function Title() {
    const [isBarOpen, setIsBarOpen] = useState(false);

    return (
        // <div className={styles.titleContainer}>
        //     <p className={styles.Title}> Cosmetic By Imane</p>
        // </div>
    <div className={styles.titleContainer}>
      <div className={styles.titleWrapper}>
        <p className={styles.title}>Cosmetic By Imane</p>
        <img
          onClick={(e) => {
            e.preventDefault(); // Prevent default link behavior
            setIsBarOpen(prevState => !prevState); // Toggle the state
          }}
          className={styles.bar}
          src={assets.navbar.src}
          alt="Navigation Icon"
        />
      </div>
      {isBarOpen && <div><p>Bar is pressed</p></div>}
    </div>
    );
}

export default Title;
