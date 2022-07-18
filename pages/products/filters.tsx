import { useState } from "react";
import { NextPage } from "next";

import TopBar from "../../components/TopBar";
import CategoryCard from "../../components/CategoryCard";

import styles from "../../styles/pages/filters.module.scss";

const filters = [
  { id: 1, type: "Brand" },
  { id: 2, type: "Price" },
  { id: 3, type: "Discount" },
  { id: 4, type: "Size" },
  { id: 5, type: "Fabric" },
  { id: 6, type: "Color" },
  { id: 7, type: "Gender" },
  { id: 8, type: "Age" },
];

const Filters: NextPage = () => {
  const [selectedFilter, setSelectedFilter] = useState<any | null>(null);

  return (
    <>
      <TopBar currentPage="Filter" />
      <div className={styles.container}>
        <div className={styles.categories}>
          {filters.map((filter) => (
            <CategoryCard
              key={filter.id}
              label={filter.type}
              selected={filter.type === selectedFilter}
              onPress={() => setSelectedFilter(filter.type)}
            />
          ))}
        </div>

        <div className={styles.subCategories}>Sub-Categories</div>
      </div>
    </>
  );
};
export default Filters;
