export interface LottoResponse {
  success: boolean;
  data: LottoData;
  message: string;
  timestamp: string;
}

export interface LottoData {
  id: string;
  round: number;
  winningNumbers: number[];
  bonusNumber: number;
  result: LottoResult[];
}

export interface LottoResult {
  rank: number;
  totalWinnerCount: number;
  totalPrizeAmount: number;
  perPersonPrizeAmount: number;
}

export interface DH720LottoResponse {
  success: boolean;
  data: DH720LottoData;
  message: string;
  timestamp: string;
}

export interface DH720LottoData {
  id: string;
  round: number;
  drawDate: string;
  firstPrizeGroup: number;
  firstPrizeNumbers: number[];
  firstPrizeAmount: number;
  firstPrizeYears: number;
  bonusNumbers: number[];
  bonusAmount: number;
  bonusYears: number;
  createdAt: string;
}

export interface LottoNumberSetV1 {
  version: string;
  id: string;
  title: string;
  isFavorite: boolean;
  numbers: number[][];
  createdAt: string;
  updatedAt: string;
}

export type DateRangeOption = number | 'all' | '3months' | '6months' | 'custom';

export interface GetNumbersByRangeStatisticsRequest {
  startDate: string;
  endDate: string;
  includeBonusNumber: boolean;
}

export interface RangeStatistics {
  range: string;
  count: number;
  numbers: number[];
}

export interface GetNumbersByRangeStatisticsResponse {
  success: boolean;
  data: RangeStatistics[];
  message: string;
  timestamp: string;
}

export interface PostNumbersByRangeGenerationRequest {
  startDate: string;
  endDate: string;
  includeBonusNumber: boolean;
  rangeCounts: Record<string, number>;
  selectionMethod: 'RANDOM' | 'WEIGHTED_BY_FREQUENCY' | 'PRIORITIZE_UNAPPEARED';
}

export interface PostNumbersByRangeGenerationResponse {
  success: boolean;
  data: number[];
  message: string;
  timestamp: string;
}

export interface GetNumbersByOverdueStatisticsRequest {
  startDate: string;
  endDate: string;
  includeBonusNumber: boolean;
}

export interface GetNumbersByOverdueStatisticsResponse {
  success: boolean;
  data: { number: number; overdueDays: number }[];
  message: string;
  timestamp: string;
}

export interface AppearanceCountBasedNumberGenerationRequest {
  highFrequencyNumberWeight: number;
  lowFrequencyNumberRatio: number;
  startDate: string;
  endDate: string;
  includeBonusNumber: boolean;
}

export interface AppearanceCountBasedNumberGenerationResponse {
  success: boolean;
  data: number[][];
  message: string;
  timestamp: string;
}
