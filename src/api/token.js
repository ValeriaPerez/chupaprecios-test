import useSWR from 'swr';
import { useMemo } from 'react';
// utils
import { _token, endpoints } from '../utils/axios';

export function _getToken() {
  let URL = `${endpoints.token}`;
  const { tokenData, isLoading, error } = useSWR(URL, _token);

  console.log('tokenData', tokenData);

  const memoizedValueToken = useMemo(
    () => ({
      token: (tokenData || ''),
      tokenLoading: isLoading,
      tokenError: error,
      tokenEmpty: !isLoading && !'',
    }),
    [tokenData, isLoading, error]
  );

  return memoizedValueToken;
}