import { Image } from "@mantine/core";
import { useState } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

export const PhotoViewer = ({ image }: { image: string }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Image
        w="100%"
        src={image}
        style={{ width: 200, cursor: "pointer" }}
        onClick={() => setOpen(true)}
      />
      {open && (
        <Lightbox mainSrc={image} onCloseRequest={() => setOpen(false)} />
      )}
    </>
  );
};
