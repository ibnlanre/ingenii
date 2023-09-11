import { Header } from "./components/header";
import { Billboard, Clients, Services, OurApproach, Products } from "./home";

export default function Page() {
  return (
    <main>
      <Header />
      <Billboard />
      <Clients />
      <Services />
      <Products />
      <OurApproach />
    </main>
  );
}
