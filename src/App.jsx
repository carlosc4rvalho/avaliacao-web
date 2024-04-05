import Header from "./components/Header/Header.jsx";
import Home from "./components/Home/Home.jsx";
import Event from "./components/Event/Event.jsx";
import Speakers from "./components/Speakers/Speakers.jsx";
import Workshops from "./components/Workshops/Workshops.jsx";
import Timeline from "./components/Timeline/Timeline.jsx";
import Registration from "./components/Registration/Registration.jsx";
import Footer from "./components/Footer/Footer.jsx";
import styles from "./App.module.css";

function App() {
  return (
    <main className={styles.mainContainer}>
      <Header />
      <Home />
      <Event />
      <Speakers />
      <Workshops />
      <Timeline />
      <Registration />
      <Footer />
    </main>
  );
}

export default App;