import { useQuery } from '@tanstack/react-query';
import { getWinningNumbers } from '@/api/lotto';
import type { LottoResponse } from '@/types/lotto';

export const useGetWinningNumberInfoQuery = () => {
  return useQuery<LottoResponse>({
    queryKey: ['winningNumber'],
    queryFn: getWinningNumbers,
    staleTime: 1000 * 60 * 5,
  });
};
