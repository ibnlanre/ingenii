import clsx from "clsx";
import { Footer, Header } from "../src/components";
import { ContactUs } from "../src/forms";

export default function Contact() {
  return (
    <main>
      <Header />
      <section
        className={clsx(
          "py-14 px-2 mx-auto clump:px-[clamp(8px,5vw,5rem)]",
          "max-w-8xl gap-6 relative overflow-hidden"
        )}
      >
        <ContactUs />
      </section>
      <Footer
        className="text-chinese-black"
        socials="text-white hover:text-white hover:bg-smoky-black"
      />
    </main>
  );
}
