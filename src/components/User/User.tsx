import React, { useState, useRef, useEffect } from "react";
import { UserProps } from "./User.props";
import { FaUser, FaCaretDown } from 'react-icons/fa';
import styles from './user.module.css';


const User: React.FC<UserProps> = ({ handleSignOut, user }) => {
    const [isOpen, setIsOpen] = useState(false)
    const DDMenuRef = useRef<HTMLDivElement>(null)

    const closeDDMenu=(event: MouseEvent)=>{
        if(DDMenuRef.current && !DDMenuRef.current.contains(event.target as Node)){
            setIsOpen(false)
        }
    }

    useEffect(()=>{
        document.addEventListener('click', closeDDMenu)

        return ()=>{
            document.removeEventListener('click', closeDDMenu)
        }
    },[])

    const dropDown = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className={styles.user}>
            <div className={styles.userPic}>
                {
                    user?.photoURL ? <img src={user?.photoURL} alt="user" /> : <FaUser />
                }
            </div>
            <div className={styles.wrapper}>
                <div className={styles.clickBlock} onClick={dropDown}  ref={DDMenuRef}>
                    <FaCaretDown />
                </div>

                {
                    isOpen && (
                        <div className={styles.DDMenu}>
                            <ul>
                                <li>Settings</li>
                                <li>Profile</li>
                                <li>
                                    <button onClick={handleSignOut} className={styles.signOut}>Sign out</button>
                                </li>
                            </ul>
                        </div>
                    )
                }
            </div>

        </div>
    )
}

export default User