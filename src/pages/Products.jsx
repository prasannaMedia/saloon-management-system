import { useState } from 'react'
import { ShoppingCart, Star, Heart, Filter, Search, Package } from 'lucide-react'

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [cart, setCart] = useState([])

  const categories = [
    { id: 'all', name: 'All Products', count: 24 },
    { id: 'haircare', name: 'Hair Care', count: 8 },
    { id: 'skincare', name: 'Skin Care', count: 6 },
    { id: 'makeup', name: 'Makeup', count: 5 },
    { id: 'tools', name: 'Tools', count: 3 },
    { id: 'wellness', name: 'Wellness', count: 2 }
  ]

  const products = [
    {
      id: 1,
      name: 'Keratin Hair Treatment',
      category: 'haircare',
      price: 89.99,
      rating: 4.8,
      reviews: 234,
      image: '🧴',
      inStock: true,
      discount: 15
    },
    {
      id: 2,
      name: 'Professional Hair Dryer',
      category: 'tools',
      price: 149.99,
      rating: 4.9,
      reviews: 567,
      image: '💨',
      inStock: true,
      bestseller: true
    },
    {
      id: 3,
      name: 'Vitamin C Serum',
      category: 'skincare',
      price: 45.00,
      rating: 4.7,
      reviews: 432,
      image: '💧',
      inStock: true
    },
    {
      id: 4,
      name: 'Luxury Lipstick Set',
      category: 'makeup',
      price: 65.00,
      rating: 4.6,
      reviews: 189,
      image: '💄',
      inStock: true
    },
    {
      id: 5,
      name: 'Argan Oil Shampoo',
      category: 'haircare',
      price: 32.00,
      rating: 4.8,
      reviews: 678,
      image: '🧴',
      inStock: true,
      discount: 20
    },
    {
      id: 6,
      name: 'Hyaluronic Acid Moisturizer',
      category: 'skincare',
      price: 55.00,
      rating: 4.9,
      reviews: 891,
      image: '🧪',
      inStock: true,
      bestseller: true
    },
    {
      id: 7,
      name: 'Professional Flat Iron',
      category: 'tools',
      price: 129.99,
      rating: 4.7,
      reviews: 345,
      image: '🔥',
      inStock: false
    },
    {
      id: 8,
      name: 'Eye Shadow Palette',
      category: 'makeup',
      price: 58.00,
      rating: 4.8,
      reviews: 456,
      image: '🎨',
      inStock: true
    },
    {
      id: 9,
      name: 'Deep Conditioning Mask',
      category: 'haircare',
      price: 38.00,
      rating: 4.6,
      reviews: 234,
      image: '🧴',
      inStock: true
    },
    {
      id: 10,
      name: 'Anti-Aging Night Cream',
      category: 'skincare',
      price: 78.00,
      rating: 4.9,
      reviews: 567,
      image: '🌙',
      inStock: true,
      bestseller: true
    },
    {
      id: 11,
      name: 'Makeup Brush Set',
      category: 'tools',
      price: 85.00,
      rating: 4.8,
      reviews: 432,
      image: '🖌️',
      inStock: true
    },
    {
      id: 12,
      name: 'Essential Oil Blend',
      category: 'wellness',
      price: 42.00,
      rating: 4.7,
      reviews: 189,
      image: '🌿',
      inStock: true
    }
  ]

  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(p => p.category === selectedCategory)

  const addToCart = (product) => {
    setCart([...cart, product])
    alert(`${product.name} added to cart!`)
  }

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Shop
            <span className="bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent"> Premium Products</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Professional-grade beauty and wellness products
          </p>
        </div>

        {/* Search and Cart */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search products..."
              className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-pink-500 focus:outline-none"
            />
          </div>
          <button className="relative bg-gradient-to-r from-pink-500 to-rose-500 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-200">
            <ShoppingCart className="inline w-5 h-5 mr-2" />
            Cart
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-white text-pink-500 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold">
                {cart.length}
              </span>
            )}
          </button>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-64">
            <div className="card sticky top-24">
              <div className="flex items-center mb-4">
                <Filter className="w-5 h-5 text-gray-700 mr-2" />
                <h3 className="font-bold text-lg">Categories</h3>
              </div>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 ${
                      selectedCategory === category.id
                        ? 'bg-gradient-to-r from-pink-500 to-rose-500 text-white'
                        : 'bg-gray-50 text-gray-700 hover:bg-pink-50'
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{category.name}</span>
                      <span className={`text-sm ${
                        selectedCategory === category.id ? 'text-white' : 'text-gray-500'
                      }`}>
                        {category.count}
                      </span>
                    </div>
                  </button>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <h4 className="font-bold mb-3">Price Range</h4>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-sm">Under $50</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-sm">$50 - $100</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-sm">Over $100</span>
                  </label>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <h4 className="font-bold mb-3">Rating</h4>
                <div className="space-y-2">
                  {[5, 4, 3].map((rating) => (
                    <label key={rating} className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <div className="flex items-center text-sm">
                        {[...Array(rating)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 text-yellow-500 fill-current" />
                        ))}
                        <span className="ml-1">& up</span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            <div className="flex justify-between items-center mb-6">
              <p className="text-gray-600">
                Showing <span className="font-semibold">{filteredProducts.length}</span> products
              </p>
              <select className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-pink-500">
                <option>Sort by: Featured</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Highest Rated</option>
                <option>Best Selling</option>
              </select>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <div key={product.id} className="card group hover:scale-105 transition-all duration-200">
                  {/* Product Image */}
                  <div className="relative mb-4">
                    <div className="w-full h-48 bg-gradient-to-br from-pink-50 to-rose-50 rounded-lg flex items-center justify-center text-6xl">
                      {product.image}
                    </div>
                    {product.bestseller && (
                      <span className="absolute top-2 left-2 bg-gradient-to-r from-pink-500 to-rose-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                        Bestseller
                      </span>
                    )}
                    {product.discount && (
                      <span className="absolute top-2 right-2 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                        -{product.discount}%
                      </span>
                    )}
                    <button className="absolute bottom-2 right-2 bg-white p-2 rounded-full shadow-lg hover:bg-pink-50 transition-colors duration-200">
                      <Heart className="w-5 h-5 text-pink-500" />
                    </button>
                  </div>

                  {/* Product Info */}
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-pink-500 transition-colors">
                    {product.name}
                  </h3>

                  <div className="flex items-center mb-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-4 h-4 ${
                            i < Math.floor(product.rating) 
                              ? 'text-yellow-500 fill-current' 
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600 ml-2">
                      {product.rating} ({product.reviews})
                    </span>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-2xl font-bold text-pink-500">
                        ${product.discount 
                          ? (product.price * (1 - product.discount / 100)).toFixed(2)
                          : product.price.toFixed(2)}
                      </span>
                      {product.discount && (
                        <span className="text-sm text-gray-500 line-through ml-2">
                          ${product.price.toFixed(2)}
                        </span>
                      )}
                    </div>
                    {product.inStock ? (
                      <span className="text-sm text-green-600 font-medium flex items-center">
                        <Package className="w-4 h-4 mr-1" />
                        In Stock
                      </span>
                    ) : (
                      <span className="text-sm text-red-600 font-medium">Out of Stock</span>
                    )}
                  </div>

                  <button
                    onClick={() => addToCart(product)}
                    disabled={!product.inStock}
                    className={`w-full py-3 rounded-lg font-semibold transition-all duration-200 ${
                      product.inStock
                        ? 'bg-gradient-to-r from-pink-500 to-rose-500 text-white hover:shadow-lg'
                        : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                    }`}
                  >
                    <ShoppingCart className="inline w-5 h-5 mr-2" />
                    {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mt-20">
          <div className="bg-gradient-to-r from-pink-500 to-rose-500 rounded-2xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Get 15% Off Your First Order</h2>
            <p className="text-lg mb-6 opacity-90">
              Subscribe to our newsletter for exclusive deals and beauty tips
            </p>
            <div className="max-w-md mx-auto flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none"
              />
              <button className="bg-white text-pink-500 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Products
