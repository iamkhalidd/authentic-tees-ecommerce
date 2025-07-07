import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@/lib/types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Link href={`/products/${product.id}`} className="group block border rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-white">
      <div className="relative w-full h-64 sm:h-72 md:h-80">
        <Image
          src={product.images[0] || '/next.svg'} // Fallback to next.svg if no image
          alt={product.name}
          fill
          style={{ objectFit: 'cover' }}
          className="group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-1 truncate group-hover:text-indigo-600">
          {product.name}
        </h3>
        <p className="text-sm text-gray-600 mb-2 h-10 overflow-hidden">
          {product.description.substring(0, 60)}...
        </p>
        <div className="flex justify-between items-center mb-2">
          <p className="text-xl font-bold text-gray-900">${product.price.toFixed(2)}</p>
          {product.colors && product.colors.length > 0 && (
            <div className="flex space-x-1">
              {product.colors.slice(0, 3).map((color) => (
                <span
                  key={color}
                  className="block w-4 h-4 rounded-full border border-gray-300"
                  style={{ backgroundColor: color.toLowerCase() }}
                  title={color}
                />
              ))}
              {product.colors.length > 3 && (
                <span className="text-xs text-gray-500 self-end">+{product.colors.length - 3}</span>
              )}
            </div>
          )}
        </div>
        <button className="w-full mt-2 px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors duration-300">
          View Details
        </button>
      </div>
    </Link>
  );
};

export default ProductCard;
