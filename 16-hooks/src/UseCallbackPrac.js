// - 간단한 쇼핑 카트 애플리케이션 만들기.
// - 사용자는 상품을 선택해 장바구니에 **추가**하거나, **삭제** 할 수 있다.
// - **useCallback**을 사용해, 상품 추가 및 제거 함수가 불필요하게 다시 생성되지 않도록 최적화 하기.
// - 함수 참조값이 변경되지 않는지 확인하는 기능 만들기.

import React, { useState, useCallback, useEffect } from 'react';

const products = [
  { id: 1, name: 'Apple' },
  { id: 2, name: 'Banana' },
  { id: 3, name: 'Cherry' },
];

const ShoppingCartApp = () => {
  const [cart, setCart] = useState([]);

  const addToCart = useCallback((product) => {
    // 장바구니에 상품 추가 로직 작성
    console.log(product);
    setCart((prev) => [
      ...prev,
      {
        id: product.id,
        name: product.name,
      },
    ]);
  }, []);
  console.log(cart);

  const removeFromCart = useCallback(
    (productId) => {
      // 장바구니에서 상품 제거 로직 작성
      setCart((prev) =>
        prev.filter((el) => {
          return el.id !== productId;
        })
      );
    },
    [cart]
  );

  // addToCart 참조값 변경 여부 확인 [useEffect]

  // removeFromCart 참조값 변경 여부 확인 [useEffect]

  return (
    <div>
      <h2>Products</h2>
      <ul>
        {products.map((products, idx) => {
          return (
            <li key={idx}>
              {products.name}
              <button
                onClick={() => {
                  addToCart(products);
                }}
              >
                Add to Cart
              </button>
            </li>
          );
        })}
      </ul>

      <h2>Shopping Cart</h2>
      <ul>
        {cart.map((cart, idx) => {
          return (
            <li key={idx}>
              {cart.name}
              <button
                onClick={() => {
                  removeFromCart(cart.id);
                }}
              >
                Remove
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ShoppingCartApp;
