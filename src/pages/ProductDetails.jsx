import { useParams } from "react-router-dom";
import products from "../data/Products";
import ProductCard from "../components/ProductCardd";
import { useNavigate } from "react-router-dom";
import { FaRegPaperPlane } from "react-icons/fa";

function ProductDetails() {
  //   const { id } = useParams();

  //   const product = products.find((p) => p.id === parseInt(id));

  //   const relatedProducts = products.filter((p) => p.id !== product.id);
  const { id } = useParams();

  const product = products.find((p) => p.id === id);

  if (!product) {
    return <div>Product not found</div>;
  }

  const relatedProducts = products.filter((p) => p.id !== product.id);
  const navigate = useNavigate();

  const handleContactClick = (e) => {
    e.preventDefault(); // prevent card link navigation
    navigate("/contact");
  };
  return (
    <div className="p-10">
      {/* Product Details */}
      <div className="grid md:grid-cols-2 gap-12">
        <img
          src={product.image}
          alt={product.name}
          className="rounded-xl h-100 w-full object-cover"
        />

        <div>
          <div className="flex">
            <h1 className="text-4xl font-bold">{product.name}</h1>
            <button
              onClick={handleContactClick}
              className="hover:scale-105 transition-transform duration-500 cursor-pointer bg-green-600 text-white px-4 h-12 rounded ml-auto flex items-center gap-2"
            >
              <FaRegPaperPlane size={18} /> Contact Us
            </button>
          </div>

          <p className="text-2xl text-green-900 mt-3">{product.price}</p>

          <p className="mt-1 text-gray-600">Minimum Order Quantity: 30 kg</p>

          <div className="mt-5">
            <p className="font-bold text-xl mb-5">Product Details/ Specifications</p>
            <ul>
                {Object.entries(product.productDetail).map(([key, value]) => (
                  <li key={key} className="flex justify-between border-b py-0">
                    {/* <span className="font-medium">{key}:</span>
                    <span>{value}</span> */}
                    <span className="font-medium">{key.replace(/_/g, " ")}:</span>
                    <span>{value}</span>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Related Products */}

      <div className="mt-20">
        <h2 className="text-2xl font-bold mb-6">More Products</h2>

        <div data-aos="fade-up" className="grid md:grid-cols-3 gap-8">
          {relatedProducts.map((p) => (
            <ProductCard product={p} key={p.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
