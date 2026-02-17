// SYAA Clothing - Crop tops catalog (different types and colors)
// Sample product images: Unsplash (fashion/tops) - high-quality real-style photos
const UNSPLASH = 'https://images.unsplash.com'
const samplePhotos = [
  `${UNSPLASH}/photo-1562157873-818bc0726f68?w=600&q=80`, // white top
  `${UNSPLASH}/photo-1595776613215-fe04b96de91d?w=600&q=80`, // casual top
  `${UNSPLASH}/photo-1618354691373-d851c5c3a990?w=600&q=80`, // fashion
  `${UNSPLASH}/photo-1576566588028-4147f3842f27?w=600&q=80`, // women style
  `${UNSPLASH}/photo-1594938298603-c8148c4dae35?w=600&q=80`, // crop style
  `${UNSPLASH}/photo-1515886657613-9f3515b0c78f?w=600&q=80`, // model top
  `${UNSPLASH}/photo-1509631179647-0177331693ae?w=600&q=80`, // fashion
  `${UNSPLASH}/photo-1523381210434-271e8be1f52b?w=600&q=80`, // clothing
  `${UNSPLASH}/photo-1434389677669-e08b4cac3105?w=600&q=80`, // women
  `${UNSPLASH}/photo-1485230895905-ec40ba36b9bc?w=600&q=80`, // style
  `${UNSPLASH}/photo-1496747611176-843222e1e57c?w=600&q=80`, // outfit
  `${UNSPLASH}/photo-1518611012118-696072aa579a?w=600&q=80`, // top
  `${UNSPLASH}/photo-1502716119720-b23a93e5fe78?w=600&q=80`, // casual
  `${UNSPLASH}/photo-1515886657613-9f3515b0c78f?w=600&q=80`, // model
  `${UNSPLASH}/photo-1539109136881-3be0616acf4b?w=600&q=80`, // women fashion
  `${UNSPLASH}/photo-1519699047748-de8e457a634e?w=600&q=80`, // portrait style
  `${UNSPLASH}/photo-1529139574468-a0fc9d3fb4c5?w=600&q=80`, // casual wear
  `${UNSPLASH}/photo-1515886657613-9f3515b0c78f?w=600&q=80`, // top
]
const sampleImage = (_, index) => samplePhotos[index % samplePhotos.length]

export const productCategories = [
  { id: 'ribbed', name: 'Ribbed Crop' },
  { id: 'oversized', name: 'Oversized Crop' },
  { id: 'fitted', name: 'Fitted Crop' },
  { id: 'wrap', name: 'Wrap Crop' },
  { id: 'halter', name: 'Halter Crop' },
  { id: 'sleeve', name: 'Long Sleeve Crop' },
]

