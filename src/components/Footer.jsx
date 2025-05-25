import styles from './Footer.module.css'
import React from 'react'
import Link from 'next/link'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerInfo}>
                <div className={styles.logoCol}>
                    <div className={styles.crop}>
                        <img src='/imuslims-logo-transparent.png' className={styles.footerLogo} alt='imuslims logo' />
                    </div>
                    <p>Empowering Muslim students to lead, connect, and thrive.</p>
                </div>

                <div className={styles.linkCol}>
                    <h3>Resources</h3>
                    <div>
                        <p>Prayer Times</p>
                        <p>Campus Prayer Spaces</p>
                    </div>
                </div>

                <div className={styles.linkCol}>
                    <h3>Quick Links</h3>
                    <div>
                        <p>Upcoming Events</p>
                        <p>Past Events</p>
                        <p>Our Board</p>
                        <p>Membership Form</p>
                    </div>
                </div>

                <div className={styles.linkCol}>
                    <h3>Contact us</h3>
                    <div>
                        <div className={styles.email}>
                            <i className="fa-regular fa-envelope"></i>
                            <p>contact@company.com</p>
                        </div>
                        <div className={styles.socials}>
                            <Link href='https://www.instagram.com/imuslims.uw/'><i className={"fa-brands fa-instagram " + styles.instagram}></i></Link>
                            <Link href='https://www.linkedin.com/company/imuslims-uw/'><i className={"fa-brands fa-linkedin-in " + styles.linkedIn}></i></Link>
                        </div>
                    </div>
                </div>
            </div>
            <hr className={styles.divider} />
            <div className={styles.footerCopyright}>
                <p>Copyright 2025</p>
                <p>All Rights Reserved</p>
            </div>
        </footer>
    )
}

