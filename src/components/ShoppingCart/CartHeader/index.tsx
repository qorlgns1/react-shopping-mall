import React, { useState } from 'react';
import {
  AmountBox,
  CartListHeader,
  CheckBox,
  ProductInfoBox,
  ProductPriceBox,
} from './style';

export default function CartHeader() {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const handleCheckAllClick = () => {
    const checkBoxInputEls = document.querySelectorAll(
      'input[type="checkbox"]',
    );

    checkBoxInputEls.forEach((checkbox: any) => {
      checkbox.checked = !isChecked;
    });

    setIsChecked((prev) => !prev);
  };

  return (
    <CartListHeader>
      <CheckBox>
        <input type='checkbox' id='checkAll' checked={isChecked} readOnly />
        <label htmlFor='checkAll' onClick={handleCheckAllClick} />
      </CheckBox>
      <ProductInfoBox children='상품정보' />
      <AmountBox>수량</AmountBox>
      <ProductPriceBox>상품금액</ProductPriceBox>
    </CartListHeader>
  );
}
