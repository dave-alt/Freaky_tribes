import { FunctionComponent } from "react";

import styles from "../styles/components/size.module.scss";

type Size = {
  size: string;
  selected: any;
  onPress: any;
};

const Size: FunctionComponent<Size> = ({ size, selected, onPress }) => {
  return (
    <div className={styles.container}>
      <div
        className={selected ? styles.selected : styles.default}
        onClick={onPress}
      >
        {size}
      </div>
    </div>
  );
};
export default Size;
