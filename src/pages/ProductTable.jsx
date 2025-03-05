import React from "react";
import { ShoppingCartIcon, StarIcon } from "@heroicons/react/outline"; // Importing icons

const ProductTable = () => {
  // Dummy Data for the table
  const products = [
    {
      id: 1,
      name: "Camera Mi 360",
      soldAmount: 432,
      unitPrice: 120,
      revenue: 51840,
      rating: 4.81,
    },
    {
      id: 2,
      name: "Massage Gun",
      soldAmount: 120,
      unitPrice: 112,
      revenue: 25440,
      rating: 3.44,
    },
    {
      id: 3,
      name: "Vacuum-Mop 2 Pro",
      soldAmount: 221,
      unitPrice: 320,
      revenue: 15123,
      rating: 3.22,
    },
    {
      id: 4, // Fixed duplicate id
      name: "Vacuum-Mop 2",
      soldAmount: 223,
      unitPrice: 234,
      revenue: 32812,
      rating: 3.0,
    },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto p-6">
      <div className="flex justify-between">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Top Products
        </h2>
        <p className="border-red-300 rounded-md">Full results</p>
      </div>
      <div className="overflow-x-auto bg-white rounded-lg shadow-lg">
        <table className="min-w-full table-auto">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-10 py-3 text-left text-sm font-semibold text-gray-600">
                Product
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                Sold Amount
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                Unit Price
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                Revenue
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                Rating
              </th>
            </tr>
          </thead>

          <tbody>
            {products.map((product) => (
              <tr key={product.id} className="border-b hover:bg-gray-50">
                <td className="px-6 py-4 text-sm font-medium text-gray-800 flex items-center">
                  {/* Product Icon */}
                  <ShoppingCartIcon className="h-5 w-5 text-gray-500 mr-2" />
                  {product.name}
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">
                  {product.soldAmount}
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">
                  ${product.unitPrice.toFixed(2)}
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">
                  ${product.revenue.toFixed(2)}
                </td>
                <td className="px-6 py-4 text-sm text-gray-600 flex items-center">
                  {/* Rating Icon */}
                  <StarIcon className="h-5 w-5 text-yellow-500 mr-1" />
                  {product.rating}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductTable;
