import { Product } from "@/types/product";

const productData: Product[] = [
  {
    name: "Apple Watch Series 9",
    category: "Electronics",
    price: 296,
    discounts: 22,
    profit: 45,
  },
  {
    name: "Macbook Pro M3",
    category: "Electronics",
    price: 546,
    discounts: 12,
    profit: 125,
  },
  {
    name: "Dell Inspiron 15",
    category: "Electronics",
    price: 443,
    discounts: 64,
    profit: 247,
  },
  {
    name: "Apple Vision Pro",
    category: "Electronics",
    price: 291,
    discounts: 22,
    profit: 45,
  },
];

const TableTwo = () => {
  return (
    <div className="rounded-md border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
        List of items to buy
      </h4>
      <div className="flex flex-col">
        <div className="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-5">
          <div className="p-2.5 xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Product Name
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Category
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Price
            </h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Discounts
            </h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Profit
            </h5>
          </div>
        </div>

      {productData.map((product, key) => (
        <div
          className={`grid grid-cols-3 sm:grid-cols-5 ${
            key === productData.length - 1
              ? ""
              : "border-b border-stroke dark:border-strokedark"
          }`}
          key={key}
        >
          <div className="flex items-center gap-3 p-2.5 xl:p-5">
            <p className="text-black dark:text-white sm:block">
              {product.name}
            </p>
          </div>
          <div className="flex items-center justify-center p-2.5 xl:p-5">
            <p className="text-black dark:text-white">{product.category}</p>
          </div>
          <div className="flex items-center justify-center p-2.5 xl:p-5">
            <p className="text-meta-3">${product.price}</p>
          </div>
          <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
            <p className="text-black dark:text-white">{product.discounts}</p>
          </div>
          <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
            <p className="text-meta-5">${product.profit}</p>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
};

export default TableTwo;
