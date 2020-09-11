import React from 'react';
import { render } from '@testing-library/react';
import { screen, fireEvent } from '@testing-library/dom';
import { SignIn } from '.';
import { MemoryRouter } from 'react-router-dom';

describe('components/SignIn', () => {
  it('should render correctly', () => {
    const { container } = render(
      <MemoryRouter>
        <SignIn onSubmit={jest.fn()} />
      </MemoryRouter>
    );
    expect(container).toMatchSnapshot();
  });

  it('should call onSubmit with correct values', () => {
    const handleSubmit = jest.fn();
    render(
      <MemoryRouter>
        <SignIn onSubmit={handleSubmit} />
      </MemoryRouter>
    );
    fireEvent.change(screen.getByTestId('input.email'), {
      target: { value: 'foo@test.com' },
    });
    fireEvent.change(screen.getByTestId('input.name'), {
      target: { value: 'foo' },
    });
    fireEvent.click(screen.getByText('Create my account'));
    expect(handleSubmit).toHaveBeenCalledWith({
      email: 'foo@test.com',
      name: 'foo',
    });
  });

  it('should display an error when email is invalid', () => {
    const handleSubmit = jest.fn();
    render(
      <MemoryRouter>
        <SignIn onSubmit={handleSubmit} />
      </MemoryRouter>
    );
    fireEvent.change(screen.getByTestId('input.email'), {
      target: { value: 'foo-bar-biz' },
    });
    fireEvent.click(screen.getByText('Create my account'));
    expect(handleSubmit).not.toHaveBeenCalledWith();
    expect(screen.getByText('Invalid email')).toBeDefined();
  });
});
