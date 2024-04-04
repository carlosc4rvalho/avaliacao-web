import styles from "./Speakers.module.css";
import image from "../../assets/images/image.svg";

export default function Speakers() {
  return (
    <article id="speakers" className={styles.speakersContainer}>
      <header>
        <h2>
          Palestrantes
        </h2>
      </header>

      <main className={styles.speakersContent}>
        <div>
          <picture>
            <img src={image} alt="Image" />
          </picture>

          <aside>
            <header>
              <h3>Humans are much more smarter than AI</h3>
            </header>

            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum quod beatae libero.
            </p>

            <span>
              Learn more
            </span>
          </aside>
        </div>

        <div>
          <picture>
            <img src={image} alt="Image" />
          </picture>

          <aside>
            <header>
              <h3>Humans are much more smarter than AI</h3>
            </header>

            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum quod beatae libero.
            </p>

            <span>
              Learn more
            </span>
          </aside>
        </div>

        <div>
          <picture>
            <img src={image} alt="Image" />
          </picture>

          <aside>
            <header>
              <h3>Humans are much more smarter than AI</h3>
            </header>

            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum quod beatae libero.
            </p>

            <span>
              Learn more
            </span>
          </aside>
        </div>
      </main>

      <a href="timeline">Cronograma</a>
    </article>
  )
}