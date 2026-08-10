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

import ecomallwork from "../herossection-animation-assets/ecomallwork.webp";
import highcloudWork from "../herossection-animation-assets/highcloud work.webp";
import kshatriyasWork from "../herossection-animation-assets/kshatriyas work.webp";
import leiutis from "../herossection-animation-assets/leiutis.webp";
import madboxwork from "../herossection-animation-assets/madboxwork.webp";
import mall360 from "../herossection-animation-assets/mall360.webp";
import naeeamzafar from "../herossection-animation-assets/naeeamzafar.webp";
import tieSiliconValley from "../herossection-animation-assets/tie silicon valley.webp";
import venturaWork from "../herossection-animation-assets/ventura work.webp";
import evoqueImpact from "../herossection-animation-assets/Evoque impact.webp";
import lifeCykul from "../herossection-animation-assets/life cykul.webp";

const trailImages = [
  evoqueImpact.src || evoqueImpact,
  lifeCykul.src || lifeCykul,
  ecomallwork.src || ecomallwork,
  highcloudWork.src || highcloudWork,
  kshatriyasWork.src || kshatriyasWork,
  leiutis.src || leiutis,
  madboxwork.src || madboxwork,
  mall360.src || mall360,
  naeeamzafar.src || naeeamzafar,
  tieSiliconValley.src || tieSiliconValley,
  venturaWork.src || venturaWork,
];

export default function Home() {
  return (
    <main className={styles.main}>
      <ImageTrail
        items={trailImages}
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
