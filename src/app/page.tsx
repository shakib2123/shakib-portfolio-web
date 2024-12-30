import Projects from "@/components/Projects/Projects";
import BackToTopButton from "@/components/shared/BackToTop";
import SoundController from "@/components/shared/SoundController";

export default function HomePage() {
  return (
    <section className="min-h-[200vh]">
      <SoundController />
      <BackToTopButton />
      <Projects />
    </section>
  );
}
