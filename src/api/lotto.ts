import apiClient from './axios';
import type {
  LottoResponse,
  DH720LottoResponse,
  GetNumbersByRangeStatisticsRequest,
  GetNumbersByRangeStatisticsResponse,
  PostNumbersByRangeGenerationRequest,
  PostNumbersByRangeGenerationResponse,
  GetNumbersByOverdueStatisticsRequest,
  GetNumbersByOverdueStatisticsResponse,
  AppearanceCountBasedNumberGenerationRequest,
  AppearanceCountBasedNumberGenerationResponse,
} from '@/types/lotto';

export const getWinningNumbers = async (): Promise<LottoResponse> => {
  const { data } = await apiClient.get('/api/data/lotto/winning-numbers');
  return data;
};

export const getDH720WinningNumbers = async (): Promise<DH720LottoResponse> => {
  const { data } = await apiClient.get('/api/data/lotto/dh720/winning-numbers/latest');
  return data;
};

export const getNumbersByRangeStatistics = async (
  params: GetNumbersByRangeStatisticsRequest,
): Promise<GetNumbersByRangeStatisticsResponse> => {
  const { data } = await apiClient.get('/api/data/lotto/numbers/advanced-generation/numbers-by-range', { params });
  return data;
};

export const postNumbersByRangeGeneration = async (
  body: PostNumbersByRangeGenerationRequest,
): Promise<PostNumbersByRangeGenerationResponse> => {
  const { data } = await apiClient.post('/api/data/lotto/numbers/advanced-generation/numbers-by-range', body);
  return data;
};

export const getNumbersByOverdueStatistics = async (
  params: GetNumbersByOverdueStatisticsRequest,
): Promise<GetNumbersByOverdueStatisticsResponse> => {
  const { data } = await apiClient.get('/api/data/lotto/numbers/advanced-generation/numbers-by-overdue', { params });
  return data;
};

export const postNumbersByOverdueGeneration = async (
  body: { startDate: string; endDate: string; overdueNumberCount: number; includeBonusNumber: boolean },
): Promise<{ success: boolean; data: number[][]; message: string; timestamp: string }> => {
  const { data } = await apiClient.post('/api/data/lotto/numbers/advanced-generation/numbers-by-overdue', body);
  return data;
};

export const generateAppearanceCountBasedNumber = async (
  body: AppearanceCountBasedNumberGenerationRequest,
): Promise<AppearanceCountBasedNumberGenerationResponse> => {
  const { data } = await apiClient.post('/api/data/lotto/numbers/advanced-generation/appearance-count-based', body);
  return data;
};
