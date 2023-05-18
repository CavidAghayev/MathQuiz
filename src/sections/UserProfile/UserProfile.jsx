import styles from "../UserProfile/UserProfile.module.css";
import arrow from "../../assets/images/arrow-down.svg";
import userProfile from "../../assets/images/Frame 32.svg";
export const UserProfile = () => {
  return (
    <div className={styles["user-profile"]}>
      <div className={styles.heading}>
        <h3>Imtahanlar</h3>
      </div>
      <div className={styles.gmail}>
        <img src={userProfile} alt="" />
        <span>username@gmail.com</span>
        <img src={arrow} alt="" />
      </div>
    </div>
  );
};
