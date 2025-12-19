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
    price: "₦120,000",
    rating: 4,
  },
  {
    id: 2,
    name: "White stylish",
    image: editorsPick2,
    price: "₦120,000",
    rating: 5,
  },
  {
    id: 3,
    name: "Regal Black Gown",
    image: editorsPick1,
    price: "₦120,000",
    rating: 4,
  },
  {
    id: 4,
    name: "White stylish",
    image: editorsPick2,
    price: "₦120,000",
    rating: 5,
  },
];

// Categories data
import gown1 from "./images/fashion-gown-2.png";
import gown2 from "./images/image-to-cut-out-2.png";
import gown3 from "./images/modelgown1.png";
export const categories = [
  {
    id: "tops",
    name: "Tops",
    items: [
      {
        id: "top1",
        name: "brown puffsleeve blouse",
        rating: 3,
      },
      {
        id: "top2",
        name: "white crop top",
        rating: 3,
      },
    ],
  },
  {
    id: "gowns",
    name: "Gowns",
    items: [
      {
        id: "gown1",
        name: "red evening gown",
        image: gown1,
        rating: 4,
        price: "₦120,000",
      },
      {
        id: "gown2",
        name: "red evening gown",
        image: gown2,
        rating: 3,
        price: "₦130,000",
      },
      {
        id: "gown3",
        name: "red evening gown",
        image: gown3,
        rating: 3,
        price: "₦130,000",
      },
    ],
  },
];

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
