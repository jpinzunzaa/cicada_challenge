import moment from "moment";

interface MarketData {
  date: string;
  open: number;
  high: number;
  low: number;
  close: number;
}

export const calculate_price_day_difference = (price_day: MarketData): number | string => {
  return price_day?.close && price_day?.open ? price_day.close - price_day.open : '';
}

export const exchange_rate_min_max = (data: MarketData[]) => {
  if (data.length === 0) return { min: null, max: null }

  const today = moment().utc().format('YYYY-MM-DD');
  const today_data = data.filter(({ date }) => moment(date).utc().format('YYYY-MM-DD') === today);

  if (today_data.length === 0) return { min: null, max: null }

  const values = today_data.map(({ open }) => open);

  return {
    min: Math.min(...values),
    max: Math.max(...values),
  }
}