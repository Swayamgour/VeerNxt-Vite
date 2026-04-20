import React from 'react'
import styles from '../components/titles/Title.module.css';

function BreadCrum() {
    return (
        <div className={styles.breadcrumb}>
            <span>Home page</span>
            <span>›</span>
            <span className={styles.active}>About Military Force</span>
        </div>
    )
}

export default BreadCrum