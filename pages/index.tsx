import { Header, Footer } from "../src/components";
import {
  Billboard,
  Clients,
  Services,
  OurApproach,
  Products,
  Testimony,
  GetInTouch,
} from "../src/home";

export default function Page() {
  return (
    <main>
      <Header />
      <Billboard />
      <Clients />
      <Services />
      <Products />
      <OurApproach />
      <Testimony />
      <GetInTouch />
      <Footer />
    </main>
  );
}
