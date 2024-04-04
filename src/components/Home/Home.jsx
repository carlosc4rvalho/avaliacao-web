import styles from "./Home.module.css";
import image from "../../assets/images/image.svg";

export default function Home() {
  return (
    <article id="home" className={styles.homeContainer}>
      <aside className={styles.homeContent}>
        <header>
          <h1>Semana da Física e Tecnologia</h1>
          <p>Inscreva-se para participar</p>
        </header>

        <a href="registration">Inscreva-se</a>
      </aside>

      <picture>
        <img src={image} alt="Imagem" />
      </picture>
    </article>
  )
}