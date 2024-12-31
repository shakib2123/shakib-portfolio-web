import Banner from "@/components/Banner/Banner";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";
import Projects from "@/components/Projects/Projects";
import BackToTopButton from "@/components/shared/BackToTop";
import SoundController from "@/components/shared/SoundController";
import Skills from "@/components/Skills/Skills";

export default function HomePage() {
  return (
    <section className="">
      <SoundController />
      <BackToTopButton />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </section>
  );
}
