export const formatCurrency = (amount) => {
  return `$ ${(amount || 0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}`
}
