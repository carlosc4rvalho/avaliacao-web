import React, { useRef, useEffect } from 'react';
import styles from "./Workshops.module.css";
import arrowLeft from "../../assets/icons/arrowLeft.svg"
import arrowRight from "../../assets/icons/arrowRight.svg"
import profile from "../../assets/images/profile.svg";

export default function Workshops() {
  const carouselRef = useRef(null);

  const handleNext = () => {
    carouselRef.current.scrollLeft += carouselRef.current.offsetWidth;
  };

  const handlePrev = () => {
    carouselRef.current.scrollLeft -= carouselRef.current.offsetWidth;
  };

  return (
    <article id="workshops" className={styles.workshopsContainer}>
      <header>
        Oficinas
      </header>

      <section className={styles.carouselSection}>
        <picture className={styles.arrow} onClick={handlePrev}>
          <img src={arrowLeft} alt="Seta para esquerda" width={35} />
        </picture>

        <ul ref={carouselRef} className={styles.carousel}>
          <li className={styles.workshopItem}>
            <article>
              <header>
                Oficina 1
              </header>

              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni in iure nam error iste autem. Amet, magnam in eius iste corporis, id esse eveniet eum expedita reiciendis consequatur fugit. Excepturi?
              </p>

              <figure>
                <img src={profile} alt="Profile" width={65} />
                <figcaption>
                  <span>Professora Exemplo</span>
                  <p>Doutora</p>
                </figcaption>
              </figure>
            </article>
          </li>
        
          <li className={styles.workshopItem}>
            <article>
              <header>
                Oficina 2
              </header>

              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni in iure nam error iste autem. Amet, magnam in eius iste corporis, id esse eveniet eum expedita reiciendis consequatur fugit. Excepturi?
              </p>

              <figure>
                <img src={profile} alt="Profile" width={65} />
                <figcaption>
                  <span>Professora Exemplo</span>
                  <p>Doutora</p>
                </figcaption>
              </figure>
            </article>
          </li>
        </ul>

        <picture className={styles.arrow} onClick={handleNext}>
          <img src={arrowRight} alt="Seta para direita" width={35} />
        </picture>
      </section>
    </article>
  );
}