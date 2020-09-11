import React from 'react';
import { render } from '@testing-library/react';
import { Landing } from '.';
import { MemoryRouter } from 'react-router-dom';

describe('components/Landing', () => {
  it('should render correctly', () => {
    const { container } = render(
      <MemoryRouter>
        <Landing />
      </MemoryRouter>
    );
    expect(container).toMatchSnapshot();
  });
});
