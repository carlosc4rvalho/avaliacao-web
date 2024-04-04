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
  const workshopsData = [
    {
      title: "Oficina 1",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus cumque temporibus dolorem aspernatur, vel totam? Earum, quibusdam. Esse, deleniti eaque! Fuga assumenda minus officia maxime officiis mollitia asperiores, doloribus dolorum.",
      imageUrl: "https://via.placeholder.com/300",
      professor: "Professora Exemplo",
      degree: "Doutora"
    },
    {
      title: "Oficina 2",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus cumque temporibus dolorem aspernatur, vel totam? Earum, quibusdam. Esse, deleniti eaque! Fuga assumenda minus officia maxime officiis mollitia asperiores, doloribus dolorum.",
      imageUrl: "https://via.placeholder.com/300",
      professor: "Professor Exemplo",
      degree: "Mestre"
    },
    {
      title: "Oficina 3",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus cumque temporibus dolorem aspernatur, vel totam? Earum, quibusdam. Esse, deleniti eaque! Fuga assumenda minus officia maxime officiis mollitia asperiores, doloribus dolorum.",
      imageUrl: "https://via.placeholder.com/300",
      professor: "Professor Exemplo",
      degree: "Doutor"
    }
  ];

  return (
    <main className={styles.mainContainer}>
      <Header />
      <Home />
      <Event />
      <Speakers />
      <Timeline />
      <Registration />
      <Footer />
    </main>
  );
}

export default App;