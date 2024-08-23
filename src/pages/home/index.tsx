import styles from "./home.module.css";
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <main className={styles.container}>
      <form className={styles.form}>
        <input
          type="text"
          placeholder="Digite o nome da moeda..."
        />

        <button type="submit">
          <BsSearch size={30} color="#fff" />
        </button>
      </form>

      <table>
        <thead>
          <tr>
            <th scope="col">Moeda</th>
            <th scope="col">Valor Mercado</th>
            <th scope="col">Preço</th>
            <th scope="col">Volume</th>
            <th scope="col">Mudança 24Hs</th>
          </tr>
        </thead>

        <tbody id="tbody">
          <tr className={styles.tr}>
            <td className={styles.tdLabel} data-label="Moeda">
              <div className={styles.name}>
                <Link to={"/datail/bitcoin"}>
                  <span>Bitcoin</span> | BTC
                </Link>
              </div>
            </td>

            <td className={styles.tdLabel} data-label="Valor Mercado">
              1T
            </td>
            
            <td className={styles.tdLabel} data-label="Preço Final">
              8.000
            </td>

            <td className={styles.tdLabel} data-label="Volume">
              2B
            </td>

            <td className={styles.tdProfit} data-label="Mudança 24 Horas">
              <span>1.20</span>
            </td>

          </tr>
        </tbody>
      </table>
    </main>
  );
}