import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import styles from "./page.module.css";
import ImageTrail from "../components/ImageTrail/ImageTrail";
import MotionText from "../components/MotionText/MotionText";
import Ourwork from "../components/Our-Work/Ourwork";
import Faq from "../components/FAQ/Faq";
import Engagement from "../components/engagement/Engagement";
import Articals from "../components/Articals/Articals";
import Testmonials from "../components/testmonials/Testmonials";
import Transformtext from "../components/Transformtext/Transformtext";
import Footer from "../components/Footer/Footer";

import img2 from "../herossection-animation-assets/img2.png";
import img3 from "../herossection-animation-assets/img3.png";
import img4 from "../herossection-animation-assets/img4.png";
import img5 from "../herossection-animation-assets/img5.png";
import img6 from "../herossection-animation-assets/img6.png";

export default function Home() {
  return (
    <main className={styles.main}>
      <ImageTrail
        items={[
          img2.src,
          img3.src,
          img4.src,
          img5.src,
          img6.src,
          img2.src,
          img3.src,
          img4.src,
        ]}
        variant="3"
      >  
        <Navbar />
        <Hero />
      </ImageTrail>

      <MotionText />
      <Ourwork /> 
      <Faq />
      <Engagement />
      <Articals />
      <Testmonials />
      <Transformtext />
      <Footer />
    </main>
  );
}
