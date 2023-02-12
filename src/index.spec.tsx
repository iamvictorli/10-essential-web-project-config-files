import React from 'react'

import { render } from '@testing-library/react'
import { expect, test } from 'vitest'

test('math', () => {
  expect(1 + 1).toBe(2)
})

test('render', () => {
  const { getByText, container } = render(<div>hello</div>)
  expect(getByText('hello')).toBeTruthy()
  expect(container).toMatchSnapshot()
})
