import style from "./style.module.css";
import Image from "next/image";
import Button from "@/component/navbar/Button";

export default function Home() {
  return (
    <section className={style.container}>
      <div className={style.content1}>
        <Image
          src="/images/1.jpeg"
          alt="1"
          width={300}
          height={300}
          className={style.images}
        />
        <div className={style.about}>
          <h1>Hi, I&#900;m Elsa.</h1>
          <p>
            I&#900;m a Fullstack Developer based in Indonesia. <br /> Currently,
            working mostly in Front End Development, but still enjoyed learning
            about Back End Development.
          </p>
          <Button href="/portfolio" buttonName="Check My Portofolio" />
        </div>
      </div>
      <div className={style.content2}>
        <div className={style.list}>
          <h1> I can help you to:</h1>
          <ul className={style.ul}>
            <li>Slicing your UI Design convert into HTML/CSS</li>
            <li>Build your responsive website with Vue JS/React JS/Next JS</li>
            <li>Build your mobile app with React Native</li>
          </ul>
          <Button href="/services" buttonName="Check My Services" />
        </div>
        <Image
          src="/images/2.jpeg"
          alt="2"
          width={300}
          height={300}
        />
      </div>
    </section>
  );
}
