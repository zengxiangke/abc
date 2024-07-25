import { expect, test } from '@jest/globals'
import Button from './Button'
// @ts-ignore
import renderer from 'react-test-renderer'

test('Button is a thing', () => {
  expect(Button).toBeTruthy()
})

test('Button snapshot', () => {
  const component = renderer.create(<Button />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
