export const NGN_SYMBOL = "₦";
export const USD_TO_NGN_RATE = 1500;

export function formatNaira(price) {
  const value = Number(price) || 0;
  return `${NGN_SYMBOL}${value.toLocaleString()}`;
}

export function convertUsdToNaira(price) {
  const value = Number(price) || 0;
  return Math.round(value * USD_TO_NGN_RATE);
}
