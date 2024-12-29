import BackToTopButton from "@/components/shared/BackToTop";
import SoundController from "@/components/shared/SoundController";

export default function HomePage() {
  return (
    <section className="min-h-[200vh]">
      <SoundController />
      <BackToTopButton />
      <h1>This is HomePage component</h1>
    </section>
  );
}
