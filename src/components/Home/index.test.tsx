import React from 'react';
import { render } from '@testing-library/react';
import { Home } from '.';

describe('components/Home', () => {
  it('should render correctly', () => {
    const { container } = render(
      <Home userInfo={{ id: 0, email: 'foo@test.com', name: 'foobar' }} />
    );
    expect(container).toMatchSnapshot();
  });
});
