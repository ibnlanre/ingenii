import { Details, Landing, MultiChannel, Retail } from "../../src/products";
import { Footer, Header } from "../../src/components";

export default function PointOfSale() {
  return (
    <main>
      <Header />
      <Landing />
      <MultiChannel />
      <Details />
      <Retail />
      <Footer />
    </main>
  );
}
