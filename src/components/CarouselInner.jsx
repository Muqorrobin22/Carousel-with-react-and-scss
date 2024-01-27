import styles from "./CarouselInner.module.scss";

export function CarouselInner() {
  return (
    <>
      <ul className={styles.carousel_inner}>
        <li className={styles.carousel_inner__item}>
          <img src="/images/image1.jpg" alt="image" />
          <div>
            <h1>Coba 1</h1>
            <p>Deskripsion</p>
          </div>
        </li>
        <li className={styles.carousel_inner__item}>
          <img src="/images/image2.jpg" alt="image2" />
          <div>
            <h1>Coba 2</h1>
            <p>Deskripsion</p>
          </div>
        </li>
        <li className={styles.carousel_inner__item}>
          <img src="/images/image3.jpg" alt="image3" />
          <div>
            <h1>Coba 3</h1>
            <p>Deskripsion</p>
          </div>
        </li>
      </ul>
    </>
  );
}
