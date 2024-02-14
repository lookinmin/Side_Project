import React from "react";

interface ImgProps {
  name: string;
  height: string;
}

export const ImgHandler: React.FC<ImgProps> = ({ name, height }) => {
  const h = height + "px";
  if (name === "Gryffindor") {
    return (
      <img
        alt="그리핀도르"
        src="https://i.namu.wiki/i/9C5RKtdBghq84Kc_30h-vDnJQwE5FmbRI4mtbvNrxhhA2NXy8H91G1FLdBCkq3PBkMOsXaQLsUg09nuS53bXuZy2Ck2mv1DBekob1Agt9fSzEgiwY00zdxmsNLb3U68CcRgELgvKxIw7SPiOM6XAEg.webp"
        height={h}
      />
    );
  } else if (name === "Ravenclaw") {
    return (
      <img
        alt="레번클로"
        src="https://i.namu.wiki/i/txSSDeGuih2UR2IWkvi_mfgUadTYwlUAW8PN_ieNTaQ-MK-1dRja4El-DIfSweTyxi47UjAFZID_E7a_h5f7K6VriiyjUp2U6KcQ6OA-R4PwmCf6jMPOWl6MRyIFj7lXkEn_HCLBVabx2XspQfvFtQ.webp"
        height={h}
      />
    );
  } else if (name === "Hufflepuff") {
    return (
      <img
        alt="후플푸프"
        src="https://i.namu.wiki/i/ZElCb8UYAPDjLIv4HXfsyiKnLROjkumL5S3vIBl4VdBnzrtdsULOsXAmpr40qJw0wdUGJ7ytw8lHCZz2VLm7boGKdt9t6ZOearfJVKSi9sw4gLSKLuHfLGTeMN99eAAR1ZPsfyVR8KEAsLSJ1aPnTA.webp"
        height={h}
      />
    );
  } else if (name === "Slytherin") {
    return (
      <img
        alt="슬리데린"
        src="https://i.namu.wiki/i/yvIgxVUa2zeGNTw5ysK23HgyvHbkHxacuE6tWCL-9CigFZo82bkHPN9v-IZanv7V1UA4t86AUvZJBwnglSODaXw4ZKofCADCMquVVlGpS0MwzkjXqyyS0_Bgr5pD7BabIQn14syU9CpmrQ2k4FoUNw.webp"
        height={h}
      />
    );
  }
  return <></>;
};
