import { FC } from 'react';
import { auth } from '../../fireBase';//!Chi linum normal zhanaparhov
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

import styles from './signIn.module.css'

const SignIn: FC = () => {

    const signIn = async () => {
        const provider = new GoogleAuthProvider()

        try {
            await signInWithPopup(auth, provider)
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <button onClick={signIn} className={styles.signin}>
            Sign-In with Google
        </button>
    )
}

export default SignIn;
