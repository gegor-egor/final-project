import {Button, Card, CardActions, CardContent, Typography} from "@mui/material"
import {useNavigate} from "react-router-dom"
import styles from "./pokemon-card.module.css"
import {caughtActions} from "../../context/caught/caught.actions";
import {useDispatch} from "../../hooks/useDispatch";
import {useSelector} from "../../hooks/useSelector";

export const PokemonCard = (props) => {
    const {id, name, imgSrc, url} = props
    const dispatch = useDispatch()
    const navigate = useNavigate();

    const caughtPokemons = useSelector(state => state.caught.items)

    const isCaught = caughtPokemons.findIndex(pokemon => pokemon.id === id) !== -1

    const onClick = () => {
        navigate(`/pokemon/${id}`)
    }

    const catchPokemon = () => {
        dispatch(caughtActions.catch({id, name, img: imgSrc, url}))
    }

    return <Card>
        <img
            className={styles.img}
            src={imgSrc}
            alt="Pokemon image"
        />
        <CardContent className={styles.content}>
            <p className={styles.id}>№{id.toString().padStart(3, "0")}</p>
            <Typography className={styles.pokName} gutterBottom variant="h5" component="div">
                {name}
            </Typography>
        </CardContent>
        <CardActions>
            <Button disabled={isCaught} color="success" onClick={catchPokemon} size="small">Catch</Button>
            <Button onClick={onClick} size="small">Learn More</Button>
        </CardActions>
    </Card>
}
