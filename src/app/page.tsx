import Banner from "@/components/Banner/Banner";
import Projects from "@/components/Projects/Projects";
import BackToTopButton from "@/components/shared/BackToTop";
import SoundController from "@/components/shared/SoundController";

export default function HomePage() {
  return (
    <section className="">
      <SoundController />
      <BackToTopButton />
      <Banner />
      <Projects />
    </section>
  );
}
