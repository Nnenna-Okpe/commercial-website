import truck from "/cargo-truck_936784.png";
import returnPic from "/sale-return-icon_11083555.png";
import discount from "/tag_1017476.png";

export const highlights = [
  {
    id: 1,
    icon: truck,
    title: "Free Shipping",
    description: "on orders over #150,000",
  },
  {
    id: 2,
    icon: returnPic,
    title: "Return Period",
    description: "30 days return policy",
  },
  {
    id: 3,
    icon: discount,
    title: "Rentals & Discounts",
    description: "available for students and seniors",
  },
];

// Editor's Pick data
import editorsPick1 from "./images/image-to-cut-out-2.png";
import editorsPick2 from "./images/modelgown1.png";

export const editorsPick = [
  {
    id: 1,
    name: "Regal Black Gown",
    image: editorsPick1,
    price: 120000,
    rating: 4,
  },
  {
    id: 2,
    name: "White stylish",
    image: editorsPick2,
    price: 120000,
    rating: 5,
  },
  {
    id: 3,
    name: "Regal Black Gown",
    image: editorsPick1,
    price: 120000,
    rating: 4,
  },
  {
    id: 4,
    name: "White stylish",
    image: editorsPick2,
    price: 120000,
    rating: 5,
  },
];

// Categories data
import top1 from "./images/modeltop.png";
import top2 from "./images/modeltop2.png";
import top3 from "./images/image-to-cut-out.png";

import gown1 from "./images/fashion-gown-2.png";
import gown2 from "./images/image-to-cut-out-2.png";
import gown3 from "./images/modelgown1.png";
import gown4 from "./images/modelgown2.png";
import gown5 from "./images/modelgown3.png";

export const categories = [
  {
    id: "tops",
    name: "Tops",
    items: [
      {
        id: "top1",
        name: "brown puffsleeve blouse",
        image: top1,
        rating: 4,
        price: 120000,
      },
      {
        id: "top2",
        name: "white crop top",
        image: gown4,
        rating: 4,
        price: 120000,
      },
      {
        id: "top3",
        name: "white crop top",
        image: top3,
        rating: 4,
        price: 120000,
      },
      {
        id: "top4",
        name: "white crop top",
        image: top2,
        rating: 4,
        price: 120000,
      },
    ],
  },

  // GOWNS
  {
    id: "gowns",
    name: "Gowns",
    items: [
      {
        id: "gown1",
        name: "red evening gown",
        image: gown1,
        rating: 4,
        price: 120000,
      },
      {
        id: "gown2",
        name: "red evening gown",
        image: gown2,
        rating: 3,
        price: 130000,
      },
      {
        id: "gown3",
        name: "red evening gown",
        image: gown3,
        rating: 3,
        price: 130000,
      },
      {
        id: "gown4",
        name: "red evening gown",
        image: gown4,
        rating: 3,
        price: 130000,
      },
      {
        id: "gown5",
        name: "red evening gown",
        image: gown5,
        rating: 3,
        price: 130000,
      },
      {
        id: "gown6",
        name: "red evening gown",
        image: gown2,
        rating: 3,
        price: 130000,
      },
      {
        id: "gown7",
        name: "red evening gown",
        image: gown3,
        rating: 3,
        price: 130000,
      },
      {
        id: "gown8",
        name: "red evening gown",
        image: gown4,
        rating: 3,
        price: 130000,
      },
      {
        id: "gown9",
        name: "red evening gown",
        image: gown5,
        rating: 3,
        price: 130000,
      },
    ],
  },
];

export const formatPrice = (price) => {
  return `₦${price.toLocaleString("en-NG")}`;
};

// TESTIMONIALS
export const testimonials = [
  {
    id: 1,
    name: "Jane Doe",
    feedback:
      "I absolutely love the quality of the clothes I purchased from FashionHub. The designs are trendy and the fabric feels great on my skin!",
    rating: 5,
  },
  {
    id: 2,
    name: "John Smith",
    feedback:
      "FashionHub has an amazing collection of accessories. I found the perfect pieces to complement my outfits. Highly recommend!",
    rating: 4,
  },
  {
    id: 3,
    name: "Emily Johnson",
    feedback:
      "The customer service at FashionHub is exceptional. They helped me find the perfect outfit for my special event and went above and beyond to ensure I was satisfied.",
    rating: 5,
  },
];

// colors selection
export const bgColors = [
  {
    id: 1,
    color: "bg-black",
  },
  {
    id: 2,
    color: "bg-white",
  },
  {
    id: 3,
    color: "bg-red-500",
  },
  {
    id: 4,
    color: "bg-green-500",
  },
  {
    id: 5,
    color: "bg-blue-500",
  },
];

//size selection
export const size = [
  {
    id: 1,
    text: "S",
  },
  {
    id: 2,
    text: "M",
  },
  {
    id: 3,
    text: "L",
  },
  {
    id: 4,
    text: "XL",
  },
];

// Tags Selection
export const tags = [
  {
    id: 1,
    text: "Luxury",
  },
  {
    id: 2,
    text: "Summer",
  },
  {
    id: 3,
    text: "Organic",
  },
  {
    id: 4,
    text: "Stripped",
  },
  {
    id: 5,
    text: "Sheer",
  },
  {
    id: 6,
    text: "Vintage",
  },
];

export const product = {
  name: "Ethereal black dress",
  price: "$45.00",
  rating: 4,
  reviews: 128,
  image: gown3,
  gallery: [gown3, gown4, gown5],
  colors: ["bg-black", "bg-white", "bg-blue-500"],
  description:
    "A breathable linen shirt designed for comfort and effortless style.",
  fabric: "100% Linen",
  fit: "Regular fit",
  care: "Machine wash cold",
};
