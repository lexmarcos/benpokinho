import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const arr = [1, 2, 3, 4];
  const arr1 = [1, 2, 3, 4, 5, 6];
  const options = [1, 2, 3, 5, 8, 13, 21, 34, 55, 89, "?"];
  return (
    <div>
      <Head>
        <title>BenPokinho</title>
        <meta name="description" content="BenPokinho" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <div className={styles.outBoxOfCards}>
          <div className={styles.horizontalCards}>
            {arr1.map((item) => (
              <div className={styles.playerCard}>{item}</div>
            ))}
          </div>
          <div className={styles.innerBoxOfCards}>
            <div className={styles.verticalCards}>
              {arr.map((item) => (
                <div className={styles.playerCard}>{item}</div>
              ))}
            </div>
            <Card className={styles.cardShowCards}>
              <Button variant="contained">Show Cards</Button>
            </Card>
            <div className={styles.verticalCards}>
              {arr.map((item) => (
                <div className={styles.playerCard}>{item}</div>
              ))}
            </div>
          </div>
          <div className={styles.horizontalCards}>
            {arr1.map((item) => (
              <div className={styles.playerCard}>{item}</div>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.options}>
        {options.map((item) => (
          <div className={styles.option}>{item}</div>
        ))}
      </div>
    </div>
  );
};

export default Home;
