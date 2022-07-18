import type { NextPage } from "next";

import CardDescription from "../components/CardDescription";
import CostDetails from "../components/CostDetails";
import CostWithRupeeIcon from "../components/CostWithRupeeIcon";
import LabeledButton from "../components/LabeledButton";
import Offer from "../components/Offer";
import ProductCard from "../components/ProductCard";
import TopBar from "../components/TopBar";
import FilterIcon from "../public/assets/filterIcon.svg";
import LabeledOption from "../components/LabeledOption";
import FloatingButtonContainer from "../components/FloatingButtonContainer";
import CallToAction from "../components/CallToAction";
import Toast from "../components/Toast";
import ColorsContainer from "../components/ColorsContainer";
import SizeCaption from "../components/SizeCaption";
import Carousel from "../components/Carousel";

import { products } from "../public/dummyProductsLink";
import { colors } from "../public/dummyColors";
import { sizes } from "../public/dummySizes";
import { images } from "../public/dummyImageList";
import ProductDetailsModal from "../components/SlidingModal";
import RadioButton from "../components/RadioButton";

const Home: NextPage = () => {
  return (
    <div>
      {/* <TopBar currentPage="Apparel" desc="200 items" />
      <CostWithRupeeIcon cost={2000} />
      <CostWithRupeeIcon cost={2000} striked />
      <Offer offer={50} />
      <CostDetails price={3999} discountPrice={1999} />
      <CardDescription
        brandName="Brand Name"
        brandDesc="Brand description"
        price={7999}
        discountPrice={4999}
      />
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        {products.map((product) => (
          <ProductCard
            key={product.id}
            brandName={product.brandName}
            brandDesc={product.brandDesc}
            price={product.price}
            discountPrice={product.discountPrice}
            imageLink={product.link}
          />
        ))}
      </div>
      <LabeledOption label="Choice" />
      <LabeledButton icon={<FilterIcon />} label="filter" />
      <FloatingButtonContainer />
      <CallToAction />
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        <Toast message="Neutral" />
        <Toast variant="success" message="Success" />
        <Toast variant="warning" message="Warning" />
        <Toast variant="danger" message="Danger" />
      </div>
      <ColorsContainer colors={colors} />
      <SizeCaption sizes={sizes} /> */}
      <Carousel images={images} />

      <ProductDetailsModal />

      <RadioButton label="label" onPress={() => console.log("radio")} />
    </div>
  );
};

export default Home;
