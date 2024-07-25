import axios from 'axios'

export function sum(x: number, y: number): number {
  return x + y
}

export function each<T>(list: T[], cb: (item: T) => void): void {
  for (const item of list) {
    cb(item)
  }
}

export async function fetchUserCount() {
  const { data } = await axios.get('http://fake-url')
  return data.length
}
