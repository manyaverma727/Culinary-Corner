import React from "react";
import "../styles/Footer.css";
import { FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";
import Link from "next/link";

function Footer() {
  return (
    <footer className="Footer">
      <div className="topLinks">
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/privacy">Privacy Policy</Link>
        <Link href="/terms">Terms of Service</Link>
      </div>

      <div className="socialIcons">
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </a>
      </div>

      <p className="copy">&copy;2024 Culinary Corner. All rights reserved.</p>
    </footer>
  );
}

export default Footer;