import React from 'react';
import styles from "./Header.module.css";
import logo from "../../assets/icons/logoIF.svg";
// import btnMenuHamburguer from "../../assets/icons/btnMenuHamburger.svg";

export default function Header() {
    return (
        <header className={styles.headerContainer}>
            <nav className={styles.navBar}>
                <a href="#" className={styles.logoIF}>
                    <picture>
                        <img src={logo} alt="Logo Intituto Federal do Paraná - IFPR" />
                    </picture>
                </a>

                <ul className={styles.navMenu}>
                    <li className={styles.item}>
                        <a href="#home">Inicio</a>
                    </li>
                    <li className={styles.item}>
                        <a href="#event">Evento</a>
                    </li>
                    <li className={styles.item}>
                        <a href="#speakers">Palestrantes</a>
                    </li>
                    <li className={styles.item}>
                        <a href="#workshops">oficinas</a>
                    </li>
                    <li className={styles.item}>
                        <a href="#timeline">Cronograma</a>
                    </li>
                    <li className={styles.item}>
                        <a href="#registration">Inscrição</a>
                    </li>
                </ul>

                {/* <button className={styles.btnMenuHamburguer}>
                    <picture>
                        <img src={btnMenuHamburguer} alt="Botão Menu Hambuger" />
                    </picture>
                </button> */}
            </nav>
        </header>
    )
}
