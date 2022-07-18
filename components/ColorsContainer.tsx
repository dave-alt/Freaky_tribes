import { FunctionComponent, useState } from "react";

import styles from "../styles/components/colorsContainer.module.scss";
import Color from "./Color";

type ColorsContainer = {
  colors: Array<any>;
};

const ColorsContainer: FunctionComponent<ColorsContainer> = ({ colors }) => {
  const [selectedColor, setSelectedColor] = useState<any | null>(null);

  return (
    <div className={styles.container}>
      {colors.map((color) => (
        <Color
          key={color.id}
          color={color.color}
          selected={color.color === selectedColor}
          onPress={() => setSelectedColor(color.color)}
        />
      ))}
    </div>
  );
};
export default ColorsContainer;
