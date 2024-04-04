import styles from "./Registration.module.css";
import image from "../../assets/images/image.svg";

function Registration() {
  return (
    <article id="registration" className={styles.registrationContainer}>
      <header>
        <h2>
          Inscrições
        </h2>
      </header>

      <div className={styles.registrationContent}>
        <picture>
          <img src={image} alt="Image" />
        </picture>

        <form>
          <header>
            <h3>
              Faça sua Inscrições. 
              <br/>
              Não perca essa oportunidade
            </h3>
          </header>

          <input type="text" placeholder="Nome Completo" required/>
          <input type="email" placeholder="Email" required/>
          <input type="text" placeholder="CPF"  required/>
          <button type="submit">Inscreva-se</button>
        </form>
      </div>
    </article>
  )
}

export default Registration;