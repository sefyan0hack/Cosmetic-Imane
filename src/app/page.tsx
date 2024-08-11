import Image from "next/image";
import styles from "./page.module.css";
import Cards from "../Coms/Cards/Cards";
import Title from "../Coms/Title/Title";
import Contact from "../Coms/Contact/Contact";
function add( x: number, y: number ):number{
  return x+y;
}
function Home() {

  return (
    <main className={styles.main}>
      <title>  Cosmetics Imane </title>
      <Title/>
      <Cards/>
      <Contact/>
    </main>
  );
}
export default Home;