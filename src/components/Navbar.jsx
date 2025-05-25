import styles from './Navbar.module.css'
import React from 'react'
import Link from 'next/link'

export default function Navbar(props) {
    const { page, setPage } = props;

    return (
        <nav className={styles.navbar}>
            <Link className={styles.button + ' ' + (page == 'home' ? styles.selected : '')} onClick={() => setPage('home')} href='/home'>Home</Link>
            <Link className={styles.button + ' ' + (page == 'events' ? styles.selected : '')} onClick={() => setPage('events')} href='/events'>Events</Link>
            <Link className={styles.button + ' ' + (page == 'about' ? styles.selected : '')} onClick={() => setPage('about')} href='/about'>About</Link>
            <Link className={styles.button + ' ' + (page == 'connect' ? styles.selected : '')} onClick={() => setPage('connect')} href='/connect'>Connect</Link>
        </nav>
    )
}