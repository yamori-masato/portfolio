import React, { FC } from "react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import useMediaQuery from "hooks/useMediaQuery";
import Image from "./Image";

type Props = React.ImgHTMLAttributes<HTMLImageElement>;

const ZoomImage: FC<Props> = (props) => {
  const mq = useMediaQuery();
  let margin = 10;
  if (mq.isTab) margin = 50;
  if (mq.isPc) margin = 120;

  return (
    <Zoom
      zoomMargin={margin}
      overlayBgColorStart={"rgba(0, 0, 0, 0)"}
      overlayBgColorEnd={"rgba(0, 0, 0, 0.75)"}
    >
      <Image {...props} />
    </Zoom>
  );
};

export default ZoomImage;
