import React, { useEffect } from "react";
import { Handbag } from "lucide-react";
import { useProductStore } from "../../store/Product";
import { Link } from "react-router-dom";

function Products() {
  const { products, fetchProducts, loading, error } = useProductStore();

  useEffect(() => {
    fetchProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) return <p className="text-center py-10">Loading products...</p>;
  if (error) return <p className="text-center text-red-500 py-10">{error}</p>;

  return (
<div className="bg-base-100 text-base-content transition-colors duration-500 min-h-screen">
      <div>
        {/* العنوان */}
        <div>
          <hr className="border-t-1 border-[#FFB568] w-[40px] mx-auto" />
          <h2 className="text-[#2E2E2E] flex justify-center p-3.5 m-3 font-bold">
            PRODUCTS
          </h2>
        </div>

        {/* عرض المنتجات */}
        <div className="flex flex-wrap justify-center gap-7 mb-3.5">
          {products.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className="relative card bg-base-100 w-[312px] sm:w-[280px] md:w-[300px] lg:w-[312px]
                h-[400px] shadow-lg mb-2.5 py-6 transition-all duration-500 ease-in-out 
                hover:h-[430px] hover:shadow-2xl hover:scale-[1.03] hover:bg-[#FFB568] cursor-pointer"
            >
              <figure>
                <img
                  src={product.imageUrl || "https://via.placeholder.com/300"}
                  alt={product.name}
                  className="h-[250px] w-full object-cover rounded-lg"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-[16px] flex justify-center">
                  {product.name}
                </h2>

                <div className="flex justify-center mt-2">
                  <div className="badge font-bold text-[16px] bg-[#FFB568] text-white px-3 py-1 rounded-md">
                   {Number(product.price).toFixed(2)} EGP
                  </div>
                </div>

                <div className="flex absolute bottom-0 right-0 bg-black p-3 text-[#FFFFFF]">
                  <Handbag />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {products.length === 0 && !loading && (
          <p className="text-center text-gray-500 py-10">No products found.</p>
        )}
      </div>
    </div>
  );
}

export default Products;
