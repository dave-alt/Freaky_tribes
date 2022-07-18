import { NextPage } from "next";
import ProductCard from "../../components/ProductCard";
import TopBar from "../../components/TopBar";

import styles from "../../styles/pages/products.module.scss";

import { products } from "../../public/dummyProductsLink";
import FloatingButtonContainer from "../../components/FloatingButtonContainer";
import Router from "next/router";
import SortModal from "../../components/SortModal";
import { useState, useEffect, useRef } from "react";
import { setInterval } from "timers/promises";

const Products: NextPage = () => {
  const [sortModalOpened, setSortModalOpened] = useState(false);

  const [windowWidth, setWindowWidth] = useState(0);
  const [heightDifference, setHeightDifference] = useState(0);
  const [track1, setTrack1] = useState(0);
  const [track2, setTrack2] = useState(0);
  const filler = useRef(null);
  const height = (el1: any, el2: any) => {
    setTrack1(el1.getBoundingClientRect().height);
    setTrack2(el2.getBoundingClientRect().height);
    setHeightDifference(Math.round(Math.abs(track1 - track2)));
    console.log("heightDifference", heightDifference);
    if (heightDifference != 0) return heightDifference - 10;
  };
  useEffect(() => {
    const track1er = document.querySelector("#track2");
    const track2er = document.querySelector("#track1");
  
    function resizeHandler() {
      setWindowWidth(window.innerWidth);
      // console.log("window", windowWidth);
      
      height(track1er,track2er)
      setTimeout(() => {
        filler?.current.style.height = `${heightDifference}px`
      }, 4000);
    };
    window.addEventListener("resize", resizeHandler);


    // return window.removeEventListener("resize", resizeHandler);
  }, [windowWidth,track1,track2,heightDifference]);

  return (
    <>
      <div className={styles.header}>
        <TopBar currentPage="All products" desc={`${products.length} items`} />
      </div>
      <div className={styles.container}>
        <div className={styles.productsWrapper}>
          <div id="track1" className={styles.track1}>
            {products.map(
              (product, i) =>
                i % 2 == 0 && (
                  <ProductCard
                    key={product.id}
                    width={product.width}
                    aspectHeight={parseFloat(product.aspectheight)}
                    height={product.height}
                    brandName={product.brandName}
                    brandDesc={product.brandDesc}
                    price={product.price}
                    discountPrice={product.discountPrice}
                    imageLink={product.link}
                    onPress={() => Router.push(`/products/${product.id}`)}
                  />
                )
            )}
          </div>
          <div id="track2" className={styles.track2}>
            {products.map(
              (product, i) =>
                i % 2 != 0 && (
                  <ProductCard
                    key={product.id}
                    width={product.width}
                    height={product.height}
                    aspectHeight={parseFloat(product.aspectheight)}
                    brandName={product.brandName}
                    brandDesc={product.brandDesc}
                    price={product.price}
                    discountPrice={product.discountPrice}
                    imageLink={product.link}
                    onPress={() => Router.push(`/products/${product.id}`)}
                  />
                )
            )}
            <div ref={filler} className={styles.filler}></div>
          </div>
          <div className={styles.trackFull} id="trackFull">
            {products.map(
              (product, i) =>
                i == 3 && (
                  <ProductCard
                    key={product.id}
                    aspectHeight={parseFloat(product.aspectheight)}
                    width={product.width}
                    height={product.height}
                    brandName={product.brandName}
                    brandDesc={product.brandDesc}
                    price={product.price}
                    discountPrice={product.discountPrice}
                    imageLink={product.link}
                    onPress={() => Router.push(`/products/${product.id}`)}
                  />
                )
            )}
          </div>
          <div className={styles.track1}>
            {products.map(
              (product, i) =>
                i % 2 != 0 && (
                  <ProductCard
                    key={product.id}
                    width={product.width}
                    height={product.height}
                    aspectHeight={parseFloat(product.aspectheight)}
                    brandName={product.brandName}
                    brandDesc={product.brandDesc}
                    price={product.price}
                    discountPrice={product.discountPrice}
                    imageLink={product.link}
                    onPress={() => Router.push(`/products/${product.id}`)}
                  />
                )
            )}
          </div>
          <div className={styles.track2}>
            {products.map(
              (product, i) =>
                i % 2 == 0 && (
                  <ProductCard
                    key={product.id}
                    width={product.width}
                    height={product.height}
                     aspectHeight={parseFloat(product.aspectheight)}
                    brandName={product.brandName}
                    brandDesc={product.brandDesc}
                    price={product.price}
                    discountPrice={product.discountPrice}
                    imageLink={product.link}
                    onPress={() => Router.push(`/products/${product.id}`)}
                  />
                )
            )}
          </div>
        </div>
      </div>
      <div className={styles.floatingButtonWrapper}>
        <FloatingButtonContainer
          sortModalOpened={sortModalOpened}
          setSortModalOpened={setSortModalOpened}
        />
      </div>
      <SortModal isOpened={sortModalOpened} />
    </>
  );
};
export default Products;
