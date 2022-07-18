import { FunctionComponent, useState } from "react";

import Check from "../public/assets/check.svg";

import styles from "../styles/components/labeledOption.module.scss";

type LabeledOption = {
  label: string;
};

const LabeledOption: FunctionComponent<LabeledOption> = ({ label }) => {
  const [selected, setSelected] = useState(false);

  return (
    <div
      className={selected ? styles.selected : styles.container}
      onClick={() => {
        setSelected(!selected);
      }}
    >
      <div className={styles.checkWrapper}>
        <Check />
      </div>
      <div className={styles.labelWrapper}>{label ? label : "LABEL"}</div>
    </div>
  );
};
export default LabeledOption;
