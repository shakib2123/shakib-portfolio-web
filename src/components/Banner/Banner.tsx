import { montserrat } from "@/fonts";
import TypeWriter from "./TypeWriter";
import Image from "next/image";
import bannerImage from "@/assets/banner-image.png";
import ViewAndDownloadResume from "./ViewAndDownloadResume";

export default function Banner() {
  return (
    <section className="max-w-screen-xl mx-auto pt-4 lg:pt-16 px-3 lg:px-0 flex flex-col-reverse lg:flex-row justify-between gap-8 md:gap-16 lg:gap-20">
      <div className="basis-7/12">
        <h4
          className={`uppercase font-medium text-sm mb-[20px] tracking-[3px] ${montserrat.className}`}
        >
          Welcome to my world
        </h4>

        <h1
          className={`text-[28px] md:text-5xl lg:text-[55px] font-bold leading-10 lg:leading-[60px] ${montserrat.className} text-white mb-5`}
        >
          Hi, I’m <span className="text-primary">Shakib Al Furqan</span>
          <br />
          <span className="text-2xl md:text-[40px] lg:text-5xl">
            a <TypeWriter />
          </span>
        </h1>

        <p className="">
          In the dynamic realm of tech, I excel as a Frontend, Backend, and
          Fullstack Developer, merging creativity with logic to build seamless,
          robust applications. With a profound coding expertise, I stand out as
          a Professional Coder dedicated to crafting innovative and efficient
          solutions.
        </p>

        <ViewAndDownloadResume />
      </div>
      <div className="lg:flex-1 mx-auto lg:mx-0">
        <Image
          src={bannerImage}
          alt="Shakib Al Furqan"
          width={600}
          height={600}
          className="rounded-lg h-[500px] object-cover w-fit shadow-custom-shadow-1"
        />
      </div>
    </section>
  );
}
