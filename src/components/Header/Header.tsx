import React from 'react'
import { Link } from 'react-router-dom'
import User from 'components/User/User'
import Search from 'components/Search/Search'
import SignIn from 'components/SignIn/SignIn'
import { HeaderProps } from 'components/Search/Search.props'
import useTheme from 'Theme/useTheme'
import { FaRegSun, FaRegMoon } from "react-icons/fa6"
import styles from './Header.module.css'



const Header: React.FC<HeaderProps> = ({ searchAutocomplete, handleSignOut, user }) => {
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
                    {
                        user ? <User handleSignOut={handleSignOut} user={user}/> : <SignIn/>  
                    }
                </div>
            </nav>
        </header>
    )
}

export default Header

