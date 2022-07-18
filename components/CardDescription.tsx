import { FunctionComponent } from "react";

import CostDetails from "./CostDetails";

import styles from "../styles/components/cardDescription.module.scss";

type CardDescription = {
  brandName: string;
  brandDesc: string;
  price: number;
  discountPrice?: number;
};

const CardDescription: FunctionComponent<CardDescription> = ({
  brandName,
  brandDesc,
  price,
  discountPrice,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.textWrapper}>
        <p className={styles.brandName}>{brandName}</p>
        <div className={styles.brandDesc}>{brandDesc}</div>
        <div className={styles.costDetailsWrapper}>
          <CostDetails price={price} discountPrice={discountPrice} />
        </div>
      </div>
    </div>
  );
};
export default CardDescription;
