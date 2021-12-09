import {useSelector} from "../../hooks/useSelector";
import Container from "@mui/material/Container";
import {List} from "../../common/list/list";
import {PokemonCard} from "../../common/pokemon-card/pokemon-card";
import {NoCaught} from "../../common/no-caught/no-caught";

export const CaughtPage = () => {
    const caughtPokemons = useSelector(state => state.caught.items)
    console.log(caughtPokemons);
    return <div>
        <Container>
            {caughtPokemons.length ? <List>
                {caughtPokemons.map(element => {
                    return <PokemonCard key={element.id} url={element.url} id={element.id} name={element.name}
                                        imgSrc={element.img}/>
                })}
            </List> : <NoCaught/>}
        </Container>
    </div>
}
