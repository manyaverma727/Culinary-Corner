'use client';

import React from 'react';
import Link from 'next/link';
import './nav.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Culinary Corner</div>
      <ul>
        <li><Link href="/home">Home</Link></li>
        <li><Link href="/create">Create</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/blog">Blog</Link></li>
      </ul>
    </nav>
  );
}