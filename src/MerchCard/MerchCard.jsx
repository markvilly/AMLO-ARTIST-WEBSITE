import React, { useState } from "react";
import "./merchStyle.css";

export default function MerchCard({
  img_title,
  item_class,
  button_name,
  product_body,
  products
}) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  if (!products) {
    return null;
  }

  return (
    <div>
      <div className="merch-card-wide">
        <div className="merch-card">
          <img className={item_class} src={"/img/" + img_title} alt="" />
          {/* DETAILS  */}
          <h3>{products.name}</h3>
          {products.color.map((color) => (
            <p key={color}>
              {color} {products.percentage}% {products.fabric}
            </p>
          ))}
          <p className="price">${products.price}</p>
          <div className="dropdown">
            <button
              className="link"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              Color/Size
            </button>
            {isDropdownOpen && (
              <div className="dropdown-menu">
                <ul className="dropdown-list">
                  {products.color.map((color) =>
                    products.size.map((size) => (
                      <li
                        className="dropdown-item"
                        key={`${color}/${size}`}
                        onClick={() => handleOptionSelect(`${color}/${size}`)}
                      >
                        {`  ${color}/${size}`}
                      </li>
                    ))
                  )}
                </ul>
              </div>
            )}
          </div>
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
