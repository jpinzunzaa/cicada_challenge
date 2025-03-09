interface MarketData {
  date: string;
  open: number;
  high: number;
  low: number;
  close: number;
}

export const calculate_price_day_difference = (price_day: MarketData) => {
  return price_day.close - price_day.open;
}