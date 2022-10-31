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
  width: 380px;
  font-weight: 400;
  cursor: pointer;

  @media screen and (max-width: 767px) {
    width: 180px;
  }
`;

const ItemImage = styled.img`
  margin-bottom: 16px;
  height: 380px;
  border: 1px solid #c4c4c4;
  border-radius: 10px;

  @media screen and (max-width: 767px) {
    height: 180px;
  }
`;

const ItemStoreName = styled.span`
  margin-bottom: 10px;
  font-size: 16px;
  color: #767676;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const ItemProductName = styled.span`
  margin-bottom: 10px;
  font-size: 18px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const ItemPrice = styled.span`
  font-weight: 700;
  font-size: 24px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  @media screen and (max-width: 767px) {
    font-size: 20px;
  }
`;

const ItemPriceSuffix = styled.span`
  padding-left: 2px;
  font-size: 16px;
  line-height: 20px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export {
  Wrapper,
  ItemImage,
  ItemStoreName,
  ItemProductName,
  ItemPrice,
  ItemPriceSuffix,
};
