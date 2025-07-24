import React from "react";
import styles from "../styles/ProfileHeader.module.css";
import Image from "next/image";

export default function ProfileHeader() {
  return (
    <div className={styles.profileHeader}>
      <Image
        src="/avatar.jpg"
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