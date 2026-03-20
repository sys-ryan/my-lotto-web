import { useQuery } from '@tanstack/react-query';
import { getDH720WinningNumbers } from '@/api/lotto';
import type { DH720LottoResponse } from '@/types/lotto';

export const useGetDH720WinningNumberInfoQuery = () => {
  return useQuery<DH720LottoResponse>({
    queryKey: ['dh720WinningNumber'],
    queryFn: getDH720WinningNumbers,
    staleTime: 1000 * 60 * 5,
  });
};
