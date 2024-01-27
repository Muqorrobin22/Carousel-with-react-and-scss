import styles from "./CarouselInner.module.scss";

export function CarouselInner() {
  return (
    <>
      <ul className={styles.carousel_inner}>
        <li className={styles.carousel_inner__item}>
          <img src="/images/image1.jpg" alt="image" />
          <div className={styles.carousel__item_text}>
            <h1> First Slide </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates qui cum neque delectus. Obcaecati nesciunt rem harum
              ipsum eaque hic iusto, cum vel veniam eum autem tempora, nam,
              possimus asperiores?
            </p>
          </div>
        </li>
        <li className={styles.carousel_inner__item}>
          <img src="/images/image2.jpg" alt="image2" />
          <div className={styles.carousel__item_text}>
            <h1>Second Slide</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Accusamus, dolorum! Repudiandae exercitationem recusandae odio
              optio ad! Veniam omnis et, optio voluptates quibusdam, quaerat,
              voluptatum quo deserunt aliquid perferendis repellat ipsam.
            </p>
          </div>
        </li>
        <li className={styles.carousel_inner__item}>
          <img src="/images/image3.jpg" alt="image3" />
          <div className={styles.carousel__item_text}>
            <h1>third Slide</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo
              repellendus aspernatur distinctio aperiam, culpa voluptatibus
              alias nesciunt debitis, vel porro quos atque eveniet, neque cum
              adipisci in deserunt earum fugit?
            </p>
          </div>
        </li>
      </ul>
    </>
  );
}