export const products = [
  // Ribbed Crop Tops
  { id: '1', name: 'Ribbed Teal Crop', category: 'ribbed', price: 34.99, color: 'Teal', image: sampleImage(null, 0), description: 'Soft ribbed knit crop top in teal. Perfect for layering or wearing solo.', sizes: ['XS', 'S', 'M', 'L'], bestSeller: true },
  { id: '2', name: 'Ribbed Black Crop', category: 'ribbed', price: 34.99, color: 'Black', image: sampleImage(null, 1), description: 'Classic ribbed crop in black. Timeless and versatile.', sizes: ['XS', 'S', 'M', 'L'], bestSeller: true },
  { id: '3', name: 'Ribbed White Crop', category: 'ribbed', price: 34.99, color: 'White', image: sampleImage(null, 2), description: 'Clean ribbed white crop. Fresh and minimal.', sizes: ['XS', 'S', 'M', 'L'] },
  // Oversized
  { id: '4', name: 'Oversized Teal Crop', category: 'oversized', price: 39.99, color: 'Teal', image: sampleImage(null, 3), description: 'Relaxed oversized crop in teal. Comfort meets style.', sizes: ['S', 'M', 'L', 'XL'], bestSeller: true },
  { id: '5', name: 'Oversized Black Crop', category: 'oversized', price: 39.99, color: 'Black', image: sampleImage(null, 4), description: 'Oversized black crop for a laid-back look.', sizes: ['S', 'M', 'L', 'XL'] },
  { id: '6', name: 'Oversized White Crop', category: 'oversized', price: 39.99, color: 'White', image: sampleImage(null, 5), description: 'Airy white oversized crop. Effortless elegance.', sizes: ['S', 'M', 'L', 'XL'] },
  // Fitted
  { id: '7', name: 'Fitted Teal Crop', category: 'fitted', price: 32.99, color: 'Teal', image: sampleImage(null, 6), description: 'Sleek fitted teal crop. Flattering silhouette.', sizes: ['XS', 'S', 'M', 'L'], bestSeller: true },
  { id: '8', name: 'Fitted Black Crop', category: 'fitted', price: 32.99, color: 'Black', image: sampleImage(null, 7), description: 'Form-fitting black crop. Wardrobe essential.', sizes: ['XS', 'S', 'M', 'L'] },
  { id: '9', name: 'Fitted White Crop', category: 'fitted', price: 32.99, color: 'White', image: sampleImage(null, 8), description: 'Crisp fitted white crop. Clean and chic.', sizes: ['XS', 'S', 'M', 'L'] },
  // Wrap
  { id: '10', name: 'Wrap Teal Crop', category: 'wrap', price: 36.99, color: 'Teal', image: sampleImage(null, 9), description: 'Wrap-front teal crop. Adjustable fit.', sizes: ['S', 'M', 'L'] },
  { id: '11', name: 'Wrap Black Crop', category: 'wrap', price: 36.99, color: 'Black', image: sampleImage(null, 10), description: 'Elegant wrap black crop. Statement piece.', sizes: ['S', 'M', 'L'] },
  { id: '12', name: 'Wrap White Crop', category: 'wrap', price: 36.99, color: 'White', image: sampleImage(null, 11), description: 'Sophisticated wrap white crop.', sizes: ['S', 'M', 'L'] },
  // Halter
  { id: '13', name: 'Halter Teal Crop', category: 'halter', price: 35.99, color: 'Teal', image: sampleImage(null, 12), description: 'Halter neck teal crop. Perfect for summer.', sizes: ['XS', 'S', 'M', 'L'] },
  { id: '14', name: 'Halter Black Crop', category: 'halter', price: 35.99, color: 'Black', image: sampleImage(null, 13), description: 'Classic halter black crop.', sizes: ['XS', 'S', 'M', 'L'] },
  { id: '15', name: 'Halter White Crop', category: 'halter', price: 35.99, color: 'White', image: sampleImage(null, 14), description: 'Fresh halter white crop.', sizes: ['XS', 'S', 'M', 'L'] },
  // Long Sleeve
  { id: '16', name: 'Long Sleeve Teal Crop', category: 'sleeve', price: 42.99, color: 'Teal', image: sampleImage(null, 15), description: 'Long sleeve teal crop. Cozy and stylish.', sizes: ['XS', 'S', 'M', 'L'] },
  { id: '17', name: 'Long Sleeve Black Crop', category: 'sleeve', price: 42.99, color: 'Black', image: sampleImage(null, 16), description: 'Long sleeve black crop. Season staple.', sizes: ['XS', 'S', 'M', 'L'] },
  { id: '18', name: 'Long Sleeve White Crop', category: 'sleeve', price: 42.99, color: 'White', image: sampleImage(null, 17), description: 'Long sleeve white crop. Minimal and warm.', sizes: ['XS', 'S', 'M', 'L'] },
]

export function getProductById(id) {
  return products.find((p) => p.id === id)
}

export function getFeaturedProducts() {
  return products.slice(0, 6)
}

export function getBestSellers() {
  return products.filter((p) => p.bestSeller).slice(0, 6)
}

export function getProductsByCategory(category) {
  if (!category) return products
  return products.filter((p) => p.category === category)
}

export function getProductsByColor(color) {
  if (!color) return products
  return products.filter((p) => p.color.toLowerCase() === color.toLowerCase())
}
