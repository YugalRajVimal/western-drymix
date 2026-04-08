import React, { useState } from 'react';
import productsData from '../Data/products.json';
import { ProductsHeader } from '../Components/Product/ProductsHeader';

const categoryColors = [
  'bg-teal-700 text-white border-teal-700',
  'bg-yellow-200 text-gray-800 border-yellow-300',
  'bg-red-400 text-white border-red-400',
  'bg-orange-300 text-gray-800 border-orange-300',
  'bg-blue-300 text-blue-900 border-blue-300',
  'bg-red-700 text-white border-red-700',
  'bg-emerald-600 text-white border-emerald-600',
  'bg-purple-300 text-purple-900 border-purple-300'
];
const categoryColorMap = [
  'text-teal-700',
  'text-yellow-500',
  'text-red-400',
  'text-orange-400',
  'text-sky-500',
  'text-red-700',
  'text-emerald-600',
  'text-purple-700'
];

function formatMoney(amount, currency = "INR") {
  if (typeof amount === "string") return amount;
  return amount?.toLocaleString('en-IN', { style: "currency", currency }) || '';
}

const ProductsPage = () => {
  const { products } = productsData;
  const [selectedCategory, setSelectedCategory] = useState(products[0].categoryId);

  const currentCategory = products.find(
    (cat) => cat.categoryId === selectedCategory
  );
  const catColorIdx = products.findIndex(
    (c) => c.categoryId === selectedCategory
  ) % categoryColors.length;

  return (
    <div className=" font-poppins  min-h-screen">
        <ProductsHeader />


      <div className="flex flex-wrap gap-4 justify-center my-10">
        {products.map((cat, idx) => {
          const isActive = selectedCategory === cat.categoryId;
          return (
            <button
              key={cat.categoryId}
              onClick={() => setSelectedCategory(cat.categoryId)}
              className={`px-6 py-3 rounded-full border transition-all duration-150 min-w-[120px] font-medium text-base md:text-lg ${
                isActive
                  ? `${categoryColors[idx % categoryColors.length]} font-bold shadow-md border-2`
                  : `bg-white text-gray-800 border border-gray-300 font-medium hover:bg-gray-100`
              }`}
            >
              {cat.categoryName}
            </button>
          );
        })}
      </div>

      <div className="bg-white mx-auto mb-10 px-5 py-9 md:px-8 md:py-10">
        <h2
          className={`font-semibold text-2xl md:text-3xl mb-2 ${categoryColorMap[catColorIdx]}`}
        >
          {currentCategory.categoryName}
        </h2>
        <p className="text-gray-600 text-base md:text-lg mb-10 max-w-2xl">
          {currentCategory.categoryDescription}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
          {currentCategory.subProducts.map((prod, idx) => (
            <div
              key={prod.productId}
              className="bg-blue-50 rounded-xl shadow-md px-6 py-7 min-h-[320px] flex flex-col relative"
            >
              {/* Brand Pill */}
              <div className="absolute right-5 top-5 bg-blue-100 text-blue-900 rounded px-3 py-1.5 text-xs font-semibold tracking-wide uppercase">
                {prod.brand}
              </div>
              <h3 className="text-base font-bold text-gray-800 mt-2 mb-2">{prod.productName}</h3>
              <div className="mb-2 text-gray-600">{prod.description}</div>
              <div className="flex flex-wrap gap-3 mb-3">
                {prod.packaging && (
                  <div className="rounded bg-yellow-100 text-yellow-900 px-3 py-1 text-xs font-semibold">
                    {prod.packaging.size} {prod.packaging.unit}
                  </div>
                )}
                {prod.gradeType && (
                  <div className="rounded bg-green-100 text-green-700 px-3 py-1 text-xs font-semibold">
                    Grade {prod.gradeType}
                  </div>
                )}
                {prod.color && (
                  <div className="rounded bg-violet-100 text-violet-700 px-3 py-1 text-xs font-semibold">
                    {typeof prod.color === "string"
                      ? prod.color
                      : prod.color.join(", ")}
                  </div>
                )}
                {prod.groutType && (
                  <div className="rounded bg-purple-100 text-purple-600 px-3 py-1 text-xs font-semibold">
                    {prod.groutType}
                  </div>
                )}
              </div>
              {/* Price and Minimum Order */}
              <div className="mb-2">
                <span className="text-blue-900 font-bold text-lg mr-2">
                  {prod.price && formatMoney(prod.price.amount, prod.price.currency)}
                  {prod.price && prod.price.unit && (
                    <span className="text-blue-400 font-medium text-sm ml-1">
                      / {prod.price.unit}
                    </span>
                  )}
                </span>
                {prod.minimumOrderQuantity && (
                  <span className="ml-3 text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded font-semibold">
                    MOQ: {prod.minimumOrderQuantity}
                  </span>
                )}
              </div>
              {/* Features & Tags */}
              {(prod.specialFeatures?.length > 0 || prod.features?.length > 0) && (
                <div className="mb-2">
                  <span className="font-bold text-green-800 mr-2">Features:</span>
                  {(prod.specialFeatures || []).map((f, i) => (
                    <span
                      key={`sf-${i}`}
                      className="text-xs bg-emerald-50 text-emerald-700 rounded px-2 py-1 mr-1 mb-1 inline-block"
                    >
                      {f}
                    </span>
                  ))}
                  {(prod.features || []).map((f, i) => (
                    <span
                      key={`f-${i}`}
                      className="text-xs bg-emerald-50 text-emerald-700 rounded px-2 py-1 mr-1 mb-1 inline-block"
                    >
                      {f}
                    </span>
                  ))}
                </div>
              )}
              {prod.suitableForTiles && prod.suitableForTiles.length > 0 && (
                <div className="text-gray-700 text-xs my-1">
                  <strong>For Tiles:</strong> {prod.suitableForTiles.join(", ")}
                </div>
              )}
              {prod.applicationArea && prod.applicationArea.length > 0 && (
                <div className="text-blue-900 text-xs my-1">
                  <strong>Areas:</strong> {prod.applicationArea.join(", ")}
                </div>
              )}
              {prod.usageApplication && prod.usageApplication.length > 0 && (
                <div className="text-blue-900 text-xs my-1">
                  <strong>Applications:</strong> {prod.usageApplication.join(", ")}
                </div>
              )}
              {prod.stainTypeRemoved && prod.stainTypeRemoved.length > 0 && (
                <div className="text-orange-700 text-xs my-1">
                  <strong>Stain Types:</strong> {prod.stainTypeRemoved.join(", ")}
                </div>
              )}
              {prod.suitableGroutFlow && prod.suitableGroutFlow.length > 0 && (
                <div className="text-gray-700 text-xs my-1">
                  <strong>Grout Flow:</strong> {prod.suitableGroutFlow.join(", ")}
                </div>
              )}
              {/* More Details */}
              <div className="mt-2">
                <details>
                  <summary className="cursor-pointer text-blue-600 font-medium text-sm py-1">
                    More Details
                  </summary>
                  <div className="text-gray-700 text-xs mt-1">
                    {prod.specifications && (
                      <div className="mb-1">
                        <strong>Specs:</strong>{" "}
                        {Object.entries(prod.specifications)
                          .filter(([k, v]) => v && v !== true)
                          .map(([k, v], i) => (
                            <span key={i} className="mr-2 text-gray-700">
                              <b>
                                {k.replace(/([A-Z])/g, ' $1')}
                              </b>: {typeof v === 'boolean' ? (v ? 'Yes' : 'No') : v}
                            </span>
                          ))}
                      </div>
                    )}
                    {prod.description && (
                      <div className="mt-2 text-[13px] text-gray-800">
                        <strong>Description:</strong> {prod.description}
                      </div>
                    )}
                  </div>
                </details>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;