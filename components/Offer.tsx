import { FunctionComponent } from "react";

import styles from "../styles/components/offer.module.scss";

type Offer = {
  offer?: number;
};

const Offer: FunctionComponent<Offer> = ({ offer }) => {
  return (
    <div className={styles.container}>
      <p className={styles.offer}>{offer ? `(${offer}% OFF)` : null}</p>
    </div>
  );
};
export default Offer;
