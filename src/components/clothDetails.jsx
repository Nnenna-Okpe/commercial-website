import Footer from "./footer.jsx";
import { product } from "../assets/store";
import { useCart } from "../context/CartContext";

const ProductDetails = () => {
  const { addItem } = useCart();
  return (
    <>
      <section className="max-w-6xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* LEFT — Images */}
          <div>
            <div className="w-full h-[450px] bg-gray-100 rounded-2xl overflow-hidden mb-4">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover object-top"
              />
            </div>

            <div className="flex gap-3">
              {product.gallery?.map((img, index) => (
                <div
                  key={index}
                  className="w-20 h-24 bg-gray-100 rounded-xl overflow-hidden cursor-pointer"
                >
                  <img
                    src={img}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — Details */}
          <div className="flex flex-col gap-5">
            <h1 className="text-3xl font-semibold">{product.name}</h1>

            {/* Rating */}
            <div className="flex items-center gap-2 text-lg">
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  className={
                    star <= product.rating ? "text-black" : "text-gray-300"
                  }
                >
                  ★
                </span>
              ))}
              <span className="text-sm text-gray-500">
                ({product.reviews} reviews)
              </span>
            </div>

            <p className="text-2xl font-medium text-red-600">{product.price}</p>

            {/* Colors */}
            <div>
              <p className="text-sm mb-2 font-medium">Color</p>
              <div className="flex gap-2">
                {product.colors.map((color, index) => (
                  <span
                    key={index}
                    className={`w-7 h-7 rounded-full ${color} ring-1 ring-gray-400`}
                  />
                ))}
              </div>
            </div>

            {/* Sizes */}
            <div>
              <p className="text-sm mb-2 font-medium">Size</p>
              <div className="flex gap-2">
                {["S", "M", "L", "XL"].map((size) => (
                  <span
                    key={size}
                    className="px-4 py-2 border border-gray-300 rounded-lg text-sm cursor-pointer hover:border-black transition"
                  >
                    {size}
                  </span>
                ))}
              </div>
            </div>

            {/* Description */}
            <div>
              <p className="text-sm font-medium mb-1">Description</p>
              <p className="text-gray-600 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Add to cart */}
            <button className="mt-4 bg-black text-white py-3 rounded-xl hover:bg-gray-800 transition">
              Add to Cart
            </button>

            {/* Extra details */}
            <div className="border-t pt-4 text-sm text-gray-600">
              <p>
                <strong>Fabric:</strong> {product.fabric}
              </p>
              <p>
                <strong>Fit:</strong> {product.fit}
              </p>
              <p>
                <strong>Care:</strong> {product.care}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <h3 className="place-self-center bg-black text-white text-xl border px-5 py-2 border-gray-500 mb-0 border-b-0">
            Description
          </h3>
          <p className="border border-black p-4 md:p-8 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet
            risus nullam eget felis eget nunc lobortis mattis aliquam. Vulputate
            mi sit amet mauris commodo quis imperdiet massa. Egestas congue
            quisque egestas diam in arcu cursus euismod. Nisl tincidunt eget
            nullam non nisi est sit amet facilisis. In fermentum posuere urna
            nec tincidunt praesent semper feugiat. Vitae tempus quam
            pellentesque nec nam aliquam sem et tortor. Ipsum dolor sit amet
            consectetur adipiscing elit pellentesque habitant morbi. Massa vitae
            tortor condimentum lacinia quis vel eros donec ac. Cursus euismod
            quis viverra nibh cras pulvinar mattis nunc sed. Vel pretium lectus
            quam id leo in vitae turpis massa. Dignissim diam quis enim lobortis
            scelerisque fermentum dui faucibus. Purus sit amet volutpat
            consequat mauris nunc congue nisi vitae. Odio tempor orci dapibus
            ultrices in iaculis nunc sed augue. Ultricies mi quis hendrerit
            dolor magna eget est lorem. Viverra ipsum nunc aliquet bibendum enim
            facilisis gravida neque. Integer malesuada nunc vel risus commodo
            viverra maecenas accumsan lacus. Aliquet porttitor lacus luctus
            accumsan tortor posuere ac ut consequat. Turpis egestas sed tempus
            urna et pharetra pharetra massa massa. Aenean vel elit scelerisque
            mauris pellentesque pulvinar pellentesque habitant morbi. Leo in
            vitae turpis massa sed elementum tempus egestas sed. Enim lobortis
            scelerisque fermentum dui faucibus in ornare quam viverra.
            Pellentesque sit amet porttitor eget dolor morbi non arcu risus.
            Nibh nisl condimentum id venenatis a condimentum vitae sapien
            pellentesque.
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ProductDetails;
