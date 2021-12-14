import { useParams } from 'react-router-dom';
import { useEffect } from "react";
import { loadPokemon } from "../../context/pokemon/pokemon.actions";
import { useSelector } from "../../hooks/useSelector";
import { CircularProgress, Container, Grid } from "@mui/material";
import { useDispatch } from "../../hooks/useDispatch";
import styles from './pokemon.module.css'
import female from "../../../assets/images/female.png"
import male from "../../../assets/images/male.png"
import genderless from "../../../assets/images/genderless.png"

const colorsDict = {
    'normal': 'grey',
    'water': '#699ccf',
    'fire': '#f5804e',
    'electric': '#db922c',
    'grass': '#38c955',
    'ice': '#7ebecf',
    'fighting': 'brown',
    'poison': 'darkmagenta',
    'ground': '#ab694d',
    'flying': '#8c82e0',
    'psychic': '#de54c0',
    'bug': '#6fa66f',
    'rock': '#a38c24',
    'ghost': 'darkorchid',
    'dragon': '#406ab8',
    'dark': '#231c70',
    'steel': '#7691a6',
    'fairy': '#dd7e6b'
}

const genderImgs = {
    male: <img src={male} className={styles.gender} />,
    female: <img src={female} className={styles.gender} />,
    genderless: <img src={genderless} className={styles.gender} />
}

export const PokemonPage = () => {
    let { id } = useParams();
    const dispatch = useDispatch()

    const pokemon = useSelector(state => state.pokemon.data)
    const gender = useSelector(state => state.pokemon.data?.gender)
    const isPokemonLoading = useSelector(state => state.pokemon.isLoading)


    useEffect(() => {
        dispatch(loadPokemon(dispatch)(id))
    }, [])

    const generateName = (name) => {
        return name.split("-").map((str) => {
            let res
            if (str === "hp") {
                res = str.toUpperCase()
            }
            else {
                res = str.charAt(0).toUpperCase() + str.slice(1);
            }
            return res

        }).join(" ")

    }

    const PokemonStat = ({ stat, name }) => {
        const liArr = []
        for (let i = 0; i < 15; i++) {
            const active = Math.round(stat / 15)
            const listItem = <li className={styles.list_item} style={{ background: (active >= i + 1) ? "lightskyblue" : "white" }}></li>
            liArr.push(listItem)
        }
        return (<ul>{liArr.reverse()}<li className={styles.stat_list} title={stat}>{generateName(name)}</li></ul>)
    }

    const PokemonContent = () => {

        return <Grid className={styles.container} container spacing={4}>
            <Grid className={styles.name} item xs={12}><h2>{pokemon.species.name} №{id.toString().padStart(3, "0")}</h2></Grid>
            <Grid item xs={12} md={6}>
                <img className={styles.img}
                    src={pokemon?.sprites?.other?.['official-artwork']?.front_default} alt="Pokemon" />
                <div className={styles.stats_block}>
                    <p className={styles.stats_title}>Stats</p>
                    <ul className={styles.stats}>
                        {pokemon.stats.map((element, id) => {
                            return <li key={`${id}-stat-name`}>
                                <PokemonStat stat={element.base_stat} name={element.stat.name} />
                            </li>
                        })}
                    </ul>
                </div>
            </Grid>
            <Grid item xs={12} md={6}>
                <div className={styles.abilities_block}>
                    <div>
                        <ul className={styles.column}>
                            <li>
                                <p className={styles.abilities_title}>Height</p>
                                <p className={styles.abilities_value}>{pokemon.height / 10} m</p>
                            </li>
                            <li>
                                <p className={styles.abilities_title}>Weight</p>
                                <p className={styles.abilities_value}>{pokemon.weight / 10} kg</p>
                            </li>
                            <li>
                                <p className={styles.abilities_title}>Gender</p>
                                <p className={styles.abilities_value}>{!!gender.length && gender.map(element => <p title={element} key={Math.random()} >{genderImgs[element]}</p>)}</p>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul className={styles.column}>
                            <li>
                                <p className={styles.abilities_title}>Abilities</p>
                                {pokemon.abilities.map((element, id) => {
                                    return <p className={styles.abilities_value} key={`${id}-ability-name`}>
                                        {element.ability.name}
                                    </p>
                                })}
                            </li>
                        </ul>
                    </div>
                </div>
                <div>
                    <p className={styles.type_title}>Type</p>
                    <ul className={styles.types}>
                        {pokemon.types.map((element, id) => {
                            return <li><p style={{ background: colorsDict[element.type.name] }} className={styles.info} key={`${id}-type-name`}>
                                {element.type.name}
                            </p></li>
                        })}
                    </ul>
                </div>
            </Grid>
        </Grid>
    }

    return <div>
        <Container>
            {(isPokemonLoading || !pokemon)
                ? <div className={styles.loading}><CircularProgress color="success" /></div>
                : <PokemonContent />
            }
        </Container>
    </div>
}
