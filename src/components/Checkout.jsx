import { useState } from "react";
import { useCart } from "../context/CartContext"; // make sure path is correct
import {
  ChevronLeft,
  CreditCard,
  Truck,
  CheckCircle2,
  ShoppingBag,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function CheckoutPage({ onBack }) {
  const navigate = useNavigate();
  const { cart, totalPrice } = useCart();
  const [step, setStep] = useState(1); // 1: Shipping, 2: Payment, 3: Confirmation

  const steps = [
    { id: 1, name: "Shipping", icon: Truck },
    { id: 2, name: "Payment", icon: CreditCard },
    { id: 3, name: "Review", icon: CheckCircle2 },
  ];

  if (cart.length === 0 && step < 3) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
        <ShoppingBag className="h-16 w-16 text-gray-300 mb-4 opacity-20" />
        <h2 className="text-2xl font-serif font-bold mb-2">
          Your cart is empty
        </h2>
        <p className="text-gray-500 mb-8">
          Add some items to your cart to proceed with checkout.
        </p>
        <button
          onClick={() => navigate("/shop")}
          className="px-6 py-3 bg-black text-white rounded-lg font-semibold hover:bg-gray-800 transition"
        >
          Return to Store
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <button
            className="flex items-center gap-2 -ml-2 text-gray-700 hover:text-black transition"
            onClick={() => navigate("/shop")}
          >
            <ChevronLeft className="h-4 w-4" />
            Back to Store
          </button>
          <div className="font-serif font-bold text-xl tracking-tight">
            Checkout
          </div>
          <div className="w-20" /> {/* Spacer */}
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Progress Stepper */}
        <div className="flex justify-center mb-12">
          <div className="flex items-center w-full max-w-md">
            {steps.map((s, i) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.id}
                  className="flex items-center flex-1 last:flex-none"
                >
                  <div className="relative flex flex-col items-center">
                    <div
                      className={`h-10 w-10 rounded-full flex items-center justify-center transition-colors duration-300 ${
                        step >= s.id
                          ? "bg-blue-600 text-white"
                          : "bg-gray-200 text-gray-500"
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="absolute -bottom-6 text-xs font-medium whitespace-nowrap">
                      {s.name}
                    </span>
                  </div>
                  {i < steps.length - 1 && (
                    <div
                      className={`h-0.5 flex-1 mx-4 transition-colors duration-300 ${
                        step > s.id ? "bg-blue-600" : "bg-gray-200"
                      }`}
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12">
          {/* Main Form Area */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl shadow-sm border p-6 md:p-8">
              {/* Step 1: Shipping */}
              {step === 1 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-serif font-bold">
                    Shipping Information
                  </h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">First Name</label>
                      <input className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-200 outline-none transition" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Last Name</label>
                      <input className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-200 outline-none transition" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email Address</label>
                    <input
                      type="email"
                      className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-200 outline-none transition"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Address</label>
                    <input className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-200 outline-none transition" />
                  </div>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">City</label>
                      <input className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-200 outline-none transition" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">State</label>
                      <input className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-200 outline-none transition" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">ZIP Code</label>
                      <input className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-200 outline-none transition" />
                    </div>
                  </div>
                  <button
                    className="w-full h-12 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
                    onClick={() => setStep(2)}
                  >
                    Continue to Payment
                  </button>
                </div>
              )}

              {/* Step 2: Payment */}
              {step === 2 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-serif font-bold">
                    Payment Method
                  </h2>
                  <div className="p-4 border-2 border-blue-600 bg-blue-50 rounded-xl flex items-center gap-4">
                    <div className="h-5 w-5 rounded-full border-4 border-blue-600" />
                    <div className="flex-1">
                      <p className="font-semibold">Credit or Debit Card</p>
                      <p className="text-sm text-gray-500">
                        Secure payment via Stripe
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <div className="h-6 w-10 bg-gray-200 rounded" />
                      <div className="h-6 w-10 bg-gray-200 rounded" />
                    </div>
                  </div>
                  <div className="space-y-4 pt-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Card Number</label>
                      <input
                        placeholder="0000 0000 0000 0000"
                        className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-200 outline-none transition"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">
                          Expiry Date
                        </label>
                        <input
                          placeholder="MM/YY"
                          className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-200 outline-none transition"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">CVC</label>
                        <input
                          placeholder="123"
                          className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-200 outline-none transition"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row gap-4 pt-4">
                    <button
                      className="flex-1 h-12 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition"
                      onClick={() => setStep(1)}
                    >
                      Back to Shipping
                    </button>
                    <button
                      className="flex-1 h-12 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
                      onClick={() => setStep(3)}
                    >
                      Complete Order
                    </button>
                  </div>
                </div>
              )}

              {/* Step 3: Confirmation */}
              {step === 3 && (
                <div className="text-center py-12 space-y-6">
                  <div className="h-20 w-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="h-10 w-10" />
                  </div>
                  <h2 className="text-3xl font-serif font-bold">
                    Order Confirmed!
                  </h2>
                  <p className="text-gray-500 max-w-xs mx-auto">
                    Thank you for your purchase. We've sent a confirmation email
                    to your inbox.
                  </p>
                  <div className="pt-8">
                    <button
                      onClick={() => navigate("/shop")}
                      className="h-12 px-8 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
                    >
                      Return to Store
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Order Summary Sidebar */}
          {step < 3 && (
            <div className="lg:col-span-5">
              <div className="bg-white rounded-2xl shadow-sm border p-6 sticky top-24">
                <h3 className="text-lg font-serif font-bold mb-6">
                  Order Summary
                </h3>
                <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2 mb-6">
                  {cart.map((item) => (
                    <div key={item.id} className="flex gap-4">
                      <div className="h-16 w-14 bg-gray-200 rounded-md overflow-hidden shrink-0">
                        <img
                          src={item.image || "/placeholder.svg"}
                          alt={item.name}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium truncate">
                          {item.name}
                        </p>
                        <p className="text-xs text-gray-500">
                          Qty: {item.quantity}
                        </p>
                      </div>
                      <p className="text-sm font-semibold">
                        ₦{(item.price * item.quantity).toLocaleString()}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="space-y-3 pt-6 border-t border-dashed">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Subtotal</span>
                    <span>₦{totalPrice.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Shipping</span>
                    <span className="text-green-600 font-medium">Free</span>
                  </div>
                  <div className="flex justify-between text-lg font-bold pt-3 border-t">
                    <span>Total</span>
                    <span>₦{totalPrice.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
