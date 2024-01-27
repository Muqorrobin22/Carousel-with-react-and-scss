import { useRef } from "react";
import styles from "./CarouselInner.module.scss";

export function CarouselInner() {
  const firstImage = useRef(null);
  const secondImage = useRef(null);
  const thirdImage = useRef(null);

  console.log(firstImage);

  function handleScrollFirstImage() {
    firstImage.current.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }

  function handleScrollSecondImage() {
    secondImage.current.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }

  function handleScrollThirdImage() {
    thirdImage.current.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }

  return (
    <>
      <ul className={styles.carousel_inner}>
        <nav className={styles.carousel_inner__navigation}>
          <div
            className={styles.nav_item}
            onClick={handleScrollFirstImage}
          ></div>
          <div
            className={styles.nav_item}
            onClick={handleScrollSecondImage}
          ></div>
          <div
            className={styles.nav_item}
            onClick={handleScrollThirdImage}
          ></div>
        </nav>
        <li className={styles.carousel_inner__item}>
          <img src="/images/image1.jpg" alt="image" ref={firstImage} />
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
          <img src="/images/image2.jpg" alt="image2" ref={secondImage} />
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
          <img src="/images/image3.jpg" alt="image3" ref={thirdImage} />
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
