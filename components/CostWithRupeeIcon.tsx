import { FunctionComponent } from "react";

import RupeeIcon from "../public/assets/rupeeIcon.svg";

import styles from "../styles/components/costWithRupeeIcon.module.scss";

type CostWithRupeeIcon = {
  cost: number;
  striked?: boolean | null;
};

const CostWithRupeeIcon: FunctionComponent<CostWithRupeeIcon> = ({
  cost,
  striked,
}) => {
  return (
    <div className={styles.container}>
      <div className={striked ? styles.rupeeIconStriked : styles.rupeeIcon}>
        <RupeeIcon />
      </div>
      <div className={styles.costWrapper}>
        <p className={striked ? styles.striked : styles.cost}>
          {cost ? cost : null}
        </p>
      </div>
    </div>
  );
};
export default CostWithRupeeIcon;
