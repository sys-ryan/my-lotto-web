export const getDateRange = (option: string): { startDate: string; endDate: string } => {
  const now = new Date();
  const endDate = now.toISOString().split('T')[0] + 'T00:00:00Z';
  let startDate: string;

  switch (option) {
    case '3months': {
      const d = new Date(now);
      d.setMonth(d.getMonth() - 3);
      startDate = d.toISOString().split('T')[0] + 'T00:00:00Z';
      break;
    }
    case '6months': {
      const d = new Date(now);
      d.setMonth(d.getMonth() - 6);
      startDate = d.toISOString().split('T')[0] + 'T00:00:00Z';
      break;
    }
    case '12months': {
      const d = new Date(now);
      d.setFullYear(d.getFullYear() - 1);
      startDate = d.toISOString().split('T')[0] + 'T00:00:00Z';
      break;
    }
    case '36months': {
      const d = new Date(now);
      d.setFullYear(d.getFullYear() - 3);
      startDate = d.toISOString().split('T')[0] + 'T00:00:00Z';
      break;
    }
    case 'all':
    default:
      startDate = '2002-12-07T00:00:00Z';
      break;
  }

  return { startDate, endDate };
};

export const DATE_RANGE_OPTIONS = [
  { value: '3months', label: '3개월' },
  { value: '6months', label: '6개월' },
  { value: '12months', label: '1년' },
  { value: '36months', label: '3년' },
  { value: 'all', label: '전체' },
];
