import { Revenue } from './definitions';

const axios = require('axios');
const fetch = require('node-fetch');

export const formatCurrency = (amount: number) => {
  return (amount / 100).toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  });
};

export const formatDateToLocal = (dateStr: string, locale: string = 'en-US') => {
  const date = new Date(dateStr);
  const options: Intl.DateTimeFormatOptions = {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  };
  const formatter = new Intl.DateTimeFormat(locale, options);
  return formatter.format(date);
};

export const generateYAxis = (revenue: Revenue[]) => {
  // Calculate what labels we need to display on the y-axis
  // based on highest record and in 1000s
  const yAxisLabels = [];
  const highestRecord = Math.max(...revenue.map((month) => month.revenue));
  const topLabel = Math.ceil(highestRecord / 1000) * 1000;

  for (let i = topLabel; i >= 0; i -= 1000) {
    yAxisLabels.push(`$${i / 1000}K`);
  }

  return { yAxisLabels, topLabel };
};

export const generatePagination = (currentPage: number, totalPages: number) => {
  // If the total number of pages is 7 or less,
  // display all pages without any ellipsis.
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  // If the current page is among the first 3 pages,
  // show the first 3, an ellipsis, and the last 2 pages.
  if (currentPage <= 3) {
    return [1, 2, 3, '...', totalPages - 1, totalPages];
  }

  // If the current page is among the last 3 pages,
  // show the first 2, an ellipsis, and the last 3 pages.
  if (currentPage >= totalPages - 2) {
    return [1, 2, '...', totalPages - 2, totalPages - 1, totalPages];
  }

  // If the current page is somewhere in the middle,
  // show the first page, an ellipsis, the current page and its neighbors,
  // another ellipsis, and the last page.
  return [1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages];
};

export const getCNYRate = async () => {
  const response = await fetch('https://www.cbr-xml-daily.ru/daily_json.js');
  const data = await response.json();
  const cny = data.Valute.CNY.Value * 1.085;
  const usd = data.Valute.USD.Value * 1.05;
  const eur = data.Valute.EUR.Value * 1.05;
  return [cny, usd, eur];
};

// export async function getDeliveryCost(weight, cost, originCity, destinationCity) {
//   const apiUrl = 'https://otpravka.pochta.ru/api/1.0/tariff';
//   const token = '3o8LHOOpdITpO_MgyDblhgfRZzostLu7'; // необходимо заменить на ваш действительный токен
//
//   const requestData = {
//     object: "package",
//     method: "getPochtaRuDeliveryRate",
//     weight: weight,
//     amount: cost,
//     to: destinationCity,
//     from: originCity
//   };
//
//   try {
//     const response = await axios.post(apiUrl, requestData, {
//       headers: {
//         'Authorization': `Bearer ${token}`,
//         'Content-Type': 'application/json'
//       }
//     });
//
//     // Обработка ответа
//     const deliveryCost = response.data;
//     return deliveryCost;
//   } catch (error) {
//     console.error('Ошибка получения стоимости доставки:', error);
//     return null;
//   }
// }
//

// export const calculateShippingCost = async () => {
//   const url = 'https://www.pochta.ru/tariff-calculator-api?type=EMS&weight=1500&from=101000&to=630099';
//
//   try {
//     const response = await fetch(url);
//     const data = await response.json();
//     return data.price;
//   } catch (error) {
//     console.error('Error:', error);
//     return null;
//   }
// };
