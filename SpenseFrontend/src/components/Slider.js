import React, { useState } from "react";
import { useNavigate } from "react-router";
import SimpleImageSlider from "react-simple-image-slider";

export default function Slider() {
   const [imageNum, setImageNum] = useState(1);
   const sliderImages = [
      {
         url: "https://images.unsplash.com/photo-1604896169854-9c728014834a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
      },
      {
         url: "https://images.unsplash.com/photo-1639396099055-143ba697a84a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      },
      {
         url: "https://images.unsplash.com/photo-1609942571926-f3fe26feab26?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1025&q=80",
      },
      {
         url: "https://images.unsplash.com/photo-1595783958548-6966a0bb6a50?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      },
   ];
   // console.log(imageNum)
   const navigate = useNavigate();
   return (
      <div>
         <SimpleImageSlider
            width={800}
            height={400}
            images={sliderImages}
            showBullets={true}
            showNavs={true}
            autoPlay={true} 
            onStartSlide = {(index) => {
               setImageNum(index);
            }}
            onClick={()=>navigate('/Filter/All')}
            autoPlayDelay = {4}
            style={{cursor:'pointer'}}
         />
      </div>
   );
}