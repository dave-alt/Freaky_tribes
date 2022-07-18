import { FunctionComponent } from "react";

import LabeledButton from "./LabeledButton";

import Separator from "../public/assets/separator.svg";
import FilterIcon from "../public/assets/filterIcon.svg";
import SortIcon from "../public/assets/sortIcon.svg";

import styles from "../styles/components/floatingButtonContainer.module.scss";
import Link from "next/link";

type FloatingButtonContainer = {
  sortModalOpened: boolean;
  setSortModalOpened: Function;
};

const FloatingButtonContainer: FunctionComponent<FloatingButtonContainer> = ({
  sortModalOpened,
  setSortModalOpened,
}) => {
  return (
    <div className={styles.container}>
      <Link href="/products/filters" passHref>
        <div className={styles.btn1Wrapper}>
          <LabeledButton icon={<FilterIcon />} label="filter" />
        </div>
      </Link>
      <div className={styles.separatorWrapper}>
        <Separator />
      </div>
      <div
        className={styles.btn2Wrapper}
        onClick={() => setSortModalOpened(!sortModalOpened)}
      >
        <LabeledButton icon={<SortIcon />} label="sort" />
      </div>
    </div>
  );
};
export default FloatingButtonContainer;
