import { FunctionComponent } from "react";

import styles from "../styles/components/categoryCard.module.scss";

type CategoryCard = {
  label: string;
  selected: boolean;
  onPress: any;
};

const CategoryCard: FunctionComponent<CategoryCard> = ({
  label,
  selected,
  onPress,
}) => {
  return (
    <div className={styles.container} onClick={onPress}>
      <div className={selected ? styles.selected : styles.default}>{label}</div>
      <div
        className={
          selected ? styles.numberTagSelected : styles.numberTagDefault
        }
      >
        3
      </div>
    </div>
  );
};
export default CategoryCard;
