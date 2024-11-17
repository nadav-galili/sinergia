import { client } from "@/sanity/lib/client";
import { GET_OUR_CUSTOMERS } from "@/sanity/lib/queries";
import { CustomerRows } from "./CustomerRows";

const OurCustomers = async () => {
  const data = await client.fetch(GET_OUR_CUSTOMERS);

  const chunkSize = Math.ceil(data.length / 3);
  const rows = {
    row1: Array(5).fill(data.slice(0, chunkSize)).flat(),
    row2: Array(5)
      .fill(data.slice(chunkSize, chunkSize * 2))
      .flat(),
    row3: Array(5)
      .fill(data.slice(chunkSize * 2))
      .flat(),
  };

  return (
    <section className="w-full py-10">
      <div className="container mx-auto">
        <h2 className="heading text-center mx-auto rounded-lg flex items-center gap-2 justify-center mb-12">
          בין לקוחותינו
        </h2>
        <CustomerRows rows={rows} />
      </div>
    </section>
  );
};

export default OurCustomers;
