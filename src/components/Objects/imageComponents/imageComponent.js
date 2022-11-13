import React from "react";
import SliderImage from "react-zoom-slider";

let data=this.props.data;

export default function Image() {
  return (
    <div>
      
      <SliderImage
        data={data}
        width="500px"
        showDescription={true}
        direction="right"
      />
    </div>
  );
}