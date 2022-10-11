import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { axiosGetItemList } from '../apis/itemApi';
import Carousel from '../components/Carousel';
import BasicHeader from '../components/header/BasicHeader';
import ItemList from '../components/ItemList';

export default function Main() {
  const [isLoading, setIsLoading] = useState(false);
  const [itemList, setItemList] = useState([]);

  useEffect(() => {
    axiosGetItemList()
      .then((data) => {
        setIsLoading(true);
        setItemList(data);
      })
      .catch(() => {
        setIsLoading(false);
        setItemList([]);
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
