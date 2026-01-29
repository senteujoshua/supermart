// src/components/customer/CartSummary.tsx - Glassmorphism Design

import { useNavigate } from 'react-router-dom';
import type { CartItem } from '../../types';

interface CartSummaryProps {
  items: CartItem[];
  totalAmount: number;
  onClearCart: () => void;
}

export function CartSummary({ items, totalAmount, onClearCart }: CartSummaryProps) {
  const navigate = useNavigate();

  return (
    <div className="glass-card p-6 h-fit sticky top-24">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-500/30 to-emerald-600/20 flex items-center justify-center border border-green-400/20">
          <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        </div>
        <div>
          <h2 className="text-xl font-bold text-offwhite">Cart</h2>
          <p className="text-sm text-secondary/70">{items.length} items</p>
        </div>
      </div>

      {items.length === 0 ? (
        /* Empty Cart State */
        <div className="text-center py-8">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-secondary/10 flex items-center justify-center">
            <svg className="w-8 h-8 text-secondary/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
          </div>
          <p className="text-secondary/70">Your cart is empty</p>
          <p className="text-secondary/50 text-sm mt-1">Add products to get started</p>
        </div>
      ) : (
        <>
          {/* Cart Items */}
          <div className="space-y-3 mb-6 max-h-72 overflow-y-auto pr-2 custom-scrollbar">
            {items.map((item, index) => (
              <div
                key={item.productId}
                className="glass-card p-3 animate-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h4 className="font-semibold text-offwhite text-sm">{item.productName}</h4>
                    <p className="text-xs text-secondary/70 mt-1">
                      {item.quantity} × KES {item.price.toLocaleString()}
                    </p>
                  </div>
                  <span className="text-sm font-bold text-cream">
                    KES {item.totalPrice.toLocaleString()}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-secondary/30 to-transparent mb-4" />

          {/* Total */}
          <div className="glass-card p-4 mb-6">
            <div className="flex justify-between items-center">
              <span className="text-secondary/80">Subtotal</span>
              <span className="text-offwhite">KES {totalAmount.toLocaleString()}</span>
            </div>
            <div className="flex justify-between items-center mt-2">
              <span className="text-secondary/80">Delivery</span>
              <span className="text-green-400 text-sm">Free</span>
            </div>
            <div className="h-px bg-secondary/20 my-3" />
            <div className="flex justify-between items-center">
              <span className="text-lg font-bold text-offwhite">Total</span>
              <span className="text-2xl font-bold text-cream">
                KES {totalAmount.toLocaleString()}
              </span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <button
              onClick={() => navigate('/checkout')}
              className="w-full glass-btn-accent py-3 text-sm font-bold flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
              Proceed to Checkout
            </button>
            <button
              onClick={onClearCart}
              className="w-full glass-btn py-2 text-sm hover:bg-red-500/20 hover:border-red-400/30 flex items-center justify-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
              Clear Cart
            </button>
          </div>
        </>
      )}
    </div>
  );
}
