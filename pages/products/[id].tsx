import { NextPage } from "next";

import TopBar from "../../components/TopBar";
import CallToAction from "../../components/CallToAction";
import Carousel from "../../components/Carousel";
import SlidingModal from "../../components/SlidingModal";

import ColorsContainer from "../../components/ColorsContainer";
import CostDetails from "../../components/CostDetails";
import SizeCaption from "../../components/SizeCaption";

import { colors } from "../../public/dummyColors";
import { sizes } from "../../public/dummySizes";

import styles from "../../styles/pages/productDetail.module.scss";

import { images } from "../../public/dummyImageList";

const ProductDetail: NextPage = () => {

  
  return (
    <>
      <div className={styles.header}>
        <TopBar currentPage="Brand Name" desc="Brand Desc" />
      </div>
      <div className={styles.container}>
        <div className={styles.carouselWrapper}>
          <Carousel images={images} />
        </div>

        <div className={styles.productDetailsWrapper}>
          <SlidingModal>
            <p className={styles.brandName}>Brand Name</p>
            <p className={styles.brandDesc}>Brand Desc</p>
            <div className={styles.costDetailsWrapper}>
              <CostDetails price={2000} discountPrice={1000} />
            </div>
            <div className={styles.colorsContainerWrapper}>
              <ColorsContainer colors={colors} />
            </div>
            <div className={styles.sizeCaptionWrapper}>
              <SizeCaption sizes={sizes} />
            </div>

            <p className={styles.longDesc}>
              LYCRA’s loose, long-sleeved, collared pullover of soft, absorbent
              fabric, as cotton jersey, with close-fitting or elastic cuffs and
              sometimes a drawstring at the waist, commonly worn during athletic
              activity for warmth or to induce sweating.
            </p>
          </SlidingModal>
        </div>
      </div>
      <div className={styles.ctaWrapper}>
        <CallToAction />
      </div>
    </>
  );
};
export default ProductDetail;
