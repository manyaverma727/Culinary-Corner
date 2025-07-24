import React from "react";
import styles from "../styles/ProfileHeader.module.css";

export default function ProfileHeader() {
  return (
    <div className={styles.profileHeader}>
      <img
        src="https://i.pinimg.com/736x/34/e4/62/34e4622ac9c2a69f0c3ca1bbec7bbc5b.jpg"
        alt="User Avatar"
        className={styles.avatar}
      />
      <div className={styles.userInfo}>
        <h2 className={styles.name}>Manya Verma</h2>
        <p className={styles.bio}>Food Blogger | Recipe Creator</p>
        <button className={styles.followButton}>Follow</button>
      </div>
    </div>
  );
}