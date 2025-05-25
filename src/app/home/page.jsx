import styles from './page.module.css';
import React from 'react'
import Link from 'next/link'
import CalendarEvent from '../../components/CalendarEvent';

export default function Home() {
    // these will be rendered into calendar events
    // edit or add to this array to change the events
    const events = [
        { eventName: "Event 1", description: "~Description~", date: "1/19/25", time: "3:00am", location: "CSE2 303" },
        { eventName: "Event 2", description: "A short description", date: "really long date", time: "6:00pm", location: "ECE 101" },
        { eventName: "Event 3", description: "A long long long long long long long long long long long long long description with scrollbar", date: "5/19/25", time: "7:30pm", location: "SAV 123" },
        { eventName: "Event 4", description: "A long long long long long long long long long long long long long description with scrollbar", date: "5/19/25", time: "7:30pm", location: "SAV 123" },
        { eventName: "Event 5", description: "A long long long long long long long long long long long long long description with scrollbar", date: "5/19/25", time: "7:30pm", location: "SAV 123" },
    ]

    return (
        <section className={styles.home}>
            <img src="/home-banner.png" className={styles.banner}></img>
            <div className={styles.homeContent}>
                <div className={styles.who}>
                    <div className={styles.whoHeading}>
                        <img src="/star.png" className={'star ' + styles.whoStarTopLeft}></img>
                        <h1 className={styles.header}>Who are we?</h1>
                    </div>
                    <div className={styles.whoBody}>
                        <p>
                            Our organization is dedicated to providing Muslim students at the iSchool with professional
                            and developmental support while fostering an inclusive environment. We empower Muslim students
                            and allies as information and technology leaders by promoting connection, establishing
                            networks, and building community.
                        </p>
                    </div>
                </div>
                <div className={styles.whoFooter}>
                    <Link href='/about'><p className={styles.link}>Learn More About Us!</p></Link>
                </div>

                <div className={styles.events}>
                    <div className={styles.eventsHeading}>
                        <img src="/star.png" className={'star ' + styles.eventsStarTopLeft}></img>
                        <h1 className={styles.header}>Upcoming Events</h1>
                        <img src="/star.png" className={'star ' + styles.eventsStarTopRight}></img>
                    </div>
                    <div className={styles.eventsLink}>
                        <Link href='/events'><p className={styles.link}>View All Events</p></Link>
                    </div>
                    <div className={styles.eventsContainer}>
                        {events.map((obj, i) => {
                            return <CalendarEvent
                                key={i}
                                eventName={obj.eventName}
                                description={obj.description}
                                date={obj.date}
                                time={obj.time}
                                location={obj.location}
                            ></CalendarEvent>
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}