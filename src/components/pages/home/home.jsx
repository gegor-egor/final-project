import {List} from '../../common/list/list'
import Container from '@mui/material/Container'
import {PokemonCard} from '../../common/pokemon-card/pokemon-card'
import {useCallback, useEffect, useRef} from 'react'
import {CircularProgress} from '@mui/material'
import {loadPokemons, pokemonsActions} from "../../context/pokemons/pokemons.actions";
import {useSelector} from "../../hooks/useSelector";
import {useDispatch} from "../../hooks/useDispatch";
import {useIntersectionObserver} from "../../hooks/useIntersectionObserver";
import styles from "./home.module.css"

export const HomePage = () => {
    const dispatch = useDispatch()
    const pokemons = useSelector(state => state.pokemons.items)
    const isLoading = useSelector(state => state.pokemons.isLoading)
    const page = useSelector(state => state.pokemons.page)

    const parentRef = useRef(null)
    const childRef = useRef(null)

    const intersecting = useIntersectionObserver({parentRef, childRef})

    const memoLoadPokemons = useCallback(() => {
        loadPokemons(dispatch)(page)
    }, [])

    useEffect(() => {
        if (intersecting & !isLoading) {
            dispatch(pokemonsActions.updatePage())
            loadPokemons(dispatch)(page + 1)
        }
    }, [intersecting])

    useEffect(() => {
        if (!pokemons.length)
            memoLoadPokemons()
    }, [])

    return <div>
        <Container ref={parentRef}>
            <List>
                {pokemons.map(element => {
                    return <PokemonCard key={element.id} url={element.url} id={element.id} name={element.name}
                                        imgSrc={element.img}/>
                })}
            </List>
            {isLoading && <div className={styles.loading}><CircularProgress color="success"/></div>}
            <div ref={childRef} style={{ height: "40px"}}/>
        </Container>
    </div>
}
