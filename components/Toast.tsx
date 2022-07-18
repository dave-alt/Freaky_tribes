import { FunctionComponent } from "react";

import CloseIcon from "../public/assets/closeIcon.svg";

import styles from "../styles/components/toast.module.scss";

type Toast = {
  variant?: string;
  message: string;
};

const Toast: FunctionComponent<Toast> = ({ variant, message }) => {
  return (
    <div
      className={
        variant === "success"
          ? styles.success
          : variant === "warning"
          ? styles.warning
          : variant === "danger"
          ? styles.danger
          : styles.neutral
      }
    >
      <div className={styles.rectangle}></div>
      <div className={styles.message}>{message}</div>
      <div className={styles.closeWrapper}>
        <CloseIcon />
      </div>
    </div>
  );
};
export default Toast;
