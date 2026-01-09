import { useState } from "react";
import { categories } from "../assets/store";
import { bgColors } from "../assets/store";
import { size } from "../assets/store";
import { tags } from "../assets/store";
import Footer from "./footer.jsx";
import { ShoppingCart, Search } from "lucide-react";
import { formatPrice } from "../assets/store.jsx";
import mainImage from "../assets/images/shop-background.jpg";
import { useCart } from "../context/CartContext";

export default function CategoriesSection() {
  const [activeCategory, setActiveCategory] = useState("gowns");
  const { addItem } = useCart();

  const selectedCategory = categories.find((cat) => cat.id === activeCategory);

  return (
    <>
      <div className="relative w-full h-60 md:h-[300px] mb-12 overflow-hidden">
        <img
          src={mainImage}
          alt="Collection"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/10" />

        <h2 className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white text-2xl md:text-3xl font-light tracking-[0.3em] uppercase">
          Women
        </h2>
      </div>
      {/* <h1 className="text-5xl place-self-center mt-5">SHOP</h1> */}
      <div className="grid grid-cols-4 gap-6 p-10">
        <section className="col-span-1 flex flex-col gap-15 items-center">
          {/* Price filter */}
          <div className="w-64 bg-white rounded-2xl p-6 shadow-sm">
            <h3 className="text-xl mb-4">Price</h3>

            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>$0</span>
              <span>$500</span>
            </div>

            <input
              type="range"
              min="0"
              max="500"
              defaultValue="250"
              className="w-full accent-black cursor-pointer"
            />

            <p className="text-sm mt-3 text-gray-700">
              Up to <span className="font-semibold">$250</span>
            </p>
          </div>

          {/* Category Links */}
          <div className="flex flex-col justify-center items-start pl-10  text-start gap-3 bg-white rounded-2xl p-6 shadow-lg w-65 text-sm font-medium uppercase tracking-widest ">
            <h3 className="font-bold text-xl">Categories</h3>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`bg-transparent border-0 p-0 m-0 leading-none uppercase text-sm transition ${
                  activeCategory === category.id
                    ? " underline text-black"
                    : "text-gray-400 hover:text-black"
                }`}
              >
                {category.name}
              </button>
            ))}
            <p>accessories</p>
            <p>Trousers</p>
            <p>Shoes</p>
            <p>Anything</p>
            <p>Kidding</p>
          </div>

          {/* Color selection */}
          <div className="flex flex-col items-center bg-white rounded-2xl p-6 shadow-lg h-40 w-64">
            <h3 className="self-start text-xl mb-7 mt-4">Color</h3>

            <div className="flex gap-2 mb-4">
              {bgColors.map((color) => (
                <span
                  key={color.id}
                  className={`w-9 h-9 rounded-full ${color.color} border border-gray-300 ring-1 ring-gray-400 hover:ring-black transition cursor-pointer`}
                />
              ))}
            </div>
          </div>

          {/* size selection */}
          <div className="flex flex-col items-center bg-white rounded-2xl p-6 shadow-lg h-40 w-64">
            <h3 className="self-start text-xl mb-7 mt-4">Size</h3>

            <div className="flex gap-2 mb-4">
              {size.map((size) => (
                <span
                  key={size.id}
                  className={`w-9 h-9 rounded-full flex justify-center items-center border bg-gray-300 border-gray-300 ring-1 ring-gray-400 hover:ring-black transition cursor-pointer`}
                >
                  <p className="text-lg font-medium">{size.text}</p>
                </span>
              ))}
            </div>
          </div>

          {/* Tags selection */}

          <div className="flex flex-col items-center bg-white rounded-2xl p-6 shadow-lg w-64">
            <h3 className="self-start text-xl mb-5 mt-4">Tags</h3>

            <div className="grid grid-cols-2 gap-2 mb-10">
              {tags.map((tag) => (
                <span
                  key={tag.id}
                  className={`flex justify-center items-center px-5 py-2 rounded-lg border bg-gray-100 border-gray-200 ring-1 ring-gray-200 hover:ring-black transition cursor-pointer`}
                >
                  <p className="text-base font-light">{tag.text}</p>
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Products */}
        <section className="col-span-3">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {selectedCategory?.items.map((item) => (
              <div
                key={item.id}
                className="border border-gray-300 m-1 md:min-w-2xs "
              >
                <div className="relative">
                  <button className="absolute top-3 left-3">
                    <Search
                      size={24} // icon size in pixels
                      className="text-gray-700 hover:text-black transition-colors"
                      onClick={() => navigate("/product")}
                    />
                  </button>
                  {item.image && (
                    <div className="w-full min-h-[250px] overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full  h-[250px] object-contain"
                      />
                    </div>
                  )}
                  <button
                    className="absolute bottom-3 right-3 "
                    onClick={() => addItem(item)}
                  >
                    <ShoppingCart
                      size={24} // icon size in pixels
                      className="text-gray-700 hover:text-black transition-colors"
                    />
                  </button>
                </div>
                <div className="m-0 border  border-gray-300">
                  <p className="flex items-center gap-1 text-lg">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span
                        key={star}
                        className={
                          star <= item.rating ? "text-black" : "text-gray-300"
                        }
                      >
                        ★
                      </span>
                    ))}
                  </p>
                  <p>{item.name}</p>
                  <p className="text-red-500 mb-4">{formatPrice(item.price)}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
