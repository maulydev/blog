"use client";

import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import RelatedPostCard from "./RelatedPostCard";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";

const RelatedPost = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel();

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);
  return (
    <div className="mt-8">
      <div className="flex items-center justify-between">
        <h3 className="font-bold text-xl my-6 dark:text-gray-100">You may also like</h3>
        <div className="flex gap-4 text-gray-900 dark:text-white">
          <button onClick={scrollPrev} className="bg-gray-100 dark:border-gray-700 border dark:bg-gray-900 px-4 py-2 rounded">
            <FaAngleLeft />
          </button>
          <button onClick={scrollNext} className="bg-gray-100 dark:border-gray-700 border dark:bg-gray-900 px-4 py-2 rounded">
            <FaAngleRight />
          </button>
        </div>
      </div>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-4 max-w-56 md:w-full">
          <RelatedPostCard />
          <RelatedPostCard />
          <RelatedPostCard />
          <RelatedPostCard />
          <RelatedPostCard />
          <RelatedPostCard />
          <RelatedPostCard />
        </div>
      </div>
    </div>
  );
};

export default RelatedPost;
