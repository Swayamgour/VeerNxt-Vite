import React from 'react'
import styles from "./Title.module.css";

function Title({ heading }) {
    return (
        <>
           
            
            <div className={styles.titleSection}>
                <h1>{heading}</h1>
            </div>
        </>

    )
}

export default Title