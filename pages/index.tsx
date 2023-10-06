import { Header, Footer } from "../src/components";
import { GetInTouch } from "../src/forms";
import { DesktopServices, TabletServices, MobileServices } from "../src/home";
import {
  Billboard,
  Clients,
  Services,
  OurApproach,
  Products,
  Testimony,
} from "../src/home";

export default function Page() {
  return (
    <main>
      <Header />
      <Billboard />
      <Clients />
      <Services>
        <DesktopServices />
        <TabletServices />
        <MobileServices />
      </Services>
      <Products />
      <OurApproach />
      <Testimony />
      <GetInTouch />
      <Footer />
    </main>
  );
}
