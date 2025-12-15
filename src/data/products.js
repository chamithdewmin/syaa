/**
 * Product Data - Mock data for e-commerce website
 * In production, this would come from an API
 */

export const products = [
  {
    id: 1,
    name: "White DKDC T-Shirt with Contrast Sleeve Tape",
    price: 2395.00,
    originalPrice: 2995.00,
    images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=600&fit=crop",
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=400&h=600&fit=crop"
    ],
    category: "men",
    subcategory: "t-shirts",
    sizes: ["S", "M", "L", "XL"],
    colors: ["White", "Black", "Grey"],
    inStock: true,
    rating: 4.5,
    reviews: 128,
    description: "Premium quality cotton t-shirt with contrast sleeve tape detailing. Perfect for casual wear.",
    features: ["100% Cotton", "Machine Washable", "Comfortable Fit"],
    badge: null
  },
  {
    id: 2,
    name: "Grey Heathered Regular Fit T-Shirt",
    price: 4295.00,
    originalPrice: null,
    images: [
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=400&h=600&fit=crop",
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=600&fit=crop"
    ],
    category: "men",
    subcategory: "t-shirts",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Grey", "Navy"],
    inStock: true,
    rating: 4.7,
    reviews: 89,
    description: "Comfortable regular fit t-shirt in grey heathered fabric. Great for everyday wear.",
    features: ["Premium Cotton Blend", "Regular Fit", "Durable"],
    badge: null
  },
  {
    id: 3,
    name: "Puff Sleeve Ruffle Hem Floral Babydoll Mini Dress in Navy Blue",
    price: 2795.00,
    originalPrice: 3495.00,
    images: [
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=600&fit=crop",
      "https://images.unsplash.com/photo-1594633313593-bab3825d0caf?w=400&h=600&fit=crop"
    ],
    category: "women",
    subcategory: "dresses",
    sizes: ["XS", "S", "M", "L"],
    colors: ["Navy Blue", "Pink", "White"],
    inStock: true,
    rating: 4.8,
    reviews: 256,
    description: "Beautiful floral print babydoll dress with puff sleeves and ruffle hem. Perfect for parties and special occasions.",
    features: ["Floral Print", "Puff Sleeves", "Ruffle Hem", "Comfortable Fit"],
    badge: "Sale"
  },
  {
    id: 4,
    name: "White Ditsy Floral Print Puff Sleeve Crop Top",
    price: 3895.00,
    originalPrice: null,
    images: [
      "https://images.unsplash.com/photo-1594633313593-bab3825d0caf?w=400&h=600&fit=crop",
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=600&fit=crop"
    ],
    category: "women",
    subcategory: "tops",
    sizes: ["XS", "S", "M", "L"],
    colors: ["White", "Pink", "Yellow"],
    inStock: true,
    rating: 4.6,
    reviews: 192,
    description: "Chic crop top with ditsy floral print and puff sleeves. Pair with high-waisted bottoms for a trendy look.",
    features: ["Floral Print", "Puff Sleeves", "Crop Length", "Versatile"],
    badge: "New"
  },
  {
    id: 5,
    name: "Black Glitter Cowl Neck Midi Dress",
    price: 5395.00,
    originalPrice: null,
    images: [
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=600&fit=crop"
    ],
    category: "women",
    subcategory: "dresses",
    sizes: ["XS", "S", "M", "L"],
    colors: ["Black"],
    inStock: true,
    rating: 4.9,
    reviews: 312,
    description: "Elegant midi dress with cowl neck and glitter detailing. Perfect for evening events.",
    features: ["Cowl Neck", "Midi Length", "Glitter Detailing", "Elegant"],
    badge: "New"
  },
  {
    id: 6,
    name: "Black Spaghetti Strap Bodycon Slit Dress",
    price: 5795.00,
    originalPrice: null,
    images: [
      "https://images.unsplash.com/photo-1594633313593-bab3825d0caf?w=400&h=600&fit=crop"
    ],
    category: "women",
    subcategory: "dresses",
    sizes: ["XS", "S", "M", "L"],
    colors: ["Black", "Red"],
    inStock: true,
    rating: 4.7,
    reviews: 201,
    description: "Stylish bodycon dress with spaghetti straps and side slit. Flattering fit for all body types.",
    features: ["Bodycon Fit", "Spaghetti Straps", "Side Slit", "Stretchy Fabric"],
    badge: "New"
  },
  {
    id: 7,
    name: "Metallic Ruffled V-Neck Long Sleeve Mini Dress",
    price: 6595.00,
    originalPrice: null,
    images: [
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=600&fit=crop"
    ],
    category: "women",
    subcategory: "dresses",
    sizes: ["XS", "S", "M", "L"],
    colors: ["Silver", "Gold", "Rose Gold"],
    inStock: true,
    rating: 4.8,
    reviews: 167,
    description: "Glamorous metallic mini dress with ruffled details and V-neck. Perfect for parties.",
    features: ["Metallic Finish", "Ruffled Details", "Long Sleeves", "V-Neck"],
    badge: "New"
  },
  {
    id: 8,
    name: "Bodycon Mini Dress Forest Green",
    price: 10995.00,
    originalPrice: null,
    images: [
      "https://images.unsplash.com/photo-1594633313593-bab3825d0caf?w=400&h=600&fit=crop"
    ],
    category: "women",
    subcategory: "dresses",
    sizes: ["XS", "S", "M", "L"],
    colors: ["Forest Green", "Black"],
    inStock: true,
    rating: 4.6,
    reviews: 98,
    description: "Vibrant forest green bodycon mini dress. Bold color for confident styling.",
    features: ["Bodycon Fit", "Vibrant Color", "Stretchy", "Comfortable"],
    badge: "New"
  },
  {
    id: 9,
    name: "Men's Casual Button-Down Shirt",
    price: 5495.00,
    originalPrice: null,
    images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=600&fit=crop"
    ],
    category: "men",
    subcategory: "shirts",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["White", "Blue", "Grey"],
    inStock: true,
    rating: 4.5,
    reviews: 145,
    description: "Classic casual button-down shirt. Versatile for work or casual occasions.",
    features: ["100% Cotton", "Button-Down", "Classic Fit", "Versatile"],
    badge: null
  },
  {
    id: 10,
    name: "Men's Slim Fit Chinos",
    price: 6995.00,
    originalPrice: null,
    images: [
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=400&h=600&fit=crop"
    ],
    category: "men",
    subcategory: "pants",
    sizes: ["28", "30", "32", "34", "36"],
    colors: ["Khaki", "Navy", "Black"],
    inStock: true,
    rating: 4.4,
    reviews: 203,
    description: "Comfortable slim fit chinos in premium fabric. Perfect for smart casual looks.",
    features: ["Slim Fit", "Premium Fabric", "Comfortable", "Versatile"],
    badge: null
  }
];

/**
 * Get products by category
 */
export const getProductsByCategory = (category) => {
  return products.filter(product => product.category === category);
};

/**
 * Get products by subcategory
 */
export const getProductsBySubcategory = (subcategory) => {
  return products.filter(product => product.subcategory === subcategory);
};

/**
 * Get product by ID
 */
export const getProductById = (id) => {
  return products.find(product => product.id === parseInt(id));
};

/**
 * Search products
 */
export const searchProducts = (query) => {
  const lowerQuery = query.toLowerCase();
  return products.filter(product =>
    product.name.toLowerCase().includes(lowerQuery) ||
    product.description.toLowerCase().includes(lowerQuery)
  );
};

/**
 * Get featured products
 */
export const getFeaturedProducts = () => {
  return products.filter(product => product.badge === "New" || product.badge === "Sale").slice(0, 4);
};

/**
 * Get best selling products
 */
export const getBestSellingProducts = () => {
  return [...products]
    .sort((a, b) => b.reviews - a.reviews)
    .slice(0, 4);
};

