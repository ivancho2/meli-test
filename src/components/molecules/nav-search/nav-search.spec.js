import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { NavSearch } from './nav-search'
import * as nextRouter from 'next/router'

nextRouter.useRouter = jest.fn()
nextRouter.useRouter.mockImplementation(() => ({
  route: '/',
  query: { search: 'hello' },
}))

describe('nav-search', () => {
  it('snap', () => {
    // Arrange (Organizar/Inicializa)
    const { baseElement } = render(<NavSearch />)
    // Act (Actuar)
    // Assert (Confirmar/Comprobar)
    expect(baseElement).toMatchSnapshot('render with value')
  })

  it('set input value', () => {
    // Arrange (Organizar/Inicializa)
    const { getByPlaceholderText } = render(<NavSearch />)
    const inputSearch = getByPlaceholderText('Nunca dejes de buscar')

    // Act (Actuar)
    userEvent.clear(inputSearch)
    userEvent.type(inputSearch, 'celular')

    // Assert (Confirmar/Comprobar)
    expect(inputSearch).toHaveValue('celular')
  })

  it('sutmit event', () => {
    // Arrange (Organizar/Inicializa)
    const { getByRole } = render(<NavSearch />)
    const form = getByRole('search')
    const submitEventMock = jest.fn()

    // Act (Actuar)
    form.onsubmit = submitEventMock

    fireEvent.submit(form)
    // Assert (Confirmar/Comprobar)
    expect(submitEventMock).toBeCalledTimes(1)
  })
})
