'use client';

import React, { useState } from "react";
import styles from '../styles/Navbar.module.css';
import { FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <span role="img" aria-label="logo">🍳</span> Culinary Corner
      </div>

      <div
        className={styles.hamburger}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      <div className={`${styles.navLinks} ${menuOpen ? styles.active : ''}`}>
        <Link href="/recipes" onClick={() => setMenuOpen(false)}>Recipes</Link>
        <Link href="/blog" onClick={() => setMenuOpen(false)}>Blog</Link>
        <Link href="/about" onClick={() => setMenuOpen(false)}>About</Link>
        <Link href="/create" onClick={() => setMenuOpen(false)}>Create</Link>
      </div>

      <div className={styles.rightSection}>
        <Link href="/profile">
          <Image
            src="/avatar.jpg"
            alt="avatar"
            height={100}
            width={100}
            className={styles.avatar}
          />
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;