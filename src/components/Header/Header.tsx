import React, { useState } from 'react'
import User from '../User/User'
import styles from './Header.module.css'
import Search from '../Search/Search'
import { SearchProps } from '../Search/Search.props'
import { Link } from 'react-router-dom'
import { FaRegSun, FaRegMoon } from "react-icons/fa6"


const Header: React.FC<SearchProps> = ({ searchAutocomplete }) => {
    const [isDark, setIsDark] = useState(false)

    const toggole = () => {
        setIsDark((prevTheme) => !prevTheme)
    }

    return (
        <header className={`${styles.header} ${isDark ? styles.darkTheme : ''}`}>
            <nav className={styles.menu}>
                <div className={styles.ulS}>
                    <ul className='ul'>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/about'> About</Link>
                        </li>
                        <li>
                            <Link to='/contact'>Contact</Link>
                        </li>
                    </ul>
                    <Search searchAutocomplete={searchAutocomplete} />
                </div>
                <div className={styles.userDiv}>
                    <div className={styles.toggole}>
                        <button onClick={toggole}>
                            {isDark ? <FaRegSun /> : <FaRegMoon />}
                        </button>
                    </div>
                    <User/>
                </div>
            </nav>
        </header>
    )
}

export default Header

