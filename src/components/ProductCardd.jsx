import { FaRegPaperPlane } from "react-icons/fa";
import { Link,useNavigate } from "react-router-dom";

function ProductCard({ product }) {
  const phoneNumber = "9352515020"; // your number
  const message = "Hello, I want to know more about your Products & Services."; // default message

  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  const navigate = useNavigate();

  const handleContactClick = (e) => {
    e.preventDefault(); // prevent card link navigation
    navigate("/contact");
  };
  return (
    <Link to={`/product/${product.id}`}>
      <div data-aos="fade-up" className="border rounded-xl p-4 hover:shadow-lg transition hover:scale-105 duration-500">
        <img
          src={product.image}
          alt={product.name}
          className="h-56 w-full object-cover"
        />

        <h2 className="text-xl font-semibold mt-2">{product.name}</h2>

        <p className="text-gray-500 mb-4">{product.price}</p>
        <div className="flex justify-center items-center">
          <div className="text-start">
            <p>Thickness : {product.thickness}</p>
            <p>Color : {product.color}</p>
            <p>Usage : {product.usage}</p>
          </div>
          <button
            // href={url}
            // target="_blank"
            // rel="noopener noreferrer"
            onClick={handleContactClick}
            className="hover:scale-105 transition-transform duration-500 cursor-pointer bg-green-600 text-white px-2 h-10 rounded ml-auto flex items-center gap-1"
          >
            <FaRegPaperPlane size={15} /> Contact Us
          </button>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
