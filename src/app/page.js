import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import styles from "./page.module.css";
import ImageTrail from "../components/ImageTrail/ImageTrail";
import MotionText from "../components/MotionText/MotionText";

export default function Home() {
  return (
    <main className={styles.main}>
      <ImageTrail
        items={[
          'https://picsum.photos/id/287/300/300',
          'https://picsum.photos/id/1001/300/300',
          'https://picsum.photos/id/1025/300/300',
          'https://picsum.photos/id/1026/300/300',
          'https://picsum.photos/id/1027/300/300',
          'https://picsum.photos/id/1028/300/300',
          'https://picsum.photos/id/1029/300/300',
          'https://picsum.photos/id/1030/300/300',
        ]}
        variant="3"
      >
        <Navbar />
        <Hero />
      </ImageTrail>

      <MotionText />
    </main>
  );
}
