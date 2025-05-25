import styles from "./page.module.css";
import React from "react";
import ProfileCard from "../../components/ProfileCard";

export default function About() {
  //object array for board members
  const boardMembers = [
    {
      name: "Zareen Tasmin",
      position: "Co-President",
      major: "Informatics - Senior",
      picture: "zareen.jpg",
    },
    {
      name: "Safa Jamal",
      position: "Co-President",
      major: "Informatics - Senior",
      picture: "safa.jpg",
    },
    {
      name: "Heena Vahora",
      position: "Director of Diversity Outreach",
      major: "Informatics - Senior",
      picture: "heena.jpg",
    },
    {
      name: "Razan Mansour",
      position: "Director of Finance",
      major: "Informatics - Senior",
      picture: "razan.jpg",
    },
    {
      name: "Minnah Tazmeen",
      position: "Creative Director",
      major: "Informatics - Senior",
      picture: "minnah.jpg",
    },
    {
      name: "Zakiyah Farooque",
      position: "Director of Organizational Affairs",
      major: "Informatics - Senior",
      picture: "zakiyah.jpg",
    },
    {
      name: "Faiza Imran",
      position: "Director of Professional Outreach",
      major: "Informatics - Senior",
      picture: "faiza.jpg",
    },
    {
      name: "Sarah Ghamadsi",
      position: "Director of PR",
      major: "Informatics - Senior",
      picture: "sarah.png",
    },
  ];

  return (
    <section>
      <img src="/team-image.png" className={styles.teamPicture} />
      <div className={styles.how}>
        <img className={styles.beganStar} src="/smoothcorner.png" />
        <h1>How It All Began?</h1>
      </div>
      <div className={styles.beganContainer}></div>
      <div className={styles.boardHeaderContainer}>
        <img
          src="/smoothcorner.png"
          className={"star " + styles.starTopLeft}
        ></img>
        <img
          src="/smoothcorner.png"
          className={"star " + styles.starBotRight}
        ></img>
        <h1 className={styles.boardText}>
          Meet Our <br />
          Board
        </h1>
      </div>
      <div className={styles.boardGrid}>
        {boardMembers.map((member, index) => {
          return (
            <ProfileCard
              key={index}
              name={member.name}
              position={member.position}
              major={member.major}
              picture={member.picture}
            />
          );
        })}
      </div>
    </section>
  );
}
