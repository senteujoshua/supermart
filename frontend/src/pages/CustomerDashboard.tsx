// src/pages/CustomerDashboard.tsx - Glassmorphism Design

import { useState, useEffect } from 'react';
import { useAuth } from '../hooks/useAuth';
import { useCart } from '../hooks/useCart';
import { saleService } from '../services/saleService';
import { adminService } from '../services/adminService';
import type { Product, Branch } from '../types';
import { BranchSelector } from '../components/customer/BranchSelector';
import { ProductList } from '../components/customer/ProductList';
import { CartSummary } from '../components/customer/CartItem';
import { PurchaseHistory } from '../components/customer/PurchaseHistory';

export function CustomerDashboard() {
  const { user, logout } = useAuth();
  const { items, addToCart, clearCart } = useCart();
  const [branches, setBranches] = useState<Branch[]>([]);
  const [selectedBranch, setSelectedBranch] = useState('');
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const loadBranches = async () => {
      try {
        const data = await adminService.getBranches();
        setBranches(data);
        if (user?.branch) {
          setSelectedBranch(user.branch);
        }
      } catch (error) {
        console.error('Failed to load branches:', error);
      }
    };
    loadBranches();
  }, [user]);

  useEffect(() => {
    if (!selectedBranch) return;

    const loadProducts = async () => {
      try {
        setLoading(true);
        const data = await saleService.getAvailableProducts(selectedBranch);
        setProducts(data);
      } catch (error) {
        console.error('Failed to load products:', error);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, [selectedBranch]);

  const handleAddToCart = (product: Product, quantity: number) => {
    addToCart({
      productId: product._id,
      productName: product.name,
      quantity,
      price: product.price,
      branchId: selectedBranch,
      totalPrice: quantity * product.price,
    });
    setMessage(`${product.name} added to cart!`);
    setTimeout(() => setMessage(''), 3000);
  };

  const totalAmount = items.reduce((sum, item) => sum + item.totalPrice, 0);

  return (
    <div className="min-h-screen">
      {/* Glass Navbar */}
      <header className="glass-navbar">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-secondary/40 to-cream/30 flex items-center justify-center border border-offwhite/20">
                <svg className="w-6 h-6 text-offwhite" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <span className="text-xl font-bold text-offwhite text-shadow-glass">SuperMart</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            {/* User Info */}
            <div className="hidden sm:flex items-center gap-3 glass-card px-4 py-2">
              <div className="w-8 h-8 rounded-full bg-secondary/30 flex items-center justify-center">
                <span className="text-sm font-semibold text-offwhite">
                  {user?.name?.charAt(0).toUpperCase()}
                </span>
              </div>
              <span className="text-sm text-offwhite/90">{user?.name}</span>
            </div>

            {/* Cart Badge */}
            <div className="relative glass-btn px-3 py-2">
              <svg className="w-6 h-6 text-offwhite" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              {items.length > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-red-500 to-red-600 rounded-full text-xs font-bold flex items-center justify-center text-white">
                  {items.length}
                </span>
              )}
            </div>

            {/* Logout Button */}
            <button
              onClick={logout}
              className="glass-btn px-4 py-2 text-sm hover:bg-red-500/30 hover:border-red-400/30"
            >
              <span className="hidden sm:inline">Logout</span>
              <svg className="w-5 h-5 sm:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 pt-24 pb-12">
        {/* Hero Section */}
        <div className="glass-hero rounded-glass-lg p-8 mb-8 animate-in">
          <div className="glass-hero-overlay rounded-glass-lg" />
          <div className="relative z-10">
            <h1 className="text-3xl md:text-4xl font-bold text-offwhite mb-2 text-shadow-glass">
              Welcome back, {user?.name?.split(' ')[0]}! 👋
            </h1>
            <p className="text-secondary/90 text-lg">
              Discover fresh products at your local SuperMart branch
            </p>
          </div>
        </div>

        {/* Success Message */}
        {message && (
          <div className="glass-card border-green-500/30 bg-green-500/10 px-6 py-4 mb-6 animate-in flex items-center gap-3">
            <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-green-300">{message}</span>
          </div>
        )}

        {/* Branch Selector */}
        <BranchSelector
          branches={branches}
          selectedBranch={selectedBranch}
          onBranchChange={setSelectedBranch}
          loading={loading}
        />

        {/* Products & Cart Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
          {/* Products */}
          <div className="lg:col-span-2">
            <ProductList
              products={products}
              loading={loading}
              selectedBranch={selectedBranch}
              onAddToCart={handleAddToCart}
            />
          </div>

          {/* Cart */}
          <div className="lg:col-span-1">
            <CartSummary
              items={items}
              totalAmount={totalAmount}
              onClearCart={clearCart}
            />
          </div>
        </div>

        {/* Purchase History */}
        <div className="mt-12">
          <PurchaseHistory />
        </div>
      </main>

      {/* Footer */}
      <footer className="glass-card mx-4 mb-4 p-6 text-center">
        <p className="text-secondary/70 text-sm">
          © 2025 SuperMart. Premium Shopping Experience.
        </p>
      </footer>
    </div>
  );
}
