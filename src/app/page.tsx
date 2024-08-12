import AboutUs from "@/components/about-us";
import Blogs from "@/components/blogs";
import CTA from "@/components/cta";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Mentors from "@/components/mentors";
import { NavMenu } from "@/components/nav-menu";
import PopularCourses from "@/components/popular-courses";
import Image from "next/image";

export default function Home() {
  return (
    <main className=" mx-auto">
      <NavMenu />
      <Hero />
      <AboutUs />
      <PopularCourses />
      <CTA />
      <Mentors />
      <Blogs />
      <Footer />
    </main>
  );
}
