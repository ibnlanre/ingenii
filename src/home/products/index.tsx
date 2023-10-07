import { Commerce } from "./commerce";
import { PointOfSale } from "./point-of-sale";

export function Products() {
  return (
    <section
      id="products"
      className="max-w-8xl mx-auto px-2 clump:px-[clamp(8px,5vw,5rem)] py-20 flex flex-col gap-14"
    >
      <h2 className="text-5xl clump:text-[clamp(2.05rem,4vw,3.75rem)] font-bold">
        Products
      </h2>
      <div className="flex flex-col gap-16">
        <Commerce />
        <PointOfSale />
      </div>
    </section>
  );
}
