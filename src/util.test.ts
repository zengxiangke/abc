import { sum } from './util'
import { test, expect } from '@jest/globals'

test('add 1 to 2 will get 3', () => {
  const result = sum(1, 2)
  expect(result).toBe(3)
})
