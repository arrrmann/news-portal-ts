import React from 'react'
import User from '../User/User'
import styles from './Header.module.css'
import Search from '../Search/Search'
import { SearchProps } from '../Search/Search.props'

const Header:React.FC<SearchProps>=({searchAutocomplete})=>{
    return (
        <header className={styles.header}>
            <nav className={styles.menu}>
                <div className={styles.ulS}>
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
                    <Search searchAutocomplete={searchAutocomplete}/>
                </div>
                <div className={styles.userDiv}>
                    <User/>
                </div>
            </nav>
        </header>
    )
} 

export default Header