import React from "react";

import "./MusicStyle.css";

export default function MusicCard({
  img_title,
  item_class,
  button_name,
  product_body,
  products
}) {
  return (
    <div>
      <div className="merch-card-wide">
        <div className="merch-card">
          <img
            className={item_class}
            src={"/img/" + img_title}
            alt="Black sweatshit with logo"
          />

          <div className="lower-buttons">
            {/* DIALOGUE TAB */}
            <button className="button button-share" type="submit">
              Share
            </button>
            <button className="button button-download" type="submit">
              {button_name}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
