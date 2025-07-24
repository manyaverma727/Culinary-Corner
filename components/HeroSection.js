"use client";
import "../styles/HeroSection.css";

export default function HeroSection() {
  return (
    <section className="heroSection">
      <div className="heroOverlay"></div>
      <div className="heroContent">
        <h1 className="heroTitle">Cook, Share, Enjoy</h1>
        <p className="heroSubtitle">
          Discover delicious recipes and share your own creations with our vibrant food community.
        </p>
      </div>
    </section>
  );
}