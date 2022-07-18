import { FunctionComponent } from "react";

import HeartIcon from "../public/assets/heartIcon.svg";

import styles from "../styles/components/callToAction.module.scss";

const CallToAction: FunctionComponent = () => {
  return (
    <div className={styles.container}>
      <div className={styles.btn1Wrapper}>
        <HeartIcon />
      </div>
      <div className={styles.btn2Wrapper}>
        <div className={styles.btn2}>ADD TO BAG</div>
      </div>
    </div>
  );
};
export default CallToAction;
