import Image from "next/image";
import { FunctionComponent, useState } from "react";

import styles from "../styles/components/carousel.module.scss";

type Carousel = {
  images: Array<any>;
};

const Carousel: FunctionComponent<Carousel> = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState<any | null>(null);

  return (
    <div className={styles.container}>
      <div className={styles.highlight}>
        <Image
          src={selectedImage ? selectedImage : images[0].link}
          alt={`${selectedImage ? selectedImage : images[0].link} + image`}
          width={100}
          height={100}
          layout="responsive"
          objectFit="contain"
          priority
        />
      </div>
      <div className={styles.thumbnails}>
        {images.map((image) => (
          <div
            key={image.id}
            className={styles.thumbnail}
            onClick={() => setSelectedImage(image.link)}
          >
            <Image
              className={styles.thumbnail}
              src={image.link}
              alt={image.link}
              width={50}
              height={64}
              objectFit="cover"
              priority
            />
          </div>
        ))}
        <div className={styles.overlay}></div>
      </div>
    </div>
  );
};
export default Carousel;
