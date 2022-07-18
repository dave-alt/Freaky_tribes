import Image from "next/image";
import { FunctionComponent, useEffect } from "react";

import CardDescription from "./CardDescription";
import HeartIcon from "../public/assets/heartIcon.svg";

import styles from "../styles/components/productCard.module.scss";

type ProductCard = {
  brandName: string;
  brandDesc: string;
  imageLink: string;
  price: number;
  discountPrice?: number;
  onPress: any;
  width:number;
  height:number;
  aspectHeight:number;
};

const ProductCard: FunctionComponent<ProductCard> = ({
  brandName,
  brandDesc,
  imageLink,
  price,
  discountPrice,
  onPress,width,height,aspectHeight
}) => {
  // useEffect(() => {
  //   let span:any=[]
  //   let image:any=[]
  //   image=document.querySelectorAll('.productCard_imageWrapper__nd2UQ span img')
  //   span=document.querySelectorAll('.productCard_imageWrapper__nd2UQ span')
  //   console.log(span)
  //   console.log(image)
  //   span.forEach(el =>
  //     el.style.display="flex"
  //     el.style.overflow="visible"
  //     )
  //   image.forEach(img=>{
  //     img.style.maxWidth="unset"
  //     img.style.minWidth="unset"
  //     img.style.maxHeight="unset"
  //     img.style.minHeight="unset"
  //     img.style.height="auto"
  //     img.style.width="100%"
  //   })

  // }, [])


  return (
    <div className={styles.container} onClick={onPress}>
      <div className={styles.imageWrapper}>
        <Image
          className={styles.image}
          src={imageLink}
          alt="imagePlaceholder"
          width={1}
          height={aspectHeight}
          layout="responsive"
          objectFit="fill"
          priority
        />

        <HeartIcon />
      </div>
      <div className={styles.descWrapper}>
        <CardDescription
          brandName={brandName}
          brandDesc={brandDesc}
          price={price}
          discountPrice={discountPrice ? discountPrice : 0}
        />
      </div>
    </div>
  );
};
export default ProductCard;
