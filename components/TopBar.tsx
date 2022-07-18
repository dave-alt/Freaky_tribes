import { FunctionComponent } from "react";
import Router from "next/router";

import BackIcon from "../public/assets/backIcon.svg";
import Mascot from "../public/assets/mascot.svg";

import styles from "../styles/components/topbar.module.scss";
import Link from "next/link";

type TopBar = {
  currentPage?: string;
  desc?: string;
};

const TopBar: FunctionComponent<TopBar> = ({ currentPage, desc }) => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.backIcon} onClick={() => Router.back()}>
          <BackIcon />
        </div>

        <div>
          <div className={styles.textWrapper}>
            <div className={styles.currentPageWrapper}>
              <p className={styles.currentPage}>
                {currentPage ? currentPage : null}
              </p>
            </div>
            {desc ? (
              <div className={styles.descWrapper}>
                <p className={styles.desc}>{desc ? desc : null}</p>
              </div>
            ) : null}
          </div>
        </div>

        <Link href="/" passHref>
          <div className={styles.mascot}>
            <Mascot />
          </div>
        </Link>
      </div>
    </>
  );
};
export default TopBar;
