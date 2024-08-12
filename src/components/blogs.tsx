import React from "react";
import { AspectRatio } from "./ui/aspect-ratio";
import { ArrowRightIcon, ChevronRight } from "lucide-react";

export default function Blogs() {
  return (
    <div className="max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="max-w-2xl text-center mx-auto mb-10 lg:mb-14">
        <h2 className="text-2xl font-bold  md:leading-tight">
          Read our latest news
        </h2>
        <p className="mt-1 text-gray-600">
          We&apos;ve helped some great companies brand, design and get to
          market.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10 lg:mb-14">
        <a
          className="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md focus:outline-none focus:shadow-md transition dark:bg-neutral-900 dark:border-neutral-800"
          href="#"
        >
          <AspectRatio ratio={16 / 9} className="bg-muted overflow-hidden">
            <img
              className="w-full object-cover rounded-t-xl"
              src="https://images.unsplash.com/photo-1668869713519-9bcbb0da7171?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80"
              alt="Blog Image"
            />
          </AspectRatio>
          <div className="p-4 md:p-5">
            <p className="mt-2 text-xs uppercase text-gray-600 dark:text-neutral-400">
              Product
            </p>
            <h3 className="mt-2 text-lg font-medium text-gray-800 group-hover:text-blue-600 dark:text-neutral-300 dark:group-hover:text-white">
              Better is when everything works together
            </h3>
          </div>
        </a>

        <a
          className="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md focus:outline-none focus:shadow-md transition dark:bg-neutral-900 dark:border-neutral-800"
          href="#"
        >
          <AspectRatio ratio={16 / 9} className="bg-muted overflow-hidden">
            <img
              className="w-full object-cover rounded-t-xl"
              src="https://images.unsplash.com/photo-1668584054035-f5ba7d426401?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80"
              alt="Blog Image"
            />
          </AspectRatio>
          <div className="p-4 md:p-5">
            <p className="mt-2 text-xs uppercase text-gray-600 dark:text-neutral-400">
              Business
            </p>
            <h3 className="mt-2 text-lg font-medium text-gray-800 group-hover:text-blue-600 dark:text-neutral-300 dark:group-hover:text-white">
              What CFR really is about
            </h3>
          </div>
        </a>

        <a
          className="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md focus:outline-none focus:shadow-md transition dark:bg-neutral-900 dark:border-neutral-800"
          href="#"
        >
          <AspectRatio ratio={16 / 9} className="bg-muted overflow-hidden">
            <img
              className="w-full object-cover rounded-t-xl"
              src="https://images.unsplash.com/photo-1668863699009-1e3b4118675d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80"
              alt="Blog Image"
            />
          </AspectRatio>
          <div className="p-4 md:p-5">
            <p className="mt-2 text-xs uppercase text-gray-600 dark:text-neutral-400">
              Business
            </p>
            <h3 className="mt-2 text-lg font-medium text-gray-800 group-hover:text-blue-600 dark:text-neutral-300 dark:group-hover:text-white">
              Should Product Owners think like entrepreneurs?
            </h3>
          </div>
        </a>

        <a
          className="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md focus:outline-none focus:shadow-md transition dark:bg-neutral-900 dark:border-neutral-800"
          href="#"
        >
          <AspectRatio ratio={16 / 9} className="bg-muted overflow-hidden">
            <img
              className="w-full object-cover rounded-t-xl"
              src="https://images.unsplash.com/photo-1668584054131-d5721c515211?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80"
              alt="Blog Image"
            />
          </AspectRatio>
          <div className="p-4 md:p-5">
            <p className="mt-2 text-xs uppercase text-gray-600 dark:text-neutral-400">
              Facilitate
            </p>
            <h3 className="mt-2 text-lg font-medium text-gray-800 group-hover:text-blue-600 dark:text-neutral-300 dark:group-hover:text-white">
              Announcing Front Strategies: Ready-to-use rules
            </h3>
          </div>
        </a>
      </div>

      <div className="text-center">
        <div className="inline-block bg-white border shadow-sm rounded-full dark:bg-neutral-900 dark:border-neutral-800">
          <div className="py-3 px-4 flex items-center gap-x-2">
            <p className="text-gray-600 dark:text-neutral-400">
              Want to read more?
            </p>
            <a
              className="inline-flex items-center gap-x-1.5 text-transparent bg-gradient-to-r from-[#009245] to-[#FCEE21] bg-clip-text decoration-2 hover:underline focus:outline-none focus:underline font-medium "
              href="../docs/index.html"
            >
              Go here
              <ChevronRight className="text-[#009245]" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
