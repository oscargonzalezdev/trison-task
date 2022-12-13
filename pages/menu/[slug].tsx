import axios from "axios";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import styles from "./MenuDetails.module.css";

interface MenuItem {
  id: string;
  name: string;
  details: string;
  image: string;
  image2: string;
  prices: any;
  nutritionLabelling: any;
}

const API_URL = "https://dev.menu.ninja/api/menu/156?key=8j5vfe%24*pfb**rzt&pretty=1";

function MenuDetails() {
  const [selectedMenu, setSelectedMenu] = useState<MenuItem>();
  const router = useRouter();
  const { slug } = router.query;
  const nutrition = selectedMenu?.nutritionLabelling.Item;

  useEffect(() => {
    axios
      .get(API_URL)
      .then((response) => {
        const menus: MenuItem[] = response.data.menu.items;
        const menu = menus.filter((item) => {
          return item.id === slug;
        });
        setSelectedMenu(menu[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [slug]);

  return (
    <>
      <div className={styles.bg}>
        <section
          className={styles.container}
          style={{ backgroundImage: `url(${selectedMenu?.image2})` }}
        >
          <article>
            <h1>{selectedMenu?.name}</h1>
            <p>{selectedMenu?.details}</p>
            <p className={styles.price}>Price: {selectedMenu?.prices.price.price} €</p>
          </article>
          <aside>
            <table className={styles.table}>
              <thead>
                <td>
                  <h3>Nutrion Label</h3>
                </td>
              </thead>
              <tbody>
                <tr>
                  <td>carbohydrate</td>
                  <td>{nutrition?.carbohydrate}</td>
                </tr>
                <tr>
                  <td>energykcal</td>
                  <td>{nutrition?.energykcal}</td>
                </tr>
                <tr>
                  <td>energy</td>
                  <td>{nutrition?.energykj}</td>
                </tr>
                <tr>
                  <td>fat</td>
                  <td>{nutrition?.fat}</td>
                </tr>
                <tr>
                  <td>fibre</td>
                  <td>{nutrition?.fibre}</td>
                </tr>
                <tr>
                  <td>protein</td>
                  <td>{nutrition?.protein}</td>
                </tr>
                <tr>
                  <td>salt</td>
                  <td>{nutrition?.salt}</td>
                </tr>
                <tr>
                  <td>saturates</td>
                  <td>{nutrition?.saturates}</td>
                </tr>
              </tbody>
            </table>
          </aside>
        </section>
      </div>
    </>
  );
}

export default MenuDetails;
