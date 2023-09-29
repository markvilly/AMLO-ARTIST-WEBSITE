import React from "react";
import AudioCard from "./AudioCard/AudioCard";
import AudioData from "./AudioCard/AudioData";

const Audio = () => {
  // const myAudioData = {
  //   song_name: "spyto",
  //   price:23,
  // }

  return (
    <div>
      {/* <h1>Audio Page</h1> */}
      <AudioCard
        button_name="Purchase"
        img_name="GOOD_VIBRATIONS_ARTWORK.png"
        audiodata={AudioData[0]}
      />
    </div>
  );
};

export default Audio;
