import React from "react";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Button } from "./ui/button";
import videoEditing from "../../public/albert-stoynov-QEf3mq665qU-unsplash.jpg";
import Social from "../../public/socialMM.jpg";
import graphics from "../../public/graphics.jpg";
import DigitalMarketing from "../../public/DigitalM.jpg";
import web from "../../public/webdev.jpg";
import Product from "../../public/blog.jpg";
import Image from "next/image";
import { AspectRatio } from "./ui/aspect-ratio";

const courses = [
  {
    id: 1,
    name: "Digital Marketing",
    description: "Enhance your online presence with our marketing services",
    price: 199.99,
    image: DigitalMarketing,
  },
  {
    id: 2,
    name: "Web Development",
    description:
      "Reach new heights with our cutting-edge web development services",
    price: 59.99,
    image: web,
  },
  {
    id: 3,
    name: "UI/UX Design",
    description: "Unlock your creativity with our UI/UX design services",
    price: 99.99,
    image: graphics,
  },
  {
    id: 4,
    name: "Product Management",
    description:
      "Improve your productivity with our product management services",
    price: 79.99,
    image: Product,
  },
  {
    id: 5,
    name: "Social Medial Management",
    description:
      "Enhance your social media presence with our social media management services",
    price: 149.99,
    image: Social,
  },
  {
    id: 6,
    name: "video Editing",
    description:
      "Improve your video editing skills with our video editing services",
    price: 39.99,
    image: videoEditing,
  },
];

export default function PopularCourses() {
  return (
    <section className="max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="flex justify-between w-full items-center">
        <div>
          <h1 className="text-2xl font-semibold  mt-10">Popular Courses</h1>
          <p className=" ">Enhance your skills with these popular courses</p>
        </div>
        <Button
          variant="link"
          className="bg-transparent w-fit px-0 text-transparent bg-gradient-to-r from-[#009245] to-[#FCEE21] bg-clip-text"
        >
          View more
        </Button>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-10 mt-8">
        {courses.map((product) => (
          <Card key={product.id} className="rounded-xl">
            <CardHeader className="p-0">
              <AspectRatio ratio={16 / 10} className="bg-muted overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  className="w-full  object-cover rounded-t-xl"
                />
              </AspectRatio>
            </CardHeader>
            <CardContent>
              <h3 className="text-lg font-semibold mt-3">{product.name}</h3>
              <p className="text-muted-foreground">{product.description}</p>
              <div className="flex items-center justify-between mt-4">
                <span className="text-primary font-bold">${product.price}</span>
                <Button className="bg-gradient-to-r from-[#009245] to-[#FCEE21]">
                  Buy
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
