import { useEffect, useState } from 'react';
import CartHeader from './CartHeader';
import CartItem from './CartItem';
import { useRecoilValue } from 'recoil';
import { shoppingCartAtom } from '../../atoms';
import { axiosGetProduct } from '../../apis/itemApi';
import SkeletonCartItem from './SkeletonCartItem';
import { CartList, Title, Wrapper } from './style';

const getProductInfo = async (shoppingCartInfo: any) => {
  const cartList = [];
  for (const productId in shoppingCartInfo) {
    const productInfo = await axiosGetProduct(parseInt(productId));
    const productCount = shoppingCartInfo[productId];
    cartList.push({ ...productInfo, count: productCount });
  }
  return cartList;
};

export default function ShoppingCart() {
  const [isLoding, setIsLoding] = useState(false);
  const [shoppingCartList, setShoppingCartList] = useState([]);
  const savedShoppingCartInfo = useRecoilValue(shoppingCartAtom);

  useEffect(() => {
    getProductInfo(savedShoppingCartInfo).then((cartList: any) => {
      setShoppingCartList(cartList);
      setIsLoding(true);
    });
  }, []);

  return (
    <Wrapper>
      <Title children='장바구니' />
      <CartHeader />
      <CartList>
        {isLoding
          ? shoppingCartList.map((product: any, i) => (
              <CartItem key={product?.product_id} item={product} />
            ))
          : new Array(5).fill(0).map((_, i) => <SkeletonCartItem key={i} />)}
      </CartList>
    </Wrapper>
  );
}
