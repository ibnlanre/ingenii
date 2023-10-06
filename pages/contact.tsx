import { Footer, Header } from "../src/components";
import { ContactUs } from "../src/forms";

export default function Contact() {
  return (
    <main>
      <Header />
      <section className="max-w-screen-xl py-14 gap-6 px-2 mx-auto clump:px-[clamp(8px,5vw,5rem)] relative">
        <ContactUs />
      </section>
      <Footer
        className="text-chinese-black"
        socials="text-white hover:text-white hover:bg-smoky-black"
      />
    </main>
  );
}
