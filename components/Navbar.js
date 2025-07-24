import React from "react";
import styles from '../styles/Navbar.module.css';
import { FaSearch } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <span role="img" aria-label="logo">🍳</span> Culinary Corner
      </div>

      <div className={styles.navLinks}>
        <Link href="/recipes">Recipes</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/about">About</Link>
        <Link href="/create">Create</Link>
      </div>

      <div className={styles.rightSection}>
        <div className={styles.searchWrapper}>
        </div>
        <Link href="/profile">
          <Image
            src="https://i.pinimg.com/736x/34/e4/62/34e4622ac9c2a69f0c3ca1bbec7bbc5b.jpg"
            alt="avatar"
            className={styles.avatar}
          />
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;