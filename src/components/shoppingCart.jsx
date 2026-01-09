import { useState } from "react";
import { useCart } from "../context/CartContext";
import { ShoppingBag, X, Plus, Minus, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function ShoppingCart() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const { cart, removeItem, updateQuantity, totalItems, totalPrice } =
    useCart();

  return (
    <>
      {/* Cart button */}
      <button
        className="fixed top-4 right-4 z-50 rounded-full shadow-lg bg-white p-3"
        onClick={() => setIsOpen(true)}
      >
        <ShoppingBag className="h-5 w-5" />
        {totalItems > 0 && (
          <span className="absolute -top-1 -right-1 bg-black text-white text-[10px] font-bold h-5 w-5 rounded-full flex items-center justify-center">
            {totalItems}
          </span>
        )}
      </button>

      {/* Overlay */}
      <div
        className={`fixed inset-0 z-60 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Cart panel */}
      <div
        className={`fixed top-0 right-0 z-70 h-full w-full max-w-md bg-white shadow-2xl transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b">
            <h2 className="text-xl font-bold">Your Cart</h2>
            <button onClick={() => setIsOpen(false)}>
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Cart items */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {cart.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-gray-400">
                <ShoppingBag className="h-12 w-12 mb-4 opacity-20" />
                <p>Your cart is empty</p>
              </div>
            ) : (
              cart.map((item) => (
                <div key={item.id} className="flex gap-4">
                  <div className="h-24 w-20 overflow-hidden rounded-md bg-gray-100">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <div className="flex flex-1 flex-col justify-between py-1">
                    <div>
                      <h3 className="text-sm font-medium">{item.name}</h3>
                      <p className="mt-1 text-sm font-semibold">
                        ₦{item.price.toLocaleString()}
                      </p>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center border rounded-md">
                        <button
                          className="p-1 hover:bg-gray-100"
                          onClick={() =>
                            updateQuantity(item.id, item.quantity - 1)
                          }
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="px-2 text-xs font-medium">
                          {item.quantity}
                        </span>
                        <button
                          className="p-1 hover:bg-gray-100"
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>

                      <button
                        className="text-red-500 hover:opacity-70"
                        onClick={() => removeItem(item.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer */}
          {cart.length > 0 && (
            <div className="p-6 border-t bg-gray-50">
              <div className="flex justify-between text-base font-medium mb-4">
                <span>Total</span>
                <span className="font-bold">
                  ₦{totalPrice.toLocaleString()}
                </span>
              </div>
              <button
                className="w-full h-12 bg-black text-white font-semibold rounded-md"
                onClick={() => navigate("/checkout")}
              >
                Checkout
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
