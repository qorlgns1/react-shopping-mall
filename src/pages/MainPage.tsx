import React, { useEffect, useState } from 'react';
import { axiosGetItemList } from '../apis/itemApi';
import Carousel from '../components/Carousel';
import BasicHeader from '../components/header/BasicHeader';
import ItemList from '../components/ItemList';

export default function Main() {
  const [isLoading, setIsLoading] = useState(false);
  const [itemList, setItemList] = useState<[]>([]);

  const getItemList = async () => {
    try {
      const data = await axiosGetItemList();
      setItemList(data);
      setIsLoading(true);
    } catch (err) {
      setItemList([]);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    // 스켈레톤 UI 테스트용
    // new Promise(() => {
    //   setTimeout(() => {
    // getItemList();
    //   }, 3000);
    // });

    getItemList();
  }, []);

  return (
    <>
      <BasicHeader />
      <Carousel />
      <ItemList isLoading={isLoading} itemList={itemList} />
    </>
  );
}
