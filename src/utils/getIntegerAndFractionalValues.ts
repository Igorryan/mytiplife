interface IReturnData {
  fullValue: string
  integerPart: string
  fractionalPart: string
}

export default function getIntegerAndFractionalValues(
  value: number
): IReturnData {
  const integerPart = value.toLocaleString('en-US', {
    currency: 'USD',
    maximumFractionDigits: 0,
    minimumFractionDigits: 0
  })

  const [, fractionalPart] = value.toFixed(2).toString().split('.')

  const fullValue = value.toLocaleString('en-US', {
    currency: 'USD',
    maximumFractionDigits: 2,
    minimumFractionDigits: 2
  })

  return {
    fullValue,
    integerPart,
    fractionalPart
  }
}
