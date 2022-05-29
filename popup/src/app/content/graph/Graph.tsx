import Circle from "./circle/Circle";
import styles from "./Graph.module.css";

export default function Graph() {
    return <article className={styles.container}>
        <h1>Graph</h1>
        <Circle/>
    </article>;
}