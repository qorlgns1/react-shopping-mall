import React from 'react';
import Carousel from '../components/Carousel';
import BasicHeader from '../components/header/BasicHeader';
import ItemList from '../components/ItemList';

export default function Main() {
  return (
    <>
      <BasicHeader />
      <Carousel />
      <ItemList />
    </>
  );
}
