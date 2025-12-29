import React from "react";
import img2 from "../../assets/featured1 1.png";
import AddToCart from "../../components/AddToCart";

function FeatureCard() {
  const products = [
    { id: 1, name: "JAZZMASTER", price: 1050, image: img2 },
    { id: 2, name: "VENTURA", price: 980, image: img2 },
    { id: 3, name: "INTRAMATIC", price: 1150, image: img2 },
  ];

  return (
    <section className="py-10 px-4 sm:px-8 lg:px-20">
      {/* العنوان */}
      <div className="text-center mb-8">
        <hr className="border-t-2 border-[#FFB568] w-[50px] mx-auto my-4" />
        <h2 className="text-[#2E2E2E] text-2xl font-bold tracking-wide">
          FEATURED
        </h2>
      </div>

      {/* الكروت */}
      <div className="flex flex-wrap justify-center gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="card bg-base-100 w-[300px] sm:w-[280px] md:w-[300px] lg:w-[312px]
              h-[400px] shadow-lg py-6 mb-4 transition-all duration-500 ease-in-out 
              hover:h-[430px] hover:shadow-2xl hover:scale-[1.03] cursor-pointer"
          >
            <figure>
              <img
                src={product.image}
                alt={product.name}
                className="w-full object-contain"
              />
            </figure>

            <div className="card-body text-center">
              <h2 className="card-title text-[16px] font-semibold">
                {product.name}
              </h2>

              <div className="flex justify-center">
                <div className="badge font-bold text-[16px] text-[#FFB568]">
                  ${product.price}
                </div>
              </div>

              <div className="flex justify-center mt-2">
                <AddToCart />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeatureCard;
