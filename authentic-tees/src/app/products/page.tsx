import ProductCard from '@/components/ProductCard';
import { sampleProducts } from '@/lib/sample-data';
import { Product } from '@/lib/types'; // Import Product type

export default function ProductsPage() {
  // In a real app, you'd fetch products from an API
  const products: Product[] = sampleProducts;

  return (
    <div className="bg-gray-50 min-h-screen">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-800">Our Collection</h1>
          <p className="text-gray-600 mt-1">Discover the latest in authentic streetwear.</p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Filter Section Placeholder */}
        <section aria-labelledby="filter-heading" className="mb-8 p-6 bg-white rounded-lg shadow">
          <h2 id="filter-heading" className="text-xl font-semibold text-gray-700 mb-4">
            Filter Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {/* Size Filter Placeholder */}
            <div>
              <label htmlFor="size-filter" className="block text-sm font-medium text-gray-700 mb-1">
                Size
              </label>
              <select
                id="size-filter"
                name="size"
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                defaultValue=""
              >
                <option value="">All Sizes</option>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
              </select>
            </div>

            {/* Color Filter Placeholder */}
            <div>
              <label htmlFor="color-filter" className="block text-sm font-medium text-gray-700 mb-1">
                Color
              </label>
              <select
                id="color-filter"
                name="color"
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                defaultValue=""
              >
                <option value="">All Colors</option>
                <option value="Black">Black</option>
                <option value="White">White</option>
                <option value="Navy">Navy</option>
                <option value="Charcoal">Charcoal</option>
                {/* Add more colors as needed */}
              </select>
            </div>

            {/* Price Range Filter Placeholder */}
            <div>
              <label htmlFor="price-filter" className="block text-sm font-medium text-gray-700 mb-1">
                Price Range
              </label>
              {/* This could be a slider or min/max inputs in a real app */}
              <input
                type="text"
                id="price-filter"
                name="price"
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                placeholder="e.g., $0 - $50"
              />
            </div>

            <button className="mt-6 sm:mt-auto sm:self-end px-6 py-2 bg-indigo-600 text-white font-semibold rounded-md shadow-sm hover:bg-indigo-700 transition duration-300">
              Apply Filters
            </button>
          </div>
        </section>

        {/* Product Grid */}
        {products.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-xl text-gray-500">No products found.</p>
            {/* Optionally, suggest adjusting filters or link to homepage */}
          </div>
        )}
      </main>
    </div>
  );
}
