import React, { useRef, useEffect, ReactNode, useState } from 'react';
import styles from './modal.module.css';

interface ModalProps{
    children:ReactNode
}

const Modal: React.FC<ModalProps> = ({children}) => {
    const [isOpen, setIsOpen]=useState<Boolean>(true)
    const modalRef = useRef<HTMLDivElement>(null)
//! UseRef-y tuyl e talis mez pahpanel hxum cankacac dom-elementi vra
//! useRef-y nayev petq e galis state-i arjeq pagelu hamar (erb mez petq e aranc rerender-i ashxatanq kam state-i naxord arjeqy misht pahel)
    const closeModal = (event:MouseEvent)=>{
        if(modalRef.current && !modalRef.current.contains(event.target as Node)){ //? .current-y henc hxman arjeqn e (mer depqum div-y)
            //! Stugum enq te current-y ka, u curent-y chi nerarum event-i target-y 
            setIsOpen(false)
        }
    }

    useEffect(()=>{
        document.addEventListener('click', closeModal)

        return ()=>{
            document.removeEventListener('click', closeModal)
        }
    }, [])

    return (
        <>
            {
                isOpen && (<div className={styles.modalOverlay}>
                            <div ref={modalRef} className={styles.modal}>
                                <div className={styles.modalContent}>{children}</div>
                            </div>
                        </div>)
            }
        </>
    )
}

export default Modal
//! Cankacac HTML-i tesak Node e