export default function getFractionalNumber(value: number): number {
  const [, fractional] = value.toFixed(2).toString().split('.')
  const fractionalFormatted = fractional ? Number(fractional) : 0
  return fractionalFormatted
}
