import React from 'react';
import styles from './Button.module.css';

const Button = ({
    children,
    variant = 'primary',
    size = 'medium',
    onClick,
    disabled = false,
    fullWidth = false,
    icon = null
}) => {
    return (
        <button
            className={`${styles.btn} ${styles[variant]} ${styles[size]} ${fullWidth ? styles.fullWidth : ''}`}
            onClick={onClick}
            disabled={disabled}
        >
            {icon && <span className={styles.icon}>{icon}</span>}
            {children}
        </button>
    );
};

export default Button;