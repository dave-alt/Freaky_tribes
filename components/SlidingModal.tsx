import { Component, FunctionComponent, ReactChild, ReactNode } from "react";

import styles from "../styles/components/slidingModal.module.scss";

import ThumbHandle from "../public/assets/thumbHandle.svg";

type SlidingModal = {
  children?: any;
};

const SlidingModal: FunctionComponent<SlidingModal> = ({ children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.handleWrapper}>
        <ThumbHandle />
      </div>
      {children}
    </div>
  );
};
export default SlidingModal;
