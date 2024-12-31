import { montserrat } from "@/fonts";
import contact from "@/assets/contact.webp";
import Image from "next/image";
import Link from "next/link";

import SocialLinks from "./SocialLinks";
import ContactForm from "./Form";

export default function Contact() {
  return (
    <section id="contact" className="max-w-screen-xl mx-auto px-3 lg:px-1">
      <h3
        className={`uppercase text-primary font-medium text-center text-sm ${montserrat.className}`}
      >
        Contact
      </h3>

      <h1
        className={`text-[34px] md:text-[40px] lg:text-6xl font-bold ${montserrat.className} mt-4 text-center`}
      >
        Contact With Me
      </h1>

      <div className="flex flex-col lg:flex-row gap-12 mt-12">
        {/* contact info */}
        <div className="shadow-custom-shadow-1 group rounded-lg p-6 overflow-hidden basis-1/3 h-fit">
          <div className="overflow-hidden mb-6">
            <Image
              src={contact}
              alt="contact"
              height={500}
              width={500}
              className="w-full object-cover group-hover:scale-105 transition-all duration-300 overflow-hidden rounded-lg"
            />
          </div>

          <div className="mb-[15px]">
            <h2
              className={`text-[29px] font-bold ${montserrat.className} mb-[10px]`}
            >
              Shakib Al Furqan
            </h2>
            <p className="text-gray-400 ">Web Developer</p>
          </div>

          <div className="mb-[30px]">
            <p className="text-gray-400 mb-[20px]">
              I am available for work. Connect with me via email or call me on
              my phone. Here are my details.
            </p>

            <p className="flex flex-col">
              <span className="text-gray-400">
                Phone:{" "}
                <Link
                  className="text-secondary hover:text-primary transition-all duration-300 border-b-2 border-transparent hover:border-primary"
                  href={"tel:+8801641991384"}
                >
                  +8801641991384
                </Link>
              </span>

              <span className="text-gray-400">
                Email:{" "}
                <Link
                  className="text-secondary hover:text-primary transition-all duration-300 border-b-2 border-transparent hover:border-primary"
                  href={"mailto:shakibalfurqan@gmail.com"}
                >
                  shakibalfurqan@gmail.com
                </Link>
              </span>
            </p>
          </div>
          <div>
            <p className="text-gray-400 text-sm">FIND WITH ME</p>
            <SocialLinks />
          </div>
        </div>
        {/* contact form */}
        <ContactForm />
      </div>
    </section>
  );
}
