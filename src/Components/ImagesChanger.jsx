import React, { useState } from "react";

const ImagesChanger = ({ images = [{ url: "" }] }) => {
  const [imageIndex, setImageIndex] = useState(0);
  return (
    <>
      <div className="grid grid-cols-4 gap-2 p-5">
        <div className="grid grid-rows-4 gap-4 col-span-1 flex justify-center items-center">
          {images.map((img, index) => {
            return (
              <figure
                onClick={() => setImageIndex(index)}
                className="col-span-1 cursor-pointer"
              >
                <img
                  src={img.url}
                  alt={img.filename}
                  className="w-full h-full object-cover"
                />
              </figure>
            );
          })}
        </div>
        <div className="w-full h-full object-cover col-span-3 flex justify-center items-center">
          <img src={images[imageIndex].url} alt={images[imageIndex].filename} />
        </div>
      </div>
    </>
  );
};

export default ImagesChanger;
