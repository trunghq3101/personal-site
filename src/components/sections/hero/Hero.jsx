import React from 'react'
import styles from './Hero.module.css'

export default (props) => (
    <section className={styles.Hero}>
        {props.children}
    </section>
)