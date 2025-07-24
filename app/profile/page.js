import React from "react";
import "./nav.css";
import Navbar from "./nav";
import styles from "../../styles/ProfilePage.module.css";
import ProfileHeader from "../../components/ProfileHeader";
import ProfileTabs from "../../components/ProfileTabs";
import RecipeCard from "../../components/RecipeCard";
import Pagination from "../../components/Pagination";
import ImageGrid from "../../components/Images";

export default function ProfilePage() {
  return (
    <>
      <Navbar />
      <div className={styles.profilePage}>
        <ProfileHeader />
        <ProfileTabs />
        <Pagination />
        <ImageGrid />
      </div>
    </>
  );
}