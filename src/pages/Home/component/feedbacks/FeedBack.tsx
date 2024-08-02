import { Container } from "@mantine/core";
import TitleSection from "@shared/titlesction/TitleSection";
import styles from "./FeedBack.module.css";
import person from "@assets/Alsafwa/girl.png";
import { useEffect, useState } from "react";
import Button from "@shared/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@store/Store";
import { IFeedBack } from "@utilities/interfaces/PublicInterfce";
import { GetAllFeedbackApi } from "@store/api/FeedBackApi";

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
  const [isFading, setIsFading] = useState(false);
  const { feedbacks } = useSelector((state: RootState) => state.FeedBack);
  const [data, setData] = useState<IFeedBack>(feedbacks[0]);
  const handleClick = (feedback: IFeedBack) => {
    setIsFading(true);
    setTimeout(() => {
      setData(feedback);
      setIsFading(false);
    }, 500);
  };
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(GetAllFeedbackApi());
  }, []);

  return (
    <>
      {" "}
      {feedbacks.length > 0 ? (
        <>
          {" "}
          <div style={{ marginTop: "200px" }}>
            <TitleSection title="آراء عن المنصة" />
            <Container className={parentDiv}>
              <div className={styles.mapContainer}>
                {feedbacks.slice(0, 4).map((profile, index) => (
                  <div
                    key={index}
                    className={styles.profilePic}
                    onClick={() => handleClick(profile)}
                    style={{
                      top: profiles[index].top,
                      left: profiles[index].left,
                      borderColor: profiles[index].top,
                    }}>
                    <img src={profile.imgUrl} alt="Profile" />
                  </div>
                ))}
                <div
                  className={`${styles.cardContainer} ${
                    isFading ? styles.fadeOut : styles.fadeIn
                  }`}>
                  <div className={styles.card}>
                    <p className={styles.cardText}>{data?.text}</p>
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
                        src={data?.imgUrl}
                        alt="Profile"
                        className={styles.cardProfileImage}
                      />
                      <p className={styles.cardProfileName}>{data?.name}</p>
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
          <Button route="/all-feedback" text="جميع الاراء" />
        </>
      ) : (
        <>
          لم يتم اضافه اي اراء
          <Button route="/all-feedback" text="جميع الاراء" />
        </>
      )}
    </>
  );
}
