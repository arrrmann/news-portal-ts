import React from 'react'
import User from '../User/User'
import styles from './Header.module.css'
import Search from '../Search/Search'
import { SearchProps } from '../Search/Search.props'
import { Link } from 'react-router-dom'
import { FaRegSun, FaRegMoon } from "react-icons/fa6"
import useTheme from '../../Theme/useTheme'


const Header: React.FC<SearchProps> = ({ searchAutocomplete }) => {
    const {theme,toggleTheme}=useTheme()

    return (
        <header className={styles.header}>
            <nav className={styles.menu}>
                <div className={styles.ulS}>
                    <ul className='ul'>
                        <li className={styles.home}>
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
                        <button onClick={toggleTheme}>
                            {theme === 'dark' ? <FaRegSun /> : <FaRegMoon />}
                        </button>
                    </div>
                    <User/>
                </div>
            </nav>
        </header>
    )
}

export default Header

