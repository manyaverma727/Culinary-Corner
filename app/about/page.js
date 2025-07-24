'use client'

import Image from 'next/image'
import "../../styles/about.css";

export default function AboutPage() {
  return (
    <div className="about-container">
    <div className="about-hero">
      <h1>Culinary Corner</h1>
      <p>
        Welcome to <strong>Culinary Corner</strong>, your go-to platform for discovering, sharing, and savoring global recipes from passionate home cooks and professional chefs alike.
      </p>
    </div>

    <div className="about-section">
      <h2>Our Mission</h2>
      <p>
        We aim to bring the world closer through food. Whether you&apos;re craving a classic Indian curry, a creamy Italian pasta, or a quick healthy meal, you&apos;ll find inspiration here.
      </p>
    </div>

    <div className="about-section">
      <h2>What We Offer</h2>
      <p>
        At SpiceSavor, we provide:
        <br />
            . A vibrant community of food lovers<br />
            . Easy-to-follow recipes for all skill levels<br />
            . Cuisines from around the globe<br />
            . A clean, ad-free cooking experience<br />
            . Tips and tricks from expert chefs
      </p>
    </div>

    <div className="about-section">
      <h2>Our Vision</h2>
      <p>
        We believe food is a universal language that connects hearts. SpiceSavor is more than a recipe site — it&apos;s a place where culture, creativity, and passion meet on a plate.
      </p>
    </div>

    <div className="about-section">
      <h2>Meet the Creator</h2>
      <div className="creator">
        <Image
          src="/avatar.jpg"
          alt="Creator"
          width={120}
          height={120}
          className="creator-img"
        />
        <p>
          Hi! I&apos;m <strong>Manya Verma</strong>, a food enthusiast, developer, and the creator of SpiceSavor. I built this platform to share my love for culinary exploration and to create a space where food brings people together.
        </p>
      </div>
    </div>

    <div className="about-section">
      <h2>Join Our Journey</h2>
      <p>
        Whether you&apos;re here to learn, share, or simply scroll through mouthwatering dishes — we&apos;re thrilled to have you. Discover recipes, connect with fellow foodies, and let your culinary adventure begin.
      </p>
    </div>

    <div className="about-footer">
      <p>Join us in celebrating the joy of cooking, one recipe at a time. 🍽️</p>
    </div>
  </div>
)
}