import React from 'react'
import styles from './Hero.module.css'

export default (props) => (
    <div className={styles.Hero}>
        {props.children}
    </div>
)