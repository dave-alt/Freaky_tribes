import styles from "../styles/components/radioButton.module.scss";

import RadioDefault from "../public/assets/radioDefault.svg";
import RadioSelected from "../public/assets/radioSelected.svg";
import { FunctionComponent } from "react";

type RadioButton = {
  selected?: any;
  label: string;
  onPress: any;
};

const RadioButton: FunctionComponent<RadioButton> = ({
  selected,
  label,
  onPress,
}) => {
  return (
    <div className={styles.container} onClick={onPress}>
      <div className={styles.radioWrapper} onClick={onPress}>
        {selected ? <RadioSelected /> : <RadioDefault />}
      </div>
      <div className={selected ? styles.selectedLabel : styles.labelWrapper}>
        {label}
      </div>
    </div>
  );
};
export default RadioButton;
