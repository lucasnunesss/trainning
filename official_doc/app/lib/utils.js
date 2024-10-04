export const formatCurrency = (amount) => {
  return (amount / 100).toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  });
};

export const formatDateToLocal = (dateStr, locale = 'en-US') => {
  const date = new Date(dateStr);
  const options = {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  };
  const formatter = new Intl.DateTimeFormat(locale, options);
  return formatter.format(date);
};

// lib/utils.js
export const generateYAxis = (revenue) => {
  if (!Array.isArray(revenue) || revenue.length === 0) {
    return { yAxisLabels: [], topLabel: 0 };
  }

  const yAxisLabels = [];
  const highestRecord = Math.max(...revenue.map((month) => month.revenue));
  const topLabel = Math.ceil(highestRecord / 1000) * 1000;

  for (let i = topLabel; i >= 0; i -= 1000) {
    yAxisLabels.push(`$${i / 1000}K`);
  }

  return { yAxisLabels, topLabel };
};

export const generatePagination = (currentPage, totalPages) => {
  // Se o número total de páginas for 7 ou menos, exibe todas as páginas sem reticências.
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  // Se a página atual estiver entre as 3 primeiras, exibe as primeiras 3, uma reticência e as últimas 2 páginas.
  if (currentPage <= 3) {
    return [1, 2, 3, '...', totalPages - 1, totalPages];
  }

  // Se a página atual estiver entre as 3 últimas, exibe as primeiras 2, uma reticência e as últimas 3 páginas.
  if (currentPage >= totalPages - 2) {
    return [1, 2, '...', totalPages - 2, totalPages - 1, totalPages];
  }

  // Se a página atual estiver no meio, exibe a primeira página, uma reticência, a página atual e suas vizinhas,
  // outra reticência e a última página.
  return [
    1,
    '...',
    currentPage - 1,
    currentPage,
    currentPage + 1,
    '...',
    totalPages,
  ];
};
