import useSWR from 'swr';
import { useMemo } from 'react';
// utils
import { fetcher, endpoints } from '../utils/axios';

export function useGetProducts(product) {
  let URL = `${endpoints.products_1}/?search=perro&selected_store=amazon&page_num=1`;
  const { data, isLoading, error } = useSWR(URL, fetcher);

  const memoizedValueProducts = useMemo(
    () => ({
      products: (data && data[0]?.data?.items) || [],
      productsStore: (data && data[0]?.data?.selected_store) || '',
      productsLoading: isLoading,
      productsError: error,
      productsEmpty: !isLoading && !(data && data[0]?.data?.items),
    }),
    [data, isLoading, error]
  );

  return memoizedValueProducts;
}