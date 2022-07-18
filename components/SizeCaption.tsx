import { FunctionComponent, useState } from "react";

import styles from "../styles/components/sizeCaption.module.scss";

import Size from "./Size";

type SizeCaption = {
  sizes: Array<any>;
};

const SizeCaption: FunctionComponent<SizeCaption> = ({ sizes }) => {
  const [selectedSize, setSelectedSize] = useState<any | null>(null);

  return (
    <div className={styles.container}>
      {sizes.map((size) => (
        <Size
          key={size.id}
          size={size.size}
          selected={size.size === selectedSize}
          onPress={() => setSelectedSize(size.size)}
        />
      ))}
    </div>
  );
};
export default SizeCaption;
