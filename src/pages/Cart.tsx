
import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Minus, Plus, RefreshCcw, ShoppingCart, Trash2, X } from "lucide-react";

// Sample cart items
const initialCartItems = [
  {
    id: "1",
    name: "Tractor Engine Air Filter",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1620716571877-f1bf5b892b9f?auto=format&fit=crop&w=500&h=300",
    quantity: 1,
  },
  {
    id: "2",
    name: "Car Brake Pads Set",
    price: 45.50,
    image: "https://images.unsplash.com/photo-1497491249088-11e2d137b3f9?auto=format&fit=crop&w=500&h=300",
    quantity: 2,
  },
];

const Cart = () => {
  const [cartItems, setCartItems] = useState(initialCartItems);
  const [couponCode, setCouponCode] = useState("");

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };

  const removeItem = (id: string) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  // Calculate order summary
  const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  const shipping = subtotal > 100 ? 0 : 10;
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-6 flex items-center">
            <ShoppingCart className="mr-3 h-8 w-8" /> Shopping Cart
          </h1>

          {cartItems.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
                  {/* Header */}
                  <div className="grid grid-cols-12 gap-4 p-4 bg-agro-lightgray text-agro-darkgray font-semibold border-b">
                    <div className="col-span-6">Product</div>
                    <div className="col-span-2 text-center">Price</div>
                    <div className="col-span-2 text-center">Quantity</div>
                    <div className="col-span-2 text-right">Total</div>
                  </div>

                  {/* Cart Items */}
                  {cartItems.map((item) => (
                    <div key={item.id} className="grid grid-cols-12 gap-4 p-4 items-center border-b">
                      {/* Product */}
                      <div className="col-span-6">
                        <div className="flex items-center space-x-4">
                          <button 
                            onClick={() => removeItem(item.id)}
                            className="text-gray-400 hover:text-red-500 transition-colors"
                          >
                            <X className="h-5 w-5" />
                          </button>
                          <div className="w-16 h-16 flex-shrink-0">
                            <img 
                              src={item.image} 
                              alt={item.name} 
                              className="w-full h-full object-cover rounded"
                            />
                          </div>
                          <div>
                            <Link to={`/products/${item.id}`} className="font-medium hover:text-agro-green transition-colors">
                              {item.name}
                            </Link>
                          </div>
                        </div>
                      </div>

                      {/* Price */}
                      <div className="col-span-2 text-center">
                        €{item.price.toFixed(2)}
                      </div>

                      {/* Quantity */}
                      <div className="col-span-2 flex justify-center">
                        <div className="flex items-center border rounded">
                          <Button 
                            variant="ghost" 
                            size="icon" 
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            disabled={item.quantity <= 1}
                            className="h-8 w-8"
                          >
                            <Minus className="h-3 w-3" />
                          </Button>
                          <span className="w-8 text-center">{item.quantity}</span>
                          <Button 
                            variant="ghost" 
                            size="icon" 
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="h-8 w-8"
                          >
                            <Plus className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>

                      {/* Total */}
                      <div className="col-span-2 text-right font-medium">
                        €{(item.price * item.quantity).toFixed(2)}
                      </div>
                    </div>
                  ))}

                  {/* Cart Actions */}
                  <div className="p-4 flex justify-between">
                    <Button 
                      variant="outline" 
                      onClick={clearCart}
                      className="text-red-500 border-red-500 hover:bg-red-50"
                    >
                      <Trash2 className="mr-2 h-4 w-4" /> Clear Cart
                    </Button>
                    <Button variant="outline">
                      <RefreshCcw className="mr-2 h-4 w-4" /> Update Cart
                    </Button>
                  </div>
                </div>
              </div>

              {/* Order Summary */}
              <div>
                <div className="bg-white rounded-lg shadow-sm border p-6">
                  <h2 className="text-xl font-bold mb-4">Order Summary</h2>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span>€{subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Shipping</span>
                      <span>{shipping === 0 ? 'Free' : `€${shipping.toFixed(2)}`}</span>
                    </div>
                    <div className="h-px bg-gray-200 my-3"></div>
                    <div className="flex justify-between font-bold text-lg">
                      <span>Total</span>
                      <span>€{total.toFixed(2)}</span>
                    </div>
                  </div>
                  
                  {/* Coupon Code */}
                  <div className="mb-6">
                    <div className="flex gap-2">
                      <Input 
                        placeholder="Coupon code" 
                        value={couponCode}
                        onChange={(e) => setCouponCode(e.target.value)}
                      />
                      <Button variant="outline">Apply</Button>
                    </div>
                  </div>
                  
                  {/* Checkout Button */}
                  <Button className="w-full bg-agro-green hover:bg-agro-green/90">
                    Proceed to Checkout
                  </Button>
                  
                  {/* Continue Shopping */}
                  <div className="mt-4 text-center">
                    <Link to="/products" className="text-agro-green hover:underline inline-flex items-center">
                      Continue Shopping
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="inline-flex justify-center items-center w-24 h-24 rounded-full bg-agro-lightgray mb-6">
                <ShoppingCart className="h-12 w-12 text-agro-green" />
              </div>
              <h2 className="text-2xl font-semibold mb-4">Your cart is empty</h2>
              <p className="text-gray-600 mb-8">
                Looks like you haven't added any items to your cart yet.
              </p>
              <Button asChild className="bg-agro-green hover:bg-agro-green/90">
                <Link to="/products">Start Shopping</Link>
              </Button>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Cart;
