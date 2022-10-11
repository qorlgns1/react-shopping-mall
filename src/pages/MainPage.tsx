import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Carousel from '../components/Carousel';
import BasicHeader from '../components/header/BasicHeader';
import ItemList from '../components/ItemList';

export default function Main() {
  const [isLoading, setIsLoading] = useState(false);
  const [itemList, setItemList] = useState([]);
  useEffect(() => {
    axios
      .get('https://openmarket.weniv.co.kr/products/')
      .then(function ({ data }) {
        setIsLoading(true);
        const { results } = data;
        setItemList(results);
      })
      .catch(function (error) {
        setIsLoading(false);
        console.log(error);
      });
  }, []);

  if (!isLoading) {
    return null;
  }

  return (
    <>
      <BasicHeader />
      <Carousel />
      <ItemList itemList={itemList} />
    </>
  );
}
