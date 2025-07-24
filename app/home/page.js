
import Navbar from "../../components/Navbar";
import HeroSection from "../../components/HeroSection";
import Footer from "../../components/Footer";

export default function Home() {
  return (
    <main
      style={{
        backgroundImage: `
          linear-gradient(rgba(31, 31, 31, 0.7), rgba(31, 31, 31, 0.7)),
          url('https://i.pinimg.com/1200x/11/04/ce/1104ceec7c36ec21bcf821dcdf7393c4.jpg')
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