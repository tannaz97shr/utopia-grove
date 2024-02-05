"use client";

import { ICarouselImage } from "@/models/general";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import Image from "next/image";
import { useState } from "react";
import Arrow from "./assets/CarouselArrow";

export default function MainBanner() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
    {
      initial: 0,
      loop: true,
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel);
      },
      created() {
        setLoaded(true);
      },
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 2000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );
  const carouselImages: ICarouselImage[] = [
    {
      src: "/assets/dubai-1.jpg",
      alt: "dubai 1",
    },
    {
      src: "/assets/dubai-2.jpg",
      alt: "dubai 2",
    },
    {
      src: "/assets/dubai-3.jpg",
      alt: "dubai 3",
    },
    {
      src: "/assets/dubai-4.jpg",
      alt: "dubai 4",
    },
  ];
  return (
    <div className="w-[100vw] aspect-video xl:aspect-[5/2] relative">
      {/* <Image alt="Grove" src="/assets/grove.jpg" fill className="absolute" />
      <div className="absolute z-10 top-10 lg:top-20 left-10 w-96 lg:mt-24">
        <div className="text-3xl xl:text-5xl font-semibold text-bg-primary">
          The Utopia Grove Surf Club
        </div>
        <BannerButtons />
      </div> */}
      <div
        ref={sliderRef}
        className="keen-slider bg-bg-secondary h-full w-full"
      >
        {carouselImages.map((img: ICarouselImage) => (
          <div className="keen-slider__slide">
            <Image src={img.src} alt={img.alt} fill />
          </div>
        ))}
      </div>
      {loaded && instanceRef.current && (
        <div className="w-full absolute top-1/2 flex justify-between">
          <Arrow
            left
            onClick={(e: any) =>
              e.stopPropagation() || instanceRef.current?.prev()
            }
          />

          <Arrow
            onClick={(e: any) =>
              e.stopPropagation() || instanceRef.current?.next()
            }
          />
        </div>
      )}
    </div>
  );
}
