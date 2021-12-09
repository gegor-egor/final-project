import React from 'react'
import styles from './navigation.module.css'
import {NavLink} from 'react-router-dom'
import logo from '../../assets/images/logo.png'

export default function Navigation() {
    const navig = [
        {path: "/", name: "Home"},
        {path: "/caught", name: "Caught Pokemons"}
    ]
    const list = navig.map((element, index) => {
        return (
            <li key={`navigation-${index}`}>
                <NavLink className={({isActive}) => [
                    isActive ? styles.active : null,
                    styles.static
                ]
                    .filter(Boolean)
                    .join(" ")
                }
                         to={element.path}
                >
                    {element.name}
                </NavLink>
            </li>)
    })
    return (
        <nav className={styles.navigation}>
            <ul className={styles.navList}>
                {list}
            </ul>
            <img className={styles.logo} src={logo} alt="Logo"/>
        </nav>
    )
}


