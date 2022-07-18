import { FunctionComponent } from "react";

import CostWithRupeeIcon from "./CostWithRupeeIcon";
import Offer from "./Offer";

import styles from "../styles/components/costDetails.module.scss";

type CostDetails = {
  price: number;
  discountPrice?: number;
};

const CostDetails: FunctionComponent<CostDetails> = ({
  price,
  discountPrice,
}) => {
  return (
    <div className={styles.container}>
      <CostWithRupeeIcon cost={discountPrice ? discountPrice : price} />
      {discountPrice ? <CostWithRupeeIcon cost={price} striked /> : null}
      {discountPrice ? (
        <Offer offer={Math.round(((price - discountPrice) / price) * 100)} />
      ) : null}
    </div>
  );
};
export default CostDetails;
