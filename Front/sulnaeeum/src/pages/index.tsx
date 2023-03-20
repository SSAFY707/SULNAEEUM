import Head from "next/head";
import Image from "next/image";
import useScroll from "../assets/useScroll";
import styles from "./styles.module.css";


export default function Home() {
  const scroll = useScroll();
  const isScrolled: boolean = scroll > 500;
  const translateY = isScrolled ? `${scroll - 500}px` : "0px";

  return (
    <>
      <Head>
        <title>SULNAEEUM | 술내음</title>
      </Head>
      <div className="h-[7000px]">
        <div className=" fixed z-30 right-1/2 top-1/2">
          <p>Scroll Value : {scroll}</p>
          <p>translateY :{translateY}</p>
        </div>
        <div className={styles["image-wrapper"]}>
          <Image
            className={`${isScrolled ? " absolute z-10 top-[500px]" : "fixed"}`}
            src="/bird.png"
            alt=""
            width={100}
            height={0}
            style={{ right: `${scroll}px`, bottom: 0 }}
          />
        </div>
        <div
          className={`${isScrolled ? " absolute z-10 top-[500px]" : "fixed"}`}
        >
          <div style={{ transform: `translateY(${translateY})` }}></div>
          <Image src="/main_1.jpg" alt="" width={1920} height={0} />
        </div>
      </div>
    </>
  );
}
