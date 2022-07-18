import { FunctionComponent, useState } from "react";
import styles from "../styles/components/sortModal.module.scss";
import RadioButton from "./RadioButton";
import SlidingModal from "./SlidingModal";

type SortModal = {
  isOpened: boolean;
};

const sorts = [
  { id: 1, type: "Popularity" },
  { id: 2, type: "Discount" },
  { id: 3, type: "Name" },
  { id: 4, type: "Customer Rate" },
  { id: 5, type: "New Arrivals" },
  { id: 6, type: "Price: High to Low" },
  { id: 7, type: "Price: Low to High" },
];

const SortModal: FunctionComponent<SortModal> = ({ isOpened }) => {
  const [sortingType, setSortingType] = useState<any | null>(null);

  return (
    <div
      className={
        isOpened ? `${styles.container} ${styles.opened}` : styles.container
      }
    >
      <SlidingModal>
        {sorts.map((sort) => (
          <RadioButton
            key={sort.id}
            label={sort.type}
            selected={sort.type === sortingType}
            onPress={() => setSortingType(sort.type)}
          />
        ))}
      </SlidingModal>
    </div>
  );
};
export default SortModal;
