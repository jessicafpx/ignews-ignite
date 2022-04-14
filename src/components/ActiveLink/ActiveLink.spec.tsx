import * as React from 'react';
import { render } from "@testing-library/react"
import { ActiveLink } from "../ActiveLink"

jest.mock('next/router', () => {
  return {
    useRouter() {
      return {
        asPath: '/'
      }
    }
  }
})

describe('ActiveLink component', () => {
  it('renders correctly', () => {
    const { debug, getByText } = render(
      <ActiveLink href="/" activeClassName="active">
        <a>Home</a>
      </ActiveLink>
    )

    // debug();

    expect(getByText('Home')).toBeInTheDocument()
  })

  it('adds active class if the link as currently active', () => {
    const { getByText } = render(
      <ActiveLink href="/" activeClassName="active">
        <a>Home</a>
      </ActiveLink>
    )

    expect(getByText('Home')).toHaveClass('active')
  })
})
