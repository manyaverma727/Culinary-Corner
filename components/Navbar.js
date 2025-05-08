"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import styles from "../styles/Navbar.module.css"

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <Image src="/placeholder.svg?height=50&width=150" alt="Culinary Delights" width={150} height={50} priority />
        </Link>

        <div className={styles.hamburger} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className={`${styles.navLinks} ${menuOpen ? styles.active : ""}`}>
          <Link href="/" className={styles.active}>
            Home
          </Link>
          <Link href="/about">About</Link>
          <Link href="/recipes">Recipes</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact</Link>
        </div>

        <div className={`${styles.authButtons} ${menuOpen ? styles.active : ""}`}>
          <Link href="/login" className={styles.loginBtn}>
            Login
          </Link>
          <Link href="/signup" className={styles.signupBtn}>
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  )
}