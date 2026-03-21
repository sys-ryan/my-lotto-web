'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ClipboardList } from 'lucide-react';
import useMyLottoNumbersStore from '@/store/myLottoNumbersStore';
import LottoNumbers from '@/components/LottoNumbers';

export default function MyNumbersPage() {
  const { myLottoNumbers, isInitialized, initialize, deleteMyLottoNumbers, toggleFavorite } =
    useMyLottoNumbersStore();
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());
  const [isSelecting, setIsSelecting] = useState(false);

  useEffect(() => {
    initialize();
  }, [initialize]);

  const toggleSelect = (id: string) => {
    setSelectedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const handleDelete = () => {
    if (selectedIds.size === 0) return;
    if (!confirm(`${selectedIds.size}개의 번호를 삭제하시겠습니까?`)) return;
    deleteMyLottoNumbers(Array.from(selectedIds));
    setSelectedIds(new Set());
    setIsSelecting(false);
  };

  if (!isInitialized) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="animate-spin w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">내 번호</h1>
        <div className="flex items-center gap-2">
          {isSelecting ? (
            <>
              <button
                onClick={handleDelete}
                disabled={selectedIds.size === 0}
                className="text-sm text-red-600 font-medium disabled:opacity-50"
              >
                삭제 ({selectedIds.size})
              </button>
              <button
                onClick={() => {
                  setIsSelecting(false);
                  setSelectedIds(new Set());
                }}
                className="text-sm text-gray-600 font-medium"
              >
                취소
              </button>
            </>
          ) : (
            <>
              {myLottoNumbers.length > 0 && (
                <button
                  onClick={() => setIsSelecting(true)}
                  className="text-sm text-gray-600 font-medium"
                >
                  선택
                </button>
              )}
              <Link
                href="/my-numbers/add"
                className="text-sm text-blue-600 font-medium hover:text-blue-700"
              >
                + 추가
              </Link>
            </>
          )}
        </div>
      </div>

      {myLottoNumbers.length === 0 ? (
        <div className="bg-white rounded-2xl shadow-sm p-12 text-center">
          <ClipboardList className="w-10 h-10 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-500 mb-4">저장된 번호가 없습니다</p>
          <Link
            href="/my-numbers/add"
            className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 transition-colors"
          >
            번호 추가하기
          </Link>
        </div>
      ) : (
        <div className="space-y-3">
          {myLottoNumbers.map((item) => (
            <div key={item.id} className="bg-white rounded-2xl shadow-sm p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  {isSelecting && (
                    <input
                      type="checkbox"
                      checked={selectedIds.has(item.id)}
                      onChange={() => toggleSelect(item.id)}
                      className="rounded border-gray-300"
                    />
                  )}
                  <h3 className="font-medium text-gray-900 text-sm">{item.title}</h3>
                </div>
                <button
                  onClick={() => toggleFavorite(item.id)}
                  className={`text-lg ${item.isFavorite ? 'text-yellow-500' : 'text-gray-300'}`}
                >
                  ★
                </button>
              </div>
              <div className="space-y-2">
                {item.numbers.map((nums, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span className="text-xs text-gray-400 w-5">{String.fromCharCode(65 + i)}</span>
                    <LottoNumbers numbers={nums} size="sm" />
                  </div>
                ))}
              </div>
              <p className="text-xs text-gray-400 mt-2">
                {new Date(item.createdAt).toLocaleDateString('ko-KR')}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
