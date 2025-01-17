import React from 'react';
import { useParams } from 'react-router-dom';
import { productInfos } from '../components/ProductList';

export default function ProductDetailPage() {
  const { productId } = useParams(); // :productId 가져온 것!
  console.log('파라미터 값: ', productId); // '클릭한 ID 값'
  console.log('파라미터 type: ', typeof productId); // string

  /**
   * #5. useParams
   * - URL 경로에서 동적 파라미터 값을 가져옴 (추출)
   * - 다중 파라미터는 객체 형태로 반환
   * - 항상 "문자열"로 반환
   */

  console.log('상품 Data: ', productInfos);
  const targetProduct = productInfos[Number(productId) - 1];
  // 타겟한 상품이랑 인덱스 번호 일치 시키는 과정
  // 숫자 값으로 처리하기 위해 형변환

  console.log(targetProduct);
  const { id, name, email, body } = targetProduct;

  return (
    <div>
      <h1>ProductDetailPage</h1>
      <ul>
        <li>상품 번호: {id}</li>
        <li>상품명: {name}</li>
        <li>판매자: {email}</li>
        <li>상세설명: {body}</li>
      </ul>
    </div>
  );
}
