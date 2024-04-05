import React from 'react'
import styles from "./Event.module.css";
import image from "../../assets/images/image.svg";
import circleCheck from "../../assets/icons/circleCheck.svg";
import logoPartner from "../../assets/icons/logoPartner.svg";


export default function Event() {
  return (
    <article id="event" className={styles.eventContainer}>
      <header>
        <h2>O Evento</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem cumque consequuntur voluptatibus saepe assumenda quo, esse autem. Dolore harum aliquid cum ipsam laudantium velit amet adipisci iste, ipsa est perferendis!
        </p>
      </header>

      <aside className={styles.eventContent}>
        <picture>
          <img src={image} alt="Image" />
        </picture>

        <div>
          <ul className={styles.list}>
            <li className={styles.item}>
              <img src={circleCheck} alt="check box marcado" />
              <span>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem asperiores odit minus.
              </span>
            </li>
            <li className={styles.item}>
              <img src={circleCheck} alt="check box marcado" />
              <span>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem asperiores odit minus.
              </span>
            </li>
            <li className={styles.item}>
              <img src={circleCheck} alt="check box marcado" />
              <span>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem asperiores odit minus.
              </span>
            </li>
            <li className={styles.item}>
              <img src={circleCheck} alt="check box marcado" />
              <span>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem asperiores odit minus.
              </span>
            </li>
          </ul>

          <a href="registration">Inscreva-se</a>
        </div>
      </aside>

      <aside className={styles.partnershipsContainer}>
        <header>
          <h2>
            Nossas Parcerias
          </h2>
        </header>

        <ul className={styles.ListPartnerships}>
          <li className={styles.item}>
            <picture>
              <img src={logoPartner} alt="paceiro do IFPR" />
            </picture>
          </li>
          <li className={styles.item}>
            <picture>
              <img src={logoPartner} alt="paceiro do IFPR" />
            </picture>
          </li>
          <li className={styles.item}>
            <picture>
              <img src={logoPartner} alt="paceiro do IFPR" />
            </picture>
          </li>
          <li className={styles.item}>
            <picture>
              <img src={logoPartner} alt="paceiro do IFPR" />
            </picture>
          </li>
        </ul>
      </aside>
    </article>
  )
}