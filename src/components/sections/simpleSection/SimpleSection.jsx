import React from 'react'
import styles from './SimpleSection.module.css'

export default (props) => (
    <React.Fragment>
        <section className={styles.SimpleSection}>
            {props.children}
        </section>
        <div className={styles.Divider}>
        </div>
    </React.Fragment>
)