import { create } from 'zustand';
import type { LottoNumberSetV1 } from '@/types/lotto';

const STORAGE_KEY = 'my-lotto-numbers';

interface MyLottoNumbersState {
  myLottoNumbers: LottoNumberSetV1[];
  isInitialized: boolean;
  initialize: () => void;
  addMyLottoNumber: (lottoNumber: LottoNumberSetV1) => void;
  deleteMyLottoNumbers: (ids: string[]) => void;
  toggleFavorite: (id: string) => void;
}

const saveToStorage = (numbers: LottoNumberSetV1[]) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(numbers));
  }
};

const useMyLottoNumbersStore = create<MyLottoNumbersState>((set, get) => ({
  myLottoNumbers: [],
  isInitialized: false,

  initialize: () => {
    if (typeof window === 'undefined') return;
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        set({ myLottoNumbers: JSON.parse(stored), isInitialized: true });
      } else {
        set({ isInitialized: true });
      }
    } catch {
      set({ isInitialized: true });
    }
  },

  addMyLottoNumber: (lottoNumber) => {
    const updated = [lottoNumber, ...get().myLottoNumbers];
    saveToStorage(updated);
    set({ myLottoNumbers: updated });
  },

  deleteMyLottoNumbers: (ids) => {
    const updated = get().myLottoNumbers.filter((n) => !ids.includes(n.id));
    saveToStorage(updated);
    set({ myLottoNumbers: updated });
  },

  toggleFavorite: (id) => {
    const updated = get().myLottoNumbers.map((n) =>
      n.id === id ? { ...n, isFavorite: !n.isFavorite } : n,
    );
    saveToStorage(updated);
    set({ myLottoNumbers: updated });
  },
}));

export default useMyLottoNumbersStore;
