import { Container } from "@mantine/core";
import TitleSection from "@shared/titlesction/TitleSection";
import styles from "./FeedBack.module.css";
import person from "@assets/Alsafwa/girl.png";
import { useState } from "react";
import Button from "@shared/Button/Button";


const { parentDiv } = styles;

export default function FeedBack() {
  const profiles = [
    {
      src: person,
      name: "هاجر محمد",
      top: "6%",
      left: "30%",
      borderColor: "green",
    },
    {
      src: person,
      name: "ريم محمد",
      top: "40%",
      left: "50%",
      borderColor: "blue",
    },
    {
      src: person,
      name: "ياسمين محمد",
      top: "41%%",
      left: "20%",
      borderColor: "red",
    },
    {
      src: person,
      name: "هاجر محمد",
      top: "10%",
      left: "70%",
      borderColor: "yellow",
    },
  ];

  const [data, setData] = useState({ name: "مريم محمد" });
  const [isFading, setIsFading] = useState(false);

  const handleClick = (name: string) => {
    setIsFading(true);
    setTimeout(() => {
      setData({ name });
      setIsFading(false);
    }, 500);
  };

  return (
    <>
      {" "}
      <div style={{marginTop:"200px"}}>
        <TitleSection title="آراء عن المنصة" />
        <Container className={parentDiv}>
          <div className={styles.mapContainer}>
            {profiles.map((profile, index) => (
              <div
                key={index}
                className={styles.profilePic}
                onClick={() => handleClick(profile.name)}
                style={{
                  top: profile.top,
                  left: profile.left,
                  borderColor: profile.borderColor,
                }}>
                <img src={profile.src} alt="Profile" />
              </div>
            ))}
            <div
              className={`${styles.cardContainer} ${
                isFading ? styles.fadeOut : styles.fadeIn
              }`}>
              <div className={styles.card}>
                <p className={styles.cardText}>
                  شكرا لكم على كل شيء لقد كانت المنصة اكثر من رائعة، والان لقد
                  انتقلت للصف الثانى الثانوى بمجموع رائع
                </p>
                <div className={styles.cardLines}>
                  <div
                    className={styles.line}
                    style={{ background: "#FF0000" }}></div>
                  <div
                    className={styles.line}
                    style={{ background: "#FFA500" }}></div>
                  <div
                    className={styles.line}
                    style={{ background: "#FF0000" }}></div>
                </div>
                <div className={styles.cardProfile}>
                  <img
                    src={person}
                    alt="Profile"
                    className={styles.cardProfileImage}
                  />
                  <p className={styles.cardProfileName}>{data.name}</p>
                  <p className={styles.cardProfileRole}>طالبة بالمنصة</p>
                </div>
                <div className={styles.cardLines}>
                  <div
                    className={styles.line}
                    style={{ background: "#FF0000" }}></div>
                  <div
                    className={styles.line}
                    style={{ background: "#FFA500" }}></div>
                  <div
                    className={styles.line}
                    style={{ background: "#FF0000" }}></div>
                </div>
              </div>
            </div>
          </div>
          
        </Container>
      </div>
      <Button  route="/all-feedback" text="جميع الاراء" />
    </>
  );
}
