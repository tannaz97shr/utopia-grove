"use client";

import Image from "next/image";
import { useRef, useState } from "react";

interface ImagePickerProps {
  label: string;
  name: string;
}

export default function ImagePicker({ label, name }: ImagePickerProps) {
  const [pickedImage, setPickedImage] = useState<any>();
  const imageInput = useRef<HTMLInputElement>(null);

  const handlePickClick = () => {
    imageInput.current?.click();
  };

  const handleImageChange = (e: { target: HTMLInputElement }) => {
    const file = e.target.files?.length && e.target.files[0];
    if (!file) {
      setPickedImage(null);
      return;
    }
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPickedImage(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  };

  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <div className="flex mt-2">
        <div className="border-2 border-border-brown w-32 h-32 relative">
          {!pickedImage && <p>No image picked yet.</p>}
          {pickedImage && (
            <Image
              src={pickedImage}
              alt="The image selected by the user."
              fill
            />
          )}
        </div>
        <input
          type="file"
          id={name}
          name={name}
          accept="image/png, image/jpeg"
          className="hidden"
          ref={imageInput}
          onChange={handleImageChange}
        />
        <button
          onClick={handlePickClick}
          className="h-fit ml-3 bg-transparent border mt-2 text-border-brown border-border-brown px-2 py-1"
          type="button"
        >
          Pick an Image
        </button>
      </div>
    </div>
  );
}
