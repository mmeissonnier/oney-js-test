import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { fireEvent, screen, waitFor } from '@testing-library/dom';
import { enableFetchMocks } from 'jest-fetch-mock';
import { SignInContainer } from '.';

describe('container/SignIn', () => {
  enableFetchMocks();

  it('should call API on submit', async () => {
    fetchMock.mockOnce(
      JSON.stringify({
        id: 11,
        user: { email: 'foo@test.com', name: 'foobar' },
      })
    );
    render(
      <MemoryRouter>
        <SignInContainer />
      </MemoryRouter>
    );
    fireEvent.change(screen.getByTestId('input.email'), {
      target: { value: 'foo@test.com' },
    });
    fireEvent.change(screen.getByTestId('input.name'), {
      target: { value: 'foobar' },
    });

    fireEvent.click(screen.getByTestId('signin.form.submit'));
    expect(fetchMock.mock.calls[0][0]).toEqual(
      'http://jsonplaceholder.typicode.com/users'
    );
  });
});
