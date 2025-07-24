
import Navbar from "../../components/Navbar";
import HeroSection from "../../components/HeroSection";
import Footer from "../../components/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <main
      style={{
        backgroundImage: `
          linear-gradient(rgba(31, 31, 31, 0.7), rgba(31, 31, 31, 0.7)),
          url('/homebg.jpg')
        `,
        backgroundColor: "#1f1f1f", 
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        width: "100%",
        color: "white",
      }}
    >
      <Navbar />
      <HeroSection />
      <Footer />
    </main>
  );
}