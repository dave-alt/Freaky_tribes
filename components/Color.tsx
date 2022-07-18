import { FunctionComponent } from "react";

import styles from "../styles/components/color.module.scss";

type Color = {
  color?: string;
  selected: any;
  onPress: any;
};

const Color: FunctionComponent<Color> = ({ color, selected, onPress }) => {
  return (
    <div className={styles.container}>
      <div
        className={selected ? styles.selected : styles.default}
        style={{ background: color }}
        onClick={onPress}
      ></div>
    </div>
  );
};
export default Color;
