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

  // For hash-link like navigation and highlighting
  React.useEffect(() => {
    window.location.hash = "#" + encodeURIComponent(currentCategory.categoryName.replace(/\s+/g, '').toLowerCase());
  }, [currentCategory.categoryName]);

  return (
    <div className=" font-poppins  min-h-screen">
      <ProductsHeader />

      {/* Improved Category Bar for 10 Categories */}
      <div className="w-full flex justify-center my-10 ">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 gap-4 min-w-max">
          {products.map((cat, idx) => {
            const isActive = selectedCategory === cat.categoryId;
            const hash = "#" + encodeURIComponent(cat.categoryName.replace(/\s+/g, '').toLowerCase());
            return (
              <a
                key={cat.categoryId}
                href={hash}
                onClick={(e) => {
                  e.preventDefault();
                  setSelectedCategory(cat.categoryId);
                  window.location.hash = hash;
                }}
                className={`flex items-center justify-center px-5 py-3 rounded-full border transition-all duration-150 min-w-[130px] font-medium text-sm sm:text-base cursor-pointer text-center whitespace-nowrap
                  ${
                    isActive
                      ? `${categoryColors[idx % categoryColors.length]} font-bold shadow-lg border-2 scale-105`
                      : `bg-white text-gray-900 border border-gray-200 font-medium hover:bg-gray-100 hover:text-blue-900`
                  }
                `}
                style={{ textDecoration: "none" }}
                tabIndex={0}
              >
                {cat.categoryName}
              </a>
            );
          })}
        </div>
      </div>
 

      <div
        id={currentCategory.categoryName.replace(/\s+/g, '').toLowerCase()}
        className="bg-white mx-auto mb-10 px-5 py-9 md:px-8 md:py-10"
      >
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
                  <div className="flex items-center gap-2 rounded bg-violet-50 px-3 py-1 text-xs font-semibold">
                    <span className="mr-1 text-violet-700">Color:</span>
                    {Array.isArray(prod.color)
                      ? prod.color.map((color, i) => (
                          <span key={color + i} className="flex items-center gap-1">
                            <span
                              className="inline-block w-3 h-3 rounded-full border border-gray-400"
                              style={{
                                backgroundColor:
                                  color.toLowerCase() === "grey"
                                    ? "#A3A3A3"
                                    : color.toLowerCase() === "gray"
                                    ? "#A3A3A3"
                                    : color.toLowerCase() === "white"
                                    ? "#fff"
                                    : color.toLowerCase() === "red"
                                    ? "#EF4444"
                                    : color.toLowerCase() === "blue"
                                    ? "#3B82F6"
                                    : color.toLowerCase() === "yellow"
                                    ? "#FACC15"
                                    : color.toLowerCase() === "black"
                                    ? "#000"
                                    : color // fallback
                              }}
                              title={color}
                            />
                            <span className="capitalize text-gray-800">{color}</span>
                            {i < prod.color.length - 1 && <span className="text-violet-400">,</span>}
                          </span>
                        ))
                      : (
                        <span className="flex items-center gap-1">
                          <span
                            className="inline-block w-3 h-3 rounded-full border border-gray-400"
                            style={{
                              backgroundColor:
                                prod.color.toLowerCase() === "grey"
                                  ? "#A3A3A3"
                                  : prod.color.toLowerCase() === "gray"
                                  ? "#A3A3A3"
                                  : prod.color.toLowerCase() === "white"
                                  ? "#fff"
                                  : prod.color.toLowerCase() === "red"
                                  ? "#EF4444"
                                  : prod.color.toLowerCase() === "blue"
                                  ? "#3B82F6"
                                  : prod.color.toLowerCase() === "yellow"
                                  ? "#FACC15"
                                  : prod.color.toLowerCase() === "black"
                                  ? "#000"
                                  : prod.color
                            }}
                            title={prod.color}
                          />
                          <span className="capitalize text-gray-800">{prod.color}</span>
                        </span>
                      )
                    }
                  </div>
                )}
         
                {prod.groutType && (
                  <div className="rounded bg-purple-100 text-purple-600 px-3 py-1 text-xs font-semibold">
                    {prod.groutType}
                  </div>
                )}
              </div>
              {/* Price and Minimum Order */}
              {/* <div className="mb-2">
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
              </div> */}
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
                <div className="text-gray-700 text-xs mt-1">
                  {prod.description && (
                    <div className="mt-2 text-[13px] text-gray-800">
                      <strong>Description:</strong> {prod.description}
                    </div>
                  )}
                </div>
              </div>
         
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;