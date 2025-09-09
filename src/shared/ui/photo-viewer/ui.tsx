import { Image } from "@mantine/core";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

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
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={[{ src: image }]}
      />
    </>
  );
};
