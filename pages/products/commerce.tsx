import { Footer, Header } from "../../src/components";
import { Intro, Potential, Why } from "../../src/products";

export default function PointOfSale() {
  return (
    <main>
      <Header title="Products | Commerce" />
      <Intro />
      {/* <Potential /> */}
      <Why />
      <Footer />
    </main>
  );
}
