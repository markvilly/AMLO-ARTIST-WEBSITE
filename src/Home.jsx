import React from "react";
import MerchCard from "./MerchCard/MerchCard";
import MusicCard from "./MusicCard/MusicCard";
import products from "./Contents/products";
import BottomCard from "./BottomCard/BottomCard";

export default function Home() {
  const productOne = products.find((prod) => prod.id === 1);
  const productTwo = products.find((prod) => prod.id === 2);
  return (
    <div>
      <div className="latest-release">Latest Release</div>
      <MusicCard
        item_class="music-art"
        img_title="AMLO.jpg"
        button_name="Link"
      />
      <MusicCard
        item_class="music-art"
        img_title="AMLO_WHITE.png"
        button_name="Link"
      />
      <MerchCard
        products={productOne}
        button_name="Purchase"
        item_class="merch-art"
        img_title="AMATEUR-LOVER.png"
      />
      <MerchCard
        products={productTwo}
        button_name="Purchase"
        item_class="merch-art"
        img_title="AMLO-FOR-PRESIDENTE.png"
      />
      <BottomCard />
    </div>
  );
}
