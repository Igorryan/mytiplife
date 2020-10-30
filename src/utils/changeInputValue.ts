import { RefObject } from 'react'

export default function changeInputValue(
  value: string,
  input: RefObject<HTMLInputElement>
) {
  if (input.current) {
    input.current.value = value
  }
}
