import styled from 'styled-components';

export interface ItemType {
  product_id: number;
  created_at: string;
  updated_at: string;
  product_name: string;
  image: string;
  price: number;
  shipping_method: string;
  shipping_fee: number;
  stock: number;
  product_info: string;
  seller: number;
  store_name: string;
}

const Wrapper = styled.li`
  display: flex;
  flex-direction: column;
`;

const ItemImage = styled.img`
  margin-bottom: 16px;
  width: 380px;
  height: 380px;
  border: 1px solid #c4c4c4;
  border-radius: 10px;
`;

const ItemStoreName = styled.span`
  padding-bottom: 10px;
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: #767676;
`;

const ItemProductName = styled.span`
  padding-bottom: 10px;
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #000000;
`;

const ItemPrice = styled.span`
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;
  color: #000000;
`;

const ItemPriceSuffix = styled.span`
  padding-left: 2px;
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #000000;
`;

export {
  Wrapper,
  ItemImage,
  ItemStoreName,
  ItemProductName,
  ItemPrice,
  ItemPriceSuffix,
};
