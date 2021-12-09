import styles from "./no-caught.module.css"

export const NoCaught = (props) => {
    const {message = "You haven't caught any pokemons yet"} = props
    return <div className={styles.phrase}>
        <p className={styles.text}>{message}</p>
    </div>
}
