import React from 'react';
import { render } from '@testing-library/react';
import App from '../../src/components/App';

describe('The first test', () => {
  let link;

  beforeEach(() => {
    const { getByText } = render(<App />);
    link = getByText(/learn react/i);
  });

  it('renders learn react link', () => {
    expect(link).to.exist;
  });
});
