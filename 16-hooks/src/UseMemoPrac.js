// - 상품 목록을 보여주는 컴포넌트 생성.
// - 사용자가 입력한 가격보다 낮은 상품만 **“필터링”하여** 보여주기.
// - 필터링 로직이 불필요하게 자주 실행되지 않도록 useMemo를 사용해 최적화하기.

import React, { useState, useMemo } from 'react';

const ProductFilter = () => {
  // 상품 가격 제한 상태 관리
  const [priceLimit, setPriceLimit] = useState();

  const products = [
    { name: 'Product A', price: 30 },
    { name: 'Product B', price: 50 },
    { name: 'Product C', price: 70 },
  ];

  const filteredProducts = useMemo(() => {
    // 여기에 필터링 로직 작성
    return products.filter((products) => products.price <= priceLimit);
  }, [priceLimit]);

  return (
    <div>
      <h2>Product Filter</h2>
      <input
        type="number"
        value={priceLimit}
        placeholder="Enter price limit"
        onChange={(e) => {
          setPriceLimit(e.target.value);
        }}
      />
      {/* <ul>// 상품 목록 나열 로직 작성</ul> */}
      <ul>
        {filteredProducts.map((products, idx) => {
          return (
            <li key={idx}>
              {products.name} - ${products.price}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ProductFilter;
