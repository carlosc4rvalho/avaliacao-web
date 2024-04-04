import styles from "./Timeline.module.css";

export default function Timeline() {
  return (
    <article id="timeline" className={styles.timelineContainer}>
      <header>
        <h2>
          Cronograma
        </h2>
      </header>
      
      <table className={styles.timelineTable}>
        <tr>
          <th>Horário/Dia</th>
          <th>06/05/2024</th>
          <th>07/05/2024</th>
          <th>08/05/2024</th>
          <th>09/05/2024</th>
          <th>10/05/2024</th>
        </tr>

        <tr>
          <td>19:30</td>
          <td>Palestra</td>
          <td>Palestra</td>
          <td>Palestra</td>
          <td>Palestra</td>
          <td>Palestra</td>
        </tr>

        <tr>
          <td>20:30</td>
          <td>Intervalo</td>
          <td>Intervalo</td>
          <td>Intervalo</td>
          <td>Intervalo</td>
          <td>Intervalo</td>
        </tr>

        <tr>
          <td>21:00</td>
          <td>Oficina</td>
          <td>Oficina</td>
          <td>Oficina</td>
          <td>Oficina</td>
          <td>Oficina</td>
        </tr>
      </table>
    </article>
  );
}
