import { Commerce } from "./commerce";
import { PointOfSale } from "./point-of-sale";

export function Products() {
  return (
    <section className="max-w-screen-xl mx-auto px-2 clump:px-[clamp(8px,5vw,5rem)] pt-20 pb-40 flex flex-col gap-14">
      <h2 className="text-5xl font-bold">Products</h2>
      <div className="flex flex-col gap-16">
        <Commerce />
        <PointOfSale />
      </div>
    </section>
  );
}
