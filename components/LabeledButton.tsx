import { FunctionComponent, ReactChild } from "react";

import IconPlaceholder from "../public/assets/iconPlaceholder.svg";

import styles from "../styles/components/labeledButton.module.scss";

type LabeledButton = {
  icon?: ReactChild;
  label: string;
};

const LabeledButton: FunctionComponent<LabeledButton> = ({ icon, label }) => {
  return (
    <div className={styles.container}>
      <div className={styles.iconWrapper}>
        {icon ? icon : <IconPlaceholder />}
      </div>
      <div className={styles.labelWrapper}>
        {label ? label : "Label placeholder"}
      </div>
    </div>
  );
};
export default LabeledButton;
