import useSWR from 'swr';
import { useMemo } from 'react';
// utils
import { fetcher, endpoints } from '../utils/axios';

export function useGetProducts(search, store, page) {
  console.log('search', search);
  const searchFind = search.length === 0 ? 'perro' : search;
  let URL = `${endpoints.products}/?search=${searchFind}&selected_store=${store}&page_num=${page}`;
  const { data, isLoading, error } = useSWR(URL, fetcher);

  const memoizedValueProducts = useMemo(
    () => ({
      products: (data && data[0]?.data?.items) || [],
      productsStore: (data && data[0]?.data?.selected_store) || '',
      productsPagination: (data && data[0]?.data?.pagination) || '',
      productsLoading: isLoading,
      productsError: error,
      productsEmpty: !isLoading && !(data && data[0]?.data?.items),
    }),
    [data, isLoading, error]
  );

  return memoizedValueProducts;
}