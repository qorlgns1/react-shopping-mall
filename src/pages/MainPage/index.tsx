import { axiosGetProducts } from '../../apis/itemApi';
import Carousel from '../../components/Carousel';
import Footer from '../../components/common/Footer';
import BasicHeader from '../../components/header/BasicHeader';
import ItemList from '../../components/ItemList';
import { useQuery, useInfiniteQuery } from '@tanstack/react-query';
import { useInView } from 'react-intersection-observer';
import { AxiosError } from 'axios';
import React, { useEffect } from 'react';
import SkeletonItem from '../../components/ItemList/SkeletonItem';
import Item from '../../components/ItemList/Item';
import { ItemType } from '../../components/ItemList/Item/style';

export default function MainPage() {
  const { ref, inView } = useInView();
  const { status, data, fetchNextPage, isFetchingNextPage } = useInfiniteQuery<
    any,
    AxiosError
  >(['axiosGetProducts'], ({ pageParam = 1 }) => axiosGetProducts(pageParam), {
    getNextPageParam: (lastPage) => {
      // console.log('lastPagelastPage', lastPage);
      return !lastPage.isLast ? lastPage.nextPage : undefined;
    },
  });

  useEffect(() => {
    if (inView) fetchNextPage();
  }, [inView]);

  return (
    <>
      <BasicHeader />
      <Carousel />
      <ItemList>
        {status === 'loading'
          ? new Array(15).fill(0).map((_, i) => <SkeletonItem key={i} />)
          : data?.pages.map((page) =>
              page.results.map((itemInfo: ItemType) => (
                <Item key={itemInfo.product_id} itemInfo={itemInfo} />
              )),
            )}

        {isFetchingNextPage ? (
          new Array(15).fill(0).map((_, i) => <SkeletonItem key={i} />)
        ) : (
          <div ref={ref}></div>
        )}
      </ItemList>
      <Footer />
    </>
  );
}
