import Styles from "./HeaderLesson.module.css";

export default function HeaderLesson({
  name,
  img,
  title,
}: {
  name: string;
  img: string;
  title:string;
}) {
  return (
    <div className={Styles.parent}>
      <p>{name}</p>
      <div className={Styles.conInfo}>
        <img src={img} alt="" />
        <span>{title}</span>
      </div>
    </div>
  );
}
