// src/components/customer/ProductList.tsx - Glassmorphism Design

import { useState } from 'react';
import type { Product } from '../../types';

interface ProductListProps {
  products: Product[];
  loading: boolean;
  selectedBranch: string;
  onAddToCart: (product: Product, quantity: number) => void;
}

export function ProductList({
  products,
  loading,
  selectedBranch,
  onAddToCart,
}: ProductListProps) {
  const [quantities, setQuantities] = useState<Record<string, number>>({});

  const getQuantity = (productId: string) => quantities[productId] || 1;

  const setQuantity = (productId: string, quantity: number) => {
    setQuantities((prev) => ({ ...prev, [productId]: Math.max(1, quantity) }));
  };

  // Loading Skeleton
  if (loading) {
    return (
      <div className="glass-card p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-8 rounded-lg shimmer" />
          <div className="h-7 w-48 rounded-lg shimmer" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="glass-product-card p-5">
              <div className="h-32 rounded-xl shimmer mb-4" />
              <div className="h-5 w-3/4 rounded shimmer mb-2" />
              <div className="h-4 w-1/2 rounded shimmer mb-4" />
              <div className="h-8 w-24 rounded shimmer" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Empty State
  if (products.length === 0) {
    return (
      <div className="glass-card p-8 text-center">
        <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-secondary/10 flex items-center justify-center">
          <svg className="w-10 h-10 text-secondary/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-offwhite mb-2">
          {selectedBranch ? 'No Products Available' : 'Select a Branch'}
        </h3>
        <p className="text-secondary/70">
          {selectedBranch
            ? 'Check back later for new products'
            : 'Choose a branch above to see available products'}
        </p>
      </div>
    );
  }

  return (
    <div className="glass-card p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/50 to-secondary/30 flex items-center justify-center border border-offwhite/10">
            <svg className="w-5 h-5 text-offwhite" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
          </div>
          <div>
            <h2 className="text-xl font-bold text-offwhite">Products</h2>
            <p className="text-sm text-secondary/70">{products.length} items available</p>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {products.map((product, index) => (
          <div
            key={product._id}
            className="glass-product-card p-5 group"
            style={{ animationDelay: `${index * 50}ms` }}
          >
            {/* Product Image Placeholder */}
            <div className="relative h-32 rounded-xl bg-gradient-to-br from-secondary/20 to-primary/30 mb-4 flex items-center justify-center overflow-hidden">
              <svg className="w-12 h-12 text-secondary/40 group-hover:scale-110 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
              {/* Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Product Info */}
            <div className="mb-4">
              <h3 className="text-lg font-bold text-offwhite mb-1 group-hover:text-cream transition-colors">
                {product.name}
              </h3>
              <p className="text-sm text-secondary/70 line-clamp-2">
                {product.description || 'Premium quality product'}
              </p>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-2 mb-4">
              <span className="text-2xl font-bold text-cream">
                KES {product.price.toLocaleString()}
              </span>
            </div>

            {/* Quantity & Add to Cart */}
            <div className="flex gap-2 items-center">
              {/* Quantity Selector */}
              <div className="flex items-center glass-card px-1 py-1">
                <button
                  onClick={() => setQuantity(product._id, getQuantity(product._id) - 1)}
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-secondary hover:text-offwhite hover:bg-secondary/20 transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                  </svg>
                </button>
                <span className="w-10 text-center font-semibold text-offwhite">
                  {getQuantity(product._id)}
                </span>
                <button
                  onClick={() => setQuantity(product._id, getQuantity(product._id) + 1)}
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-secondary hover:text-offwhite hover:bg-secondary/20 transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </button>
              </div>

              {/* Add to Cart Button */}
              <button
                onClick={() => {
                  onAddToCart(product, getQuantity(product._id));
                  setQuantity(product._id, 1);
                }}
                className="flex-1 glass-btn-primary py-2 px-4 text-sm flex items-center justify-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                Add
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
