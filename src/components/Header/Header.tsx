import React from 'react'
import styles from './Header.module.css'

const Header:React.FC=()=>{
    return (
        <header className={styles.header}>
            <nav className={styles.menu}>
                <ul className='ul'>
                    <li>
                        <a href='H'>Home</a>
                    </li>
                    <li>
                        <a href='a'> About</a>
                    </li>
                    <li>
                        <a href='C'>Contact</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
} 

export default Header