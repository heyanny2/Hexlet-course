/*Реализуйте функцию formatPrice(), которая принимает число и возвращает строку с округлением до второго числа после запятой,
если пришел null или undefined должна вернуться '$0.00'. */

function formatPrice(price?: number | null): string {
  if (price === undefined || price === null) {
    return '$0.00';
  }

  return `$${price.toFixed(2)}`;
}

export default formatPrice;
