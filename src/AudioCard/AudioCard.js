import React from "react";
import "./AudioCard.css";

export default function AudioCard({ img_name, button_name, audiodata }) {
  if (!audiodata) {
    return null;
  }
  return (
    <div className=" audio-card">
      <img
        src={"/img/" + img_name}
        className="audio audio-div"
        alt={img_name}
      />
      <h3>{audiodata.song_name}</h3>
      <p>Instrumental- WAV format</p>
      <p className="">Vocal Stems</p>
      <p className="price-tag">${audiodata.price[0]}</p>

      <button>Regular</button>
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
  );
}
