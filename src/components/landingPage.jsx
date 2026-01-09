import { useState } from "react";
import { highlights } from "../assets/store.jsx";
import homePagePic from "/vladimir-yelizarov-zyq8i8A8Av0-unsplash.png";
import { categories } from "../assets/store.jsx";
import { ShoppingCart, Search } from "lucide-react";
import bgImage from "../assets/images/attractive-woman-wearing-hat-posing-black-background.jpg";
import Footer from "./footer.jsx";
import { testimonials } from "../assets/store.jsx";
import { editorsPick } from "../assets/store.jsx";
import { useNavigate } from "react-router-dom";
import { formatPrice } from "../assets/store.jsx";
import { useCart } from "../context/CartContext";

function LandingPage() {
  const navigate = useNavigate();
  const gowns =
    categories.find((category) => category.id === "gowns")?.items || [];

  const featuredGowns = gowns.slice(0, 2);

  const tops =
    categories.find((category) => category.id === "tops")?.items || [];

  const featuredTops = tops.slice(0, 2);

  const { addItem } = useCart();

  return (
    <>
      {/* HOME PAGE*/}
      <section className="grid md:grid-cols-[3fr_2fr] m-0 p-0 bg-black max-h-screen w-full max-w-full ">
        <div className="h-screen flex flex-col justify-center">
          <h1 className="text-white text-[clamp(1.5rem,4vw,3rem)] font-bold mt-32 ml-4 md:ml-20">
            Where Fashion Meets Confidence
          </h1>
          <p className="text-gray-400 text-[clamp(0.9rem,2vw,1.1rem)] mt-6 ml-4 md:ml-20 max-w-[400px]">
            Elevate your wardrobe with our curated collection of fashion-forward
            pieces designed to make you look and feel your best.
          </p>
          <button
            className="bg-black text-white 
            border-s-slate-600 border-2 border-solid
          p-1 mt-2 ml-4 md:ml-20 max-w-30 hover:bg-[#84706f]
           transition-discrete duration-300"
            onClick={() => navigate("/shop")}
          >
            Shop Now
          </button>
        </div>
        <img
          src={homePagePic}
          alt="Main"
          className="hidden md:block h-screen w-auto object-cover"
        />
      </section>

      {/* HIGHLIGHTS SECTION */}
      <section className="px-0 py-3 md:p-8 bg-gray-100 flex justify-center items-center">
        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-10 gap-3 max-w-[80%]">
          {highlights.map((item) => (
            <div
              key={item.id}
              className="bg-white p-6 rounded-lg flex flex-row items-center shadow-lg gap-4"
            >
              <img
                src={item.icon}
                alt="Main"
                className="h-15 w-20 object-contain"
              />
              <div className="text-lg text-gray-600 ">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* EDITOR'S PICK */}

      <section>
        <div className="max-w-7xl mx-auto px-4 py-12">
          <h2 className="text-3xl w-full font-bold text-center mb-8 flex flex-row justify-center items-center gap-2">
            <span className="min-w-[250px]"> EDITOR'S PICK </span>
            <hr className="border-t border-gray-500 w-full " />
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {editorsPick.map((editorPick) => (
              <div
                key={editorPick.id}
                className="group bg-[#fafafa] rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
              >
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={editorPick.image}
                    alt={editorPick.name}
                    className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* Tag */}
                  <span className="absolute top-3 left-3 bg-linear-to-r from-black to-gray-700 text-white text-[10px] px-3 py-1 rounded-full tracking-wider">
                    EDITOR’S PICK
                  </span>

                  {/* Action buttons */}
                  <div className="absolute inset-0 flex items-end justify-between p-4 opacity-0 group-hover:opacity-100 transition">
                    <button
                      className="bg-white/90 backdrop-blur p-2 rounded-full shadow"
                      onClick={() => navigate("/product")}
                    >
                      <Search size={18} className="text-gray-800" />
                    </button>

                    <button className="bg-black p-2 rounded-full shadow">
                      <ShoppingCart
                        size={18}
                        className="text-white"
                        onClick={() => addItem(editorPick)}
                      />
                    </button>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 space-y-3">
                  {/* Rating */}
                  <div className="flex items-center gap-1 text-sm">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span
                        key={star}
                        className={
                          star <= editorPick.rating
                            ? "text-yellow-400"
                            : "text-gray-300"
                        }
                      >
                        ★
                      </span>
                    ))}
                  </div>

                  {/* Name */}
                  <p className="text-gray-900 font-semibold tracking-wide">
                    {editorPick.name}
                  </p>

                  {/* Price */}
                  <p className="text-[#84706f] font-bold text-lg">
                    {formatPrice(editorPick.price)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CATEGORIES SNIPPET */}
      <section className="md:mt-20 flex flex-col justify-center items-center ">
        <div className="grid grid-cols-1 md:grid-cols-2 mx-auto ">
          <div className="flex flex-col justify-center items-center">
            <h2 className="text-xl font-bold text-start place-self-start mb-2">
              Gowns
            </h2>
            <hr className="border-t border-gray-300 w-[99%]  " />
            <div className="h-full w-full flex flex-row justify-around items-center  ">
              {featuredGowns.map((gown) => (
                <div
                  key={gown.id}
                  className="border border-gray-300 m-1 md:min-w-2xs "
                >
                  <div className="relative md:min-h-[330px]">
                    <button className="absolute top-3 left-3">
                      <Search
                        size={24} // icon size in pixels
                        className="text-gray-700 hover:text-black transition-colors"
                        onClick={() => navigate("/product")}
                      />
                    </button>
                    <img
                      src={gown.image}
                      alt={gown.name}
                      className="md:min-h-[330px] h-full"
                    />

                    <button
                      className="absolute bottom-3 right-3"
                      onClick={() => addItem(gown)}
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
                            star <= gown.rating ? "text-black" : "text-gray-300"
                          }
                        >
                          ★
                        </span>
                      ))}
                    </p>
                    <p>{gown.name}</p>
                    <p className="text-red-500 mb-4">
                      {formatPrice(gown.price)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <h2 className="text-xl font-bold text-start place-self-start mb-2">
              Tops
            </h2>
            <hr className="border-t border-gray-300 w-[99%]  " />
            <hr className="border-t border-gray-300 w-[99%]  " />
            <div className="h-full w-full flex flex-row justify-around items-center  ">
              {featuredTops.map((top) => (
                <div
                  key={top.id}
                  className="border border-gray-300 m-1 md:min-w-2xs max-w-screen"
                >
                  <div className="relative md:min-h-[330px]">
                    <button className="absolute top-3 left-3">
                      <Search
                        size={24} // icon size in pixels
                        className="text-gray-700 hover:text-black transition-colors"
                        onClick={() => navigate("/product")}
                      />
                    </button>
                    <img
                      src={top.image}
                      alt={top.name}
                      className="w-full h-auto md:min-h-[330px] object-cover"
                    />

                    <button
                      className="absolute bottom-3 right-3"
                      onClick={() => addItem(top)}
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
                            star <= top.rating ? "text-black" : "text-gray-300"
                          }
                        >
                          ★
                        </span>
                      ))}
                    </p>
                    <p>{top.name}</p>
                    <p className="text-red-500 mb-4">
                      {formatPrice(top.price)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <button
          className="bg-black text-white 
            border-s-slate-600 border-2 border-solid
          p-1 my-4 max-w-30 hover:bg-[#84706f]
           transition-discrete duration-300"
          onClick={() => navigate("/shop")}
        >
          SHOP NOW
        </button>
      </section>

      {/* Cool background part */}
      <section
        className="bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="flex items-center justify-center h-full flex-col py-30">
          <h1 className="text-white text-6xl font-extrabold">
            PRETTY & CONFIDENT
          </h1>
          <p className="text-white text-xl">
            Fall in love with our design, fall in love with yourself
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section>
        <div className="max-w-7xl mx-auto px-4 py-12">
          <h2 className="text-3xl font-bold text-center mb-3">
            TESTIMONIAL & REVIEWS
          </h2>
          <p className="text-center text-base text-gray-800 mb-15">
            Let's see what our clients have to say
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <p className="text-gray-700 italic mb-4">
                  "{testimonial.feedback}"
                </p>
                <p className="font-semibold text-gray-900">
                  {testimonial.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default LandingPage;
