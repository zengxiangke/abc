import axios from 'axios'
import { each, fetchUserCount, sum } from './util'
import { test, expect, jest } from '@jest/globals'

test('add 1 to 2 will get 3', () => {
  const result = sum(1, 2)
  expect(result).toBe(3)
})

test('play mock fn', () => {
  const mockCallback = jest.fn((item) => item)
  each([1, 2, 3], mockCallback)

  expect(mockCallback.mock.calls).toHaveLength(3)
  expect(mockCallback.mock.calls[0][0]).toBe(1)
  expect(mockCallback.mock.results[0].value).toBe(1)

  const mockCallback2 = jest.fn()
  const a = new mockCallback2()
  expect(mockCallback2.mock.instances).toHaveLength(1)

  const bound = mockCallback2.bind(a)
  bound()
  expect(mockCallback2.mock.contexts).toHaveLength(2)

  const mockCallback3 = jest.fn()
  mockCallback3.mockReturnValueOnce(10).mockReturnValueOnce('x').mockReturnValueOnce(false)
  console.log(mockCallback3(), mockCallback3())
})

jest.mock('axios')
test('Test get user count', async () => {
  // @ts-ignore
  axios.get.mockResolvedValue({ data: [1, 2, 3] })

  const count = await fetchUserCount()
  expect(count).toBe(3)
})

// partial mock
jest.mock('../foo-bar-baz', () => {
  const originalModule: any = jest.requireActual('../foo-bar-baz')

  //Mock the default export and named export 'foo'
  return {
    __esModule: true,
    ...originalModule,
    default: jest.fn(() => 'mocked baz'),
    foo: 'mocked foo',
  }
})
