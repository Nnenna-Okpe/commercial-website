import { useState } from "react";
import { categories } from "../assets/store";

import { ShoppingCart, Search } from "lucide-react";

export default function CategoriesSection() {
  const [activeCategory, setActiveCategory] = useState("gowns");

  const selectedCategory = categories.find((cat) => cat.id === activeCategory);

  return (
    <div className="grid grid-cols-4 gap-6">
      <section className="col-span-1">
        {/* Category Links */}
        <div className="flex flex-col gap-6 text-sm font-medium uppercase tracking-widest mb-6">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`pb-1 transition ${
                activeCategory === category.id
                  ? " underline text-black"
                  : "text-gray-400 hover:text-black"
              }`}
            >
              {category.name}
            </button>
          ))}
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
                  />
                </button>
                {item.image && (
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-80  max-h-[300px]"
                  />
                )}
                <button
                  className="absolute bottom-3 right-3 
              
              "
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
                <p className="text-red-500 mb-4">{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
