import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";
import AppAvatar from "../../Avatar/AppAvatar";
export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Chaima</h1>
        <p className={styles.description}>
          A Software Engineer student
        </p>
        <p className={styles.desc}>From concept to deployment, 
          I specialize in weaving intricate<br/> digital solutions that not only perform flawlessly 
          but also <br/>captivate and engage</p>
        
        <a href="mailto:chaima.saad.2202@email.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
     
    <AppAvatar/>
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
