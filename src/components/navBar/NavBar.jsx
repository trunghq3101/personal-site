import React from 'react'
import styles from './NavBar.module.css'
import { Link } from 'react-router-dom'

export default (props) => {
    return (
        <nav className={styles.NavBar}>
            {["Home", "Projects", "Contact"].map(item => (
                <div key={item} className={styles.NavItem}>
                    <Link to={`/${item}`}>{item}</Link>
                </div>
            ))}
        </nav>
    )
}
