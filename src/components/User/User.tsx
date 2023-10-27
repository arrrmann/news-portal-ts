import React from "react";
import { useState } from "react";
import styles from './user.module.css'
import {FaUser, FaCaretDown} from 'react-icons/fa'


const User: React.FC=()=>{

    const [isOpen, setIsOpen]=useState(false)
    const dropDown=()=>{
        setIsOpen(!isOpen)
    }
    
    return(
        <div className={styles.user}>
            <div className={styles.userPic}>
                <FaUser/>
            </div>
            <div className={styles.wrapper}>
                <div className={styles.clickBlock} onClick={dropDown}>
                    <FaCaretDown/>
                </div>

                {
                    isOpen && (
                        <div className={styles.DDMenu}>
                            <ul>
                                <li>Settings</li>
                                <li>Profile</li>
                                <li>Sign out</li>
                            </ul>
                        </div>
                    )
                }
            </div>

        </div>
    )
}

export default User